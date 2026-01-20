import { NextRequest, NextResponse } from 'next/server'
import { exchangeMicrosoftCode } from '@/lib/oauth/microsoft'
import { db } from '@/lib/db'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const code = searchParams.get('code')
    const state = searchParams.get('state')
    const error = searchParams.get('error')

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || req.nextUrl.origin

    // Handle OAuth errors
    if (error) {
      console.error('Microsoft OAuth error:', error)
      return NextResponse.redirect(
        `${baseUrl}/dashboard/voxia/calendar?error=microsoft_denied`
      )
    }

    if (!code || !state) {
      return NextResponse.redirect(
        `${baseUrl}/dashboard/voxia/calendar?error=missing_params`
      )
    }

    // Decode and verify state
    let stateData: { orgId: string; userId: string; timestamp: number }
    try {
      stateData = JSON.parse(Buffer.from(state, 'base64').toString())
    } catch {
      return NextResponse.redirect(
        `${baseUrl}/dashboard/voxia/calendar?error=invalid_state`
      )
    }

    // Check state is not too old (15 minutes)
    if (Date.now() - stateData.timestamp > 15 * 60 * 1000) {
      return NextResponse.redirect(
        `${baseUrl}/dashboard/voxia/calendar?error=expired_state`
      )
    }

    // Exchange code for tokens
    const tokens = await exchangeMicrosoftCode(code)

    // Upsert calendar connection
    await db.calendarConnection.upsert({
      where: {
        orgId_provider: {
          orgId: stateData.orgId,
          provider: 'MICROSOFT',
        },
      },
      update: {
        accessTokenEncrypted: tokens.accessToken,
        refreshTokenEncrypted: tokens.refreshToken,
        expiresAt: tokens.expiresAt,
        email: tokens.email,
        scopes: 'offline_access Calendars.Read Calendars.ReadBasic User.Read',
      },
      create: {
        orgId: stateData.orgId,
        provider: 'MICROSOFT',
        accessTokenEncrypted: tokens.accessToken,
        refreshTokenEncrypted: tokens.refreshToken,
        expiresAt: tokens.expiresAt,
        email: tokens.email,
        scopes: 'offline_access Calendars.Read Calendars.ReadBasic User.Read',
      },
    })

    return NextResponse.redirect(
      `${baseUrl}/dashboard/voxia/calendar?success=microsoft_connected`
    )
  } catch (error) {
    console.error('Microsoft OAuth callback error:', error)
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || req.nextUrl.origin
    return NextResponse.redirect(
      `${baseUrl}/dashboard/voxia/calendar?error=microsoft_failed`
    )
  }
}
