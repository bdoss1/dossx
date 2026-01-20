import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { db } from '@/lib/db'

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

    // Find user's organization
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
              include: {
                knowledgeSources: true,
              },
            },
            calendarConnections: true,
          },
        },
      },
    })

    if (!orgMember) {
      return NextResponse.json({
        hasOrganization: false,
        hasSubscription: false,
        subscriptionStatus: null,
        onboardingStage: null,
        agentStatus: null,
        knowledgeSourcesCount: 0,
        calendarConnected: false,
      })
    }

    const org = orgMember.organization
    const subscription = org.subscriptions[0]
    const agent = org.voxiaAgents[0]

    return NextResponse.json({
      hasOrganization: true,
      organizationId: org.id,
      organizationName: org.name,
      hasSubscription: !!subscription,
      subscriptionStatus: subscription?.status || null,
      subscriptionPlan: subscription?.plan || null,
      currentPeriodEnd: subscription?.currentPeriodEnd || null,
      onboardingStage: org.onboardingState?.stage || null,
      selectedPlan: org.onboardingState?.selectedPlan || null,
      agentId: agent?.id || null,
      agentName: agent?.name || null,
      agentStatus: agent?.status || null,
      knowledgeSourcesCount: agent?.knowledgeSources.length || 0,
      knowledgeSourcesReady: agent?.knowledgeSources.filter(s => s.status === 'READY').length || 0,
      calendarConnected: org.calendarConnections.length > 0,
      calendarProviders: org.calendarConnections.map(c => c.provider),
    })
  } catch (error) {
    console.error('Onboarding status error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch onboarding status' },
      { status: 500 }
    )
  }
}
