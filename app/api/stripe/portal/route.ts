import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { stripe, STRIPE_CUSTOMER_PORTAL_RETURN_URL } from '@/lib/stripe/config'
import { db } from '@/lib/db'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    // Find user's organization and subscription
    const orgMember = await db.orgMember.findFirst({
      where: { userId },
      include: {
        organization: {
          include: {
            subscriptions: {
              orderBy: { createdAt: 'desc' },
              take: 1,
            },
          },
        },
      },
    })

    if (!orgMember?.organization.subscriptions[0]) {
      return NextResponse.json(
        { error: 'No subscription found' },
        { status: 404 }
      )
    }

    const subscription = orgMember.organization.subscriptions[0]

    // Create Stripe billing portal session
    const session = await stripe.billingPortal.sessions.create({
      customer: subscription.stripeCustomerId,
      return_url: STRIPE_CUSTOMER_PORTAL_RETURN_URL,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Portal session creation error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create portal session' },
      { status: 500 }
    )
  }
}
