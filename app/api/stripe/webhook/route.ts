import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe/config'
import { getDb } from '@/lib/db'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Types matching Prisma schema
type SubscriptionStatus = 'ACTIVE' | 'TRIALING' | 'PAST_DUE' | 'CANCELED' | 'INCOMPLETE' | 'INCOMPLETE_EXPIRED' | 'UNPAID' | 'PAUSED'
type VoxiaPlan = 'LAUNCH' | 'GROWTH' | 'SCALE'

// Stripe requires raw body for webhook signature verification
export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = req.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json(
      { error: 'Missing stripe-signature header' },
      { status: 400 }
    )
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!webhookSecret) {
    console.error('STRIPE_WEBHOOK_SECRET is not configured')
    return NextResponse.json(
      { error: 'Webhook not configured' },
      { status: 500 }
    )
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    )
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutSessionCompleted(event.data.object as Stripe.Checkout.Session)
        break

      case 'customer.subscription.created':
      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(event.data.object)
        break

      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object)
        break

      case 'invoice.paid':
        await handleInvoicePaid(event.data.object)
        break

      case 'invoice.payment_failed':
        await handleInvoicePaymentFailed(event.data.object)
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook handler error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapStripeStatus(status: string): SubscriptionStatus {
  const statusMap: Record<string, SubscriptionStatus> = {
    active: 'ACTIVE',
    trialing: 'TRIALING',
    past_due: 'PAST_DUE',
    canceled: 'CANCELED',
    incomplete: 'INCOMPLETE',
    incomplete_expired: 'INCOMPLETE_EXPIRED',
    unpaid: 'UNPAID',
    paused: 'PAUSED',
  }
  return statusMap[status] || 'INCOMPLETE'
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getPlanFromMetadata(metadata: any): VoxiaPlan {
  const plan = metadata?.plan?.toUpperCase()
  if (plan === 'LAUNCH' || plan === 'GROWTH' || plan === 'SCALE') {
    return plan
  }
  return 'LAUNCH' // Default
}

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  const { orgId, plan } = session.metadata || {}

  if (!orgId || !session.subscription) {
    console.error('Missing orgId or subscription in checkout session')
    return
  }

  const subscriptionId = typeof session.subscription === 'string'
    ? session.subscription
    : session.subscription.id

  const customerId = typeof session.customer === 'string'
    ? session.customer
    : session.customer?.id

  if (!customerId) {
    console.error('Missing customer ID in checkout session')
    return
  }

  // Fetch the subscription details
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const subscriptionData = await stripe.subscriptions.retrieve(subscriptionId) as any

  const db = await getDb()

  // Upsert subscription record
  await db.subscription.upsert({
    where: { stripeSubscriptionId: subscriptionId },
    update: {
      status: mapStripeStatus(subscriptionData.status),
      currentPeriodEnd: new Date(subscriptionData.current_period_end * 1000),
    },
    create: {
      orgId,
      stripeCustomerId: customerId,
      stripeSubscriptionId: subscriptionId,
      status: mapStripeStatus(subscriptionData.status),
      plan: getPlanFromMetadata({ plan: plan || null }),
      currentPeriodEnd: new Date(subscriptionData.current_period_end * 1000),
    },
  })

  // Update onboarding state to PAID
  await db.onboardingState.upsert({
    where: { orgId },
    update: {
      stage: 'PAID',
      selectedPlan: getPlanFromMetadata({ plan: plan || null }),
    },
    create: {
      orgId,
      stage: 'PAID',
      selectedPlan: getPlanFromMetadata({ plan: plan || null }),
    },
  })

  console.log(`Checkout completed for org ${orgId}, subscription ${subscriptionId}`)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handleSubscriptionUpdated(subscription: any) {
  const { orgId } = subscription.metadata || {}

  const db = await getDb()

  // Try to find existing subscription by Stripe ID
  const existingSub = await db.subscription.findUnique({
    where: { stripeSubscriptionId: subscription.id },
  })

  if (existingSub) {
    await db.subscription.update({
      where: { stripeSubscriptionId: subscription.id },
      data: {
        status: mapStripeStatus(subscription.status),
        currentPeriodEnd: new Date(subscription.current_period_end * 1000),
      },
    })
    console.log(`Subscription ${subscription.id} updated to ${subscription.status}`)
  } else if (orgId) {
    // Create new subscription record if we have orgId
    const customerId = typeof subscription.customer === 'string'
      ? subscription.customer
      : subscription.customer.id

    await db.subscription.create({
      data: {
        orgId,
        stripeCustomerId: customerId,
        stripeSubscriptionId: subscription.id,
        status: mapStripeStatus(subscription.status),
        plan: getPlanFromMetadata(subscription.metadata),
        currentPeriodEnd: new Date(subscription.current_period_end * 1000),
      },
    })
    console.log(`New subscription ${subscription.id} created for org ${orgId}`)
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handleSubscriptionDeleted(subscription: any) {
  const db = await getDb()
  await db.subscription.updateMany({
    where: { stripeSubscriptionId: subscription.id },
    data: {
      status: 'CANCELED',
    },
  })
  console.log(`Subscription ${subscription.id} marked as canceled`)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handleInvoicePaid(invoice: any) {
  if (!invoice.subscription) return

  const subscriptionId = typeof invoice.subscription === 'string'
    ? invoice.subscription
    : invoice.subscription.id

  const db = await getDb()

  // Ensure subscription is marked as active
  await db.subscription.updateMany({
    where: { stripeSubscriptionId: subscriptionId },
    data: {
      status: 'ACTIVE',
    },
  })
  console.log(`Invoice paid for subscription ${subscriptionId}`)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handleInvoicePaymentFailed(invoice: any) {
  if (!invoice.subscription) return

  const subscriptionId = typeof invoice.subscription === 'string'
    ? invoice.subscription
    : invoice.subscription.id

  const db = await getDb()

  // Mark subscription as past due
  await db.subscription.updateMany({
    where: { stripeSubscriptionId: subscriptionId },
    data: {
      status: 'PAST_DUE',
    },
  })
  console.log(`Payment failed for subscription ${subscriptionId}`)
}
