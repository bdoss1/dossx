import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-04-30.basil',
  typescript: true,
})

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
