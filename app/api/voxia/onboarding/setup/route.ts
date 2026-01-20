import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { getDb } from '@/lib/db'
import { setupFormSchema, SetupFormData } from '@/lib/voxia/types'
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

    // Validate the form data
    const parseResult = setupFormSchema.safeParse(body)

    if (!parseResult.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: parseResult.error.flatten() },
        { status: 400 }
      )
    }

    const data: SetupFormData = parseResult.data

    // Ensure organization exists
    const orgId = await ensureOrganization(userId)

    const db = await getDb()

    // Verify user has an active subscription
    const subscription = await db.subscription.findFirst({
      where: {
        orgId,
        status: { in: ['ACTIVE', 'TRIALING'] },
      },
    })

    if (!subscription) {
      return NextResponse.json(
        { error: 'Active subscription required' },
        { status: 403 }
      )
    }

    // Update organization with company info
    await db.organization.update({
      where: { id: orgId },
      data: {
        name: data.businessName,
        timezone: data.timezone,
      },
    })

    // Create or update the Voxia agent
    const existingAgent = await db.voxiaAgent.findFirst({
      where: { orgId },
    })

    const agentData = {
      name: data.agentName,
      greetingScript: data.greetingScript,
      tonePreset: data.tonePreset,
      toneNotes: data.toneNotes || null,
      businessHoursJson: data.businessHours,
      routingRulesJson: data.routingRules || [],
      afterHoursBehaviorJson: data.afterHoursBehavior,
      escalationContactsJson: data.escalationContacts,
      goalsJson: data.goals,
      offersAppointments: data.offersAppointments,
      appointmentTypesJson: data.appointmentTypes || [],
      bookingRulesJson: data.bookingRules || null,
      status: 'CONFIGURING' as const,
    }

    let agent
    if (existingAgent) {
      agent = await db.voxiaAgent.update({
        where: { id: existingAgent.id },
        data: agentData,
      })
    } else {
      agent = await db.voxiaAgent.create({
        data: {
          orgId,
          ...agentData,
        },
      })
    }

    // Create knowledge sources from URLs
    if (data.knowledgeUrls && data.knowledgeUrls.length > 0) {
      const urlSources = data.knowledgeUrls.map(url => ({
        agentId: agent.id,
        type: 'URL' as const,
        title: new URL(url).hostname,
        location: url,
        status: 'PENDING' as const,
      }))

      await db.knowledgeSource.createMany({
        data: urlSources,
      })
    }

    // Create knowledge source from pasted text
    if (data.knowledgeText && data.knowledgeText.trim()) {
      await db.knowledgeSource.create({
        data: {
          agentId: agent.id,
          type: 'MANUAL',
          title: 'Pasted Content',
          location: 'manual-paste',
          content: data.knowledgeText,
          status: 'PENDING',
        },
      })
    }

    // Create knowledge sources from Q&A
    if (data.knowledgeQA && data.knowledgeQA.length > 0) {
      const qaSources = data.knowledgeQA.map(qa => ({
        agentId: agent.id,
        type: 'QA' as const,
        title: qa.question.substring(0, 100),
        location: 'qa-entry',
        content: JSON.stringify(qa),
        status: 'READY' as const, // Q&A is immediately ready
      }))

      await db.knowledgeSource.createMany({
        data: qaSources,
      })
    }

    // Update onboarding state
    await db.onboardingState.upsert({
      where: { orgId },
      update: {
        stage: 'SETUP_SUBMITTED',
      },
      create: {
        orgId,
        stage: 'SETUP_SUBMITTED',
        selectedPlan: subscription.plan,
      },
    })

    // Simulate processing knowledge sources (in production, this would be a background job)
    // Mark pending sources as processing after a short delay
    setTimeout(async () => {
      try {
        await db.knowledgeSource.updateMany({
          where: {
            agentId: agent.id,
            status: 'PENDING',
          },
          data: {
            status: 'PROCESSING',
          },
        })

        // After another delay, mark them as ready (simulating ingestion)
        setTimeout(async () => {
          try {
            await db.knowledgeSource.updateMany({
              where: {
                agentId: agent.id,
                status: 'PROCESSING',
              },
              data: {
                status: 'READY',
                lastIngestedAt: new Date(),
              },
            })

            // Update agent status to active
            await db.voxiaAgent.update({
              where: { id: agent.id },
              data: { status: 'ACTIVE' },
            })

            // Update onboarding to complete
            await db.onboardingState.update({
              where: { orgId },
              data: { stage: 'COMPLETE' },
            })
          } catch (e) {
            console.error('Error completing knowledge ingestion:', e)
          }
        }, 5000) // 5 seconds for demo
      } catch (e) {
        console.error('Error processing knowledge sources:', e)
      }
    }, 2000) // 2 seconds initial delay

    return NextResponse.json({
      success: true,
      agentId: agent.id,
      message: 'Setup submitted successfully. Your AI voice agent is being configured.',
    })
  } catch (error) {
    console.error('Setup submission error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to submit setup' },
      { status: 500 }
    )
  }
}
