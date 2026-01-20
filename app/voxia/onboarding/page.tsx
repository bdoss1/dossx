import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'
import { getGatingContext, ensureOrganization } from '@/lib/voxia/gating'

export default async function OnboardingPage() {
  const { userId } = await auth()

  if (!userId) {
    redirect('/sign-in?redirect_url=/voxia/onboarding')
  }

  // Ensure user has an organization
  await ensureOrganization(userId)

  // Get current gating context
  const context = await getGatingContext()

  if (!context.isAuthenticated) {
    redirect('/sign-in?redirect_url=/voxia/onboarding')
  }

  // Route based on current state
  const hasActiveSubscription = context.subscription &&
    ['ACTIVE', 'TRIALING'].includes(context.subscription.status)

  if (!hasActiveSubscription) {
    redirect('/voxia/onboarding/plan')
  }

  // Has subscription - check setup status
  if (context.onboardingState?.stage === 'SETUP_SUBMITTED' ||
      context.onboardingState?.stage === 'COMPLETE') {
    redirect('/dashboard')
  }

  // Paid but need setup
  redirect('/voxia/onboarding/setup')
}
