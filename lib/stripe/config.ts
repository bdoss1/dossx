import Stripe from 'stripe'

// Use a placeholder during build time, actual key required at runtime
const stripeSecretKey = process.env.STRIPE_SECRET_KEY || 'sk_placeholder_for_build'

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2025-08-27.basil',
  typescript: true,
})

export function requireStripeKey() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not set')
  }
}

export const VOXIA_PRICES = {
  LAUNCH: process.env.STRIPE_PRICE_VOXIA_LAUNCH || '',
  GROWTH: process.env.STRIPE_PRICE_VOXIA_GROWTH || '',
  SCALE: process.env.STRIPE_PRICE_VOXIA_SCALE || '',
} as const

export type VoxiaPlanType = keyof typeof VOXIA_PRICES

export function getPriceIdForPlan(plan: VoxiaPlanType): string {
  const priceId = VOXIA_PRICES[plan]
  if (!priceId) {
    throw new Error(`No price ID configured for plan: ${plan}`)
  }
  return priceId
}

export const STRIPE_CUSTOMER_PORTAL_RETURN_URL =
  process.env.STRIPE_CUSTOMER_PORTAL_RETURN_URL || 'http://localhost:3000/dashboard/billing'
