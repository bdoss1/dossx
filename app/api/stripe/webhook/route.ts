import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe/config'
import { db, SubscriptionStatus, VoxiaPlan, OnboardingStage } from '@/lib/db'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

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
        await handleSubscriptionUpdated(event.data.object as Stripe.Subscription)
        break

      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription)
        break

      case 'invoice.paid':
        await handleInvoicePaid(event.data.object as Stripe.Invoice)
        break

      case 'invoice.payment_failed':
        await handleInvoicePaymentFailed(event.data.object as Stripe.Invoice)
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

function mapStripeStatus(status: Stripe.Subscription.Status): SubscriptionStatus {
  const statusMap: Record<Stripe.Subscription.Status, SubscriptionStatus> = {
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

function getPlanFromMetadata(metadata: Stripe.Metadata | null): VoxiaPlan {
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
  const subscription = await stripe.subscriptions.retrieve(subscriptionId)

  // Upsert subscription record
  await db.subscription.upsert({
    where: { stripeSubscriptionId: subscriptionId },
    update: {
      status: mapStripeStatus(subscription.status),
      currentPeriodEnd: new Date(subscription.current_period_end * 1000),
    },
    create: {
      orgId,
      stripeCustomerId: customerId,
      stripeSubscriptionId: subscriptionId,
      status: mapStripeStatus(subscription.status),
      plan: getPlanFromMetadata({ plan: plan || null }),
      currentPeriodEnd: new Date(subscription.current_period_end * 1000),
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

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  const { orgId } = subscription.metadata || {}

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

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  await db.subscription.updateMany({
    where: { stripeSubscriptionId: subscription.id },
    data: {
      status: 'CANCELED',
    },
  })
  console.log(`Subscription ${subscription.id} marked as canceled`)
}

async function handleInvoicePaid(invoice: Stripe.Invoice) {
  if (!invoice.subscription) return

  const subscriptionId = typeof invoice.subscription === 'string'
    ? invoice.subscription
    : invoice.subscription.id

  // Ensure subscription is marked as active
  await db.subscription.updateMany({
    where: { stripeSubscriptionId: subscriptionId },
    data: {
      status: 'ACTIVE',
    },
  })
  console.log(`Invoice paid for subscription ${subscriptionId}`)
}

async function handleInvoicePaymentFailed(invoice: Stripe.Invoice) {
  if (!invoice.subscription) return

  const subscriptionId = typeof invoice.subscription === 'string'
    ? invoice.subscription
    : invoice.subscription.id

  // Mark subscription as past due
  await db.subscription.updateMany({
    where: { stripeSubscriptionId: subscriptionId },
    data: {
      status: 'PAST_DUE',
    },
  })
  console.log(`Payment failed for subscription ${subscriptionId}`)
}

/**
 * Verify a Stripe webhook signature (exported for testing)
 */
export function verifyWebhookSignature(
  payload: string,
  signature: string,
  secret: string
): Stripe.Event | null {
  try {
    return stripe.webhooks.constructEvent(payload, signature, secret)
  } catch {
    return null
  }
}
