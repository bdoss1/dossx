import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { getMicrosoftAuthUrl, isMicrosoftOAuthConfigured } from '@/lib/oauth/microsoft'
import { db } from '@/lib/db'
import { v4 as uuid } from 'uuid'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    if (!isMicrosoftOAuthConfigured()) {
      return NextResponse.json(
        { error: 'Microsoft Calendar integration is not configured' },
        { status: 503 }
      )
    }

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

    if (!orgMember?.organization.subscriptions[0]) {
      return NextResponse.json(
        { error: 'Active subscription required' },
        { status: 403 }
      )
    }

    // Generate state token for CSRF protection
    const state = Buffer.from(
      JSON.stringify({
        orgId: orgMember.organization.id,
        userId,
        nonce: uuid(),
        timestamp: Date.now(),
      })
    ).toString('base64')

    const authUrl = getMicrosoftAuthUrl(state)

    return NextResponse.redirect(authUrl)
  } catch (error) {
    console.error('Microsoft OAuth start error:', error)
    return NextResponse.json(
      { error: 'Failed to start Microsoft authorization' },
      { status: 500 }
    )
  }
}
