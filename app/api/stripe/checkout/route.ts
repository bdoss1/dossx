import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { stripe, getPriceIdForPlan, VoxiaPlanType } from '@/lib/stripe/config'
import { getDb } from '@/lib/db'
import { ensureOrganization } from '@/lib/voxia/gating'

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

    const body = await req.json()
    const { plan } = body as { plan: VoxiaPlanType }

    if (!plan || !['LAUNCH', 'GROWTH', 'SCALE'].includes(plan)) {
      return NextResponse.json(
        { error: 'Invalid plan selected' },
        { status: 400 }
      )
    }

    // Ensure user has an organization
    const orgId = await ensureOrganization(userId)

    const db = await getDb()

    // Get or create Stripe customer
    const org = await db.organization.findUnique({
      where: { id: orgId },
      include: {
        subscriptions: {
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
      },
    })

    let stripeCustomerId = org?.subscriptions[0]?.stripeCustomerId

    if (!stripeCustomerId) {
      // Create a new Stripe customer
      const customer = await stripe.customers.create({
        metadata: {
          orgId,
          userId,
        },
      })
      stripeCustomerId = customer.id
    }

    // Get the price ID for the selected plan
    const priceId = getPriceIdForPlan(plan)

    // Update onboarding state
    await db.onboardingState.upsert({
      where: { orgId },
      update: {
        selectedPlan: plan,
        stage: 'PLAN_SELECTED',
      },
      create: {
        orgId,
        selectedPlan: plan,
        stage: 'PLAN_SELECTED',
      },
    })

    // Create Stripe Checkout session
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || req.nextUrl.origin

    const session = await stripe.checkout.sessions.create({
      customer: stripeCustomerId,
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/voxia/onboarding/setup?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/voxia/onboarding/plan?canceled=1`,
      metadata: {
        orgId,
        userId,
        plan,
      },
      subscription_data: {
        metadata: {
          orgId,
          userId,
          plan,
        },
      },
    })

    return NextResponse.json({
      id: session.id,
      url: session.url,
    })
  } catch (error) {
    console.error('Checkout session creation error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
