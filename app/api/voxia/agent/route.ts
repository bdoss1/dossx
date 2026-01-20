import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { db } from '@/lib/db'
import { agentUpdateSchema } from '@/lib/voxia/types'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// GET - Fetch agent details
export async function GET() {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    // Find user's agent
    const orgMember = await db.orgMember.findFirst({
      where: { userId },
      include: {
        organization: {
          include: {
            voxiaAgents: {
              take: 1,
              include: {
                knowledgeSources: {
                  select: {
                    id: true,
                    type: true,
                    title: true,
                    status: true,
                  },
                },
              },
            },
          },
        },
      },
    })

    if (!orgMember?.organization.voxiaAgents[0]) {
      return NextResponse.json(
        { error: 'No agent found' },
        { status: 404 }
      )
    }

    const agent = orgMember.organization.voxiaAgents[0]

    return NextResponse.json({
      agent: {
        id: agent.id,
        name: agent.name,
        status: agent.status,
        greetingScript: agent.greetingScript,
        tonePreset: agent.tonePreset,
        toneNotes: agent.toneNotes,
        businessHours: agent.businessHoursJson,
        routingRules: agent.routingRulesJson,
        afterHoursBehavior: agent.afterHoursBehaviorJson,
        escalationContacts: agent.escalationContactsJson,
        goals: agent.goalsJson,
        offersAppointments: agent.offersAppointments,
        appointmentTypes: agent.appointmentTypesJson,
        bookingRules: agent.bookingRulesJson,
        knowledgeSources: agent.knowledgeSources,
        createdAt: agent.createdAt,
        updatedAt: agent.updatedAt,
      },
    })
  } catch (error) {
    console.error('Agent fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch agent' },
      { status: 500 }
    )
  }
}

// PATCH - Update agent settings
export async function PATCH(req: NextRequest) {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    const body = await req.json()
    const parseResult = agentUpdateSchema.safeParse(body)

    if (!parseResult.success) {
      return NextResponse.json(
        { error: 'Invalid data', details: parseResult.error.flatten() },
        { status: 400 }
      )
    }

    const data = parseResult.data

    // Find user's agent and verify subscription
    const orgMember = await db.orgMember.findFirst({
      where: { userId },
      include: {
        organization: {
          include: {
            subscriptions: {
              where: { status: { in: ['ACTIVE', 'TRIALING'] } },
              take: 1,
            },
            voxiaAgents: { take: 1 },
          },
        },
      },
    })

    if (!orgMember?.organization.subscriptions[0]) {
      return NextResponse.json(
        { error: 'Active subscription required' },
        { status: 403 }
      )
    }

    if (!orgMember.organization.voxiaAgents[0]) {
      return NextResponse.json(
        { error: 'No agent found' },
        { status: 404 }
      )
    }

    const agent = orgMember.organization.voxiaAgents[0]

    // Build update object
    const updateData: Record<string, unknown> = {}

    if (data.name !== undefined) updateData.name = data.name
    if (data.greetingScript !== undefined) updateData.greetingScript = data.greetingScript
    if (data.tonePreset !== undefined) updateData.tonePreset = data.tonePreset
    if (data.toneNotes !== undefined) updateData.toneNotes = data.toneNotes
    if (data.businessHours !== undefined) updateData.businessHoursJson = data.businessHours
    if (data.routingRules !== undefined) updateData.routingRulesJson = data.routingRules
    if (data.afterHoursBehavior !== undefined) updateData.afterHoursBehaviorJson = data.afterHoursBehavior
    if (data.escalationContacts !== undefined) updateData.escalationContactsJson = data.escalationContacts
    if (data.offersAppointments !== undefined) updateData.offersAppointments = data.offersAppointments
    if (data.appointmentTypes !== undefined) updateData.appointmentTypesJson = data.appointmentTypes
    if (data.bookingRules !== undefined) updateData.bookingRulesJson = data.bookingRules
    if (data.status !== undefined) updateData.status = data.status

    const updatedAgent = await db.voxiaAgent.update({
      where: { id: agent.id },
      data: updateData,
    })

    return NextResponse.json({
      success: true,
      agent: {
        id: updatedAgent.id,
        name: updatedAgent.name,
        status: updatedAgent.status,
        updatedAt: updatedAgent.updatedAt,
      },
    })
  } catch (error) {
    console.error('Agent update error:', error)
    return NextResponse.json(
      { error: 'Failed to update agent' },
      { status: 500 }
    )
  }
}
