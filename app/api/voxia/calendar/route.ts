import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { getDb } from '@/lib/db'
import { calendarRulesSchema } from '@/lib/voxia/types'
import { listGoogleCalendars, refreshGoogleToken } from '@/lib/oauth/google'
import { listMicrosoftCalendars, refreshMicrosoftToken } from '@/lib/oauth/microsoft'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Calendar connection type
interface CalendarConnectionRecord {
  id: string
  provider: string
  accessTokenEncrypted: string
  refreshTokenEncrypted: string
  expiresAt: Date
  email: string | null
  calendarIdsJson: unknown
  createdAt: Date
}

// GET - Fetch calendar connections and rules
export async function GET() {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    const db = await getDb()

    // Find user's organization
    const orgMember = await db.orgMember.findFirst({
      where: { userId },
      include: {
        organization: {
          include: {
            calendarConnections: true,
            calendarRules: { take: 1 },
          },
        },
      },
    })

    if (!orgMember) {
      return NextResponse.json({ connections: [], rules: null })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const org = orgMember.organization as any

    // Fetch calendars from each connected provider
    const connections = await Promise.all(
      (org.calendarConnections as CalendarConnectionRecord[]).map(async (conn: CalendarConnectionRecord) => {
        let calendars: { id: string; name: string; primary?: boolean }[] = []
        const needsRefresh = new Date() >= conn.expiresAt

        try {
          // Refresh token if needed
          if (needsRefresh) {
            if (conn.provider === 'GOOGLE') {
              const refreshed = await refreshGoogleToken(conn.refreshTokenEncrypted)
              await db.calendarConnection.update({
                where: { id: conn.id },
                data: {
                  accessTokenEncrypted: refreshed.accessToken,
                  expiresAt: refreshed.expiresAt,
                },
              })
              conn.accessTokenEncrypted = refreshed.accessToken
            } else if (conn.provider === 'MICROSOFT') {
              const refreshed = await refreshMicrosoftToken(conn.refreshTokenEncrypted)
              await db.calendarConnection.update({
                where: { id: conn.id },
                data: {
                  accessTokenEncrypted: refreshed.accessToken,
                  refreshTokenEncrypted: refreshed.refreshToken,
                  expiresAt: refreshed.expiresAt,
                },
              })
              conn.accessTokenEncrypted = refreshed.accessToken
            }
          }

          // Fetch calendars
          if (conn.provider === 'GOOGLE') {
            const googleCals = await listGoogleCalendars(conn.accessTokenEncrypted)
            calendars = googleCals.map((c: { id: string; summary: string; primary?: boolean }) => ({
              id: c.id,
              name: c.summary,
              primary: c.primary,
            }))
          } else if (conn.provider === 'MICROSOFT') {
            const msCals = await listMicrosoftCalendars(conn.accessTokenEncrypted)
            calendars = msCals.map((c: { id: string; name: string; isDefaultCalendar?: boolean }) => ({
              id: c.id,
              name: c.name,
              primary: c.isDefaultCalendar,
            }))
          }
        } catch (error) {
          console.error(`Error fetching calendars for ${conn.provider}:`, error)
        }

        return {
          id: conn.id,
          provider: conn.provider,
          email: conn.email,
          selectedCalendarIds: (conn.calendarIdsJson as string[]) || [],
          availableCalendars: calendars,
          createdAt: conn.createdAt,
        }
      })
    )

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rules = (org.calendarRules as any[])[0]?.rulesJson || null

    return NextResponse.json({
      connections,
      rules,
    })
  } catch (error) {
    console.error('Calendar fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch calendar data' },
      { status: 500 }
    )
  }
}

// POST - Update calendar rules and selected calendars
export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    const body = await req.json()

    const db = await getDb()

    // Find user's organization
    const orgMember = await db.orgMember.findFirst({
      where: { userId },
      include: {
        organization: {
          include: {
            subscriptions: {
              where: { status: { in: ['ACTIVE', 'TRIALING'] } },
              take: 1,
            },
          },
        },
      },
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const org = orgMember?.organization as any

    if (!org?.subscriptions?.[0]) {
      return NextResponse.json(
        { error: 'Active subscription required' },
        { status: 403 }
      )
    }

    const orgId = org.id

    // Handle selected calendars update
    if (body.connectionId && body.selectedCalendarIds) {
      await db.calendarConnection.update({
        where: {
          id: body.connectionId,
          orgId, // Ensure ownership
        },
        data: {
          calendarIdsJson: body.selectedCalendarIds,
        },
      })
    }

    // Handle rules update
    if (body.rules) {
      const parseResult = calendarRulesSchema.safeParse(body.rules)

      if (!parseResult.success) {
        return NextResponse.json(
          { error: 'Invalid rules data', details: parseResult.error.flatten() },
          { status: 400 }
        )
      }

      await db.calendarRule.upsert({
        where: {
          id: body.rulesId || '00000000-0000-0000-0000-000000000000',
        },
        update: {
          rulesJson: parseResult.data,
        },
        create: {
          orgId,
          rulesJson: parseResult.data,
        },
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Calendar update error:', error)
    return NextResponse.json(
      { error: 'Failed to update calendar settings' },
      { status: 500 }
    )
  }
}

// DELETE - Disconnect a calendar
export async function DELETE(req: NextRequest) {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(req.url)
    const connectionId = searchParams.get('id')

    if (!connectionId) {
      return NextResponse.json(
        { error: 'Connection ID required' },
        { status: 400 }
      )
    }

    const db = await getDb()

    // Verify ownership
    const orgMember = await db.orgMember.findFirst({
      where: { userId },
      include: {
        organization: {
          include: {
            calendarConnections: {
              where: { id: connectionId },
            },
          },
        },
      },
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const org = orgMember?.organization as any

    if (!org?.calendarConnections?.[0]) {
      return NextResponse.json(
        { error: 'Calendar connection not found' },
        { status: 404 }
      )
    }

    await db.calendarConnection.delete({
      where: { id: connectionId },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Calendar disconnect error:', error)
    return NextResponse.json(
      { error: 'Failed to disconnect calendar' },
      { status: 500 }
    )
  }
}
