import { redirect } from 'next/navigation'

// This page just redirects - actual checkout happens via Stripe redirect
export default function CheckoutPage() {
  redirect('/voxia/onboarding/plan')
}
