import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { getDb } from '@/lib/db'

export type GatingResult = {
  isAuthenticated: false
} | {
  isAuthenticated: true
  userId: string
  organization: {
    id: string
    name: string
    timezone: string
  } | null
  subscription: {
    id: string
    status: string
    plan: string
    currentPeriodEnd: Date | null
  } | null
  onboardingState: {
    stage: string
    selectedPlan: string | null
  } | null
  agent: {
    id: string
    name: string
    status: string
  } | null
}

/**
 * Get the full gating context for the current user
 */
export async function getGatingContext(): Promise<GatingResult> {
  const { userId } = await auth()

  if (!userId) {
    return { isAuthenticated: false }
  }

  const db = await getDb()

  // Find the user's organization
  const orgMember = await db.orgMember.findFirst({
    where: { userId },
    include: {
      organization: {
        include: {
          subscriptions: {
            orderBy: { createdAt: 'desc' },
            take: 1,
          },
          onboardingState: true,
          voxiaAgents: {
            orderBy: { createdAt: 'desc' },
            take: 1,
          },
        },
      },
    },
  })

  if (!orgMember) {
    return {
      isAuthenticated: true,
      userId,
      organization: null,
      subscription: null,
      onboardingState: null,
      agent: null,
    }
  }

  const org = orgMember.organization
  const subscription = org.subscriptions[0] || null
  const onboardingState = org.onboardingState
  const agent = org.voxiaAgents[0] || null

  return {
    isAuthenticated: true,
    userId,
    organization: {
      id: org.id,
      name: org.name,
      timezone: org.timezone,
    },
    subscription: subscription ? {
      id: subscription.id,
      status: subscription.status,
      plan: subscription.plan,
      currentPeriodEnd: subscription.currentPeriodEnd,
    } : null,
    onboardingState: onboardingState ? {
      stage: onboardingState.stage,
      selectedPlan: onboardingState.selectedPlan,
    } : null,
    agent: agent ? {
      id: agent.id,
      name: agent.name,
      status: agent.status,
    } : null,
  }
}

/**
 * Ensure user has an organization, creating one if needed
 */
export async function ensureOrganization(userId: string): Promise<string> {
  const db = await getDb()

  // Check if user already has an org
  const existingMember = await db.orgMember.findFirst({
    where: { userId },
  })

  if (existingMember) {
    return existingMember.orgId
  }

  // Create a new organization for the user
  const org = await db.organization.create({
    data: {
      ownerUserId: userId,
      name: 'My Organization',
      timezone: 'America/New_York',
      members: {
        create: {
          userId,
          role: 'OWNER',
        },
      },
      onboardingState: {
        create: {
          stage: 'STARTED',
        },
      },
    },
  })

  return org.id
}

/**
 * Gate helper for onboarding pages
 * Returns redirect path if gating fails, null if user can proceed
 */
export async function getOnboardingRedirect(
  currentPath: string
): Promise<string | null> {
  const context = await getGatingContext()

  if (!context.isAuthenticated) {
    return `/sign-in?redirect_url=${encodeURIComponent(currentPath)}`
  }

  // No subscription and trying to access setup
  if (!context.subscription && currentPath.includes('/setup')) {
    return '/voxia/onboarding/plan'
  }

  // Has active subscription but trying to access plan selection
  const hasActiveSubscription = context.subscription &&
    ['ACTIVE', 'TRIALING'].includes(context.subscription.status)

  if (hasActiveSubscription && currentPath.includes('/plan')) {
    // If setup not submitted, go to setup
    if (context.onboardingState?.stage !== 'SETUP_SUBMITTED' &&
        context.onboardingState?.stage !== 'COMPLETE') {
      return '/voxia/onboarding/setup'
    }
    // Otherwise go to dashboard
    return '/dashboard'
  }

  // Setup already submitted, redirect to dashboard
  if (context.onboardingState?.stage === 'SETUP_SUBMITTED' ||
      context.onboardingState?.stage === 'COMPLETE') {
    if (currentPath.includes('/setup') || currentPath.includes('/plan')) {
      return '/dashboard'
    }
  }

  return null
}

/**
 * Gate helper for dashboard pages
 * Returns redirect path if gating fails, null if user can proceed
 */
export async function getDashboardRedirect(
  currentPath: string
): Promise<string | null> {
  const context = await getGatingContext()

  if (!context.isAuthenticated) {
    return `/sign-in?redirect_url=${encodeURIComponent(currentPath)}`
  }

  // No subscription at all
  if (!context.subscription) {
    return '/voxia/onboarding/plan'
  }

  // Subscription exists but not active (past_due, canceled, etc.)
  const hasActiveSubscription = ['ACTIVE', 'TRIALING'].includes(context.subscription.status)

  // If subscription is not active and trying to access Voxia features (not billing)
  if (!hasActiveSubscription && !currentPath.includes('/billing')) {
    return '/dashboard/billing?status=inactive'
  }

  // Has subscription but setup not submitted
  if (context.onboardingState?.stage !== 'SETUP_SUBMITTED' &&
      context.onboardingState?.stage !== 'COMPLETE') {
    return '/voxia/onboarding/setup'
  }

  return null
}

/**
 * Check if subscription allows feature access
 */
export function canAccessFeature(
  subscriptionStatus: string | null | undefined
): boolean {
  if (!subscriptionStatus) return false
  return ['ACTIVE', 'TRIALING'].includes(subscriptionStatus)
}

/**
 * Perform gating check and redirect if necessary
 * For use in server components
 */
export async function gateOnboarding(currentPath: string): Promise<GatingResult> {
  const redirectPath = await getOnboardingRedirect(currentPath)
  if (redirectPath) {
    redirect(redirectPath)
  }
  return getGatingContext()
}

export async function gateDashboard(currentPath: string): Promise<GatingResult> {
  const redirectPath = await getDashboardRedirect(currentPath)
  if (redirectPath) {
    redirect(redirectPath)
  }
  return getGatingContext()
}
