import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { db } from '@/lib/db'
import { knowledgeSourceCreateSchema } from '@/lib/voxia/types'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Type for knowledge source
interface KnowledgeSourceRecord {
  id: string
  type: string
  title: string
  location: string
  content?: string | null
  status: string
  lastIngestedAt?: Date | null
  errorMessage?: string | null
  createdAt: Date
}

// GET - List knowledge sources for the user's agent
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
                  orderBy: { createdAt: 'desc' },
                },
              },
            },
          },
        },
      },
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const org = orgMember?.organization as any

    if (!org?.voxiaAgents?.[0]) {
      return NextResponse.json({ sources: [] })
    }

    const sources = org.voxiaAgents[0].knowledgeSources as KnowledgeSourceRecord[]

    return NextResponse.json({
      sources: sources.map((s: KnowledgeSourceRecord) => ({
        id: s.id,
        type: s.type,
        title: s.title,
        location: s.location,
        status: s.status,
        lastIngestedAt: s.lastIngestedAt,
        errorMessage: s.errorMessage,
        createdAt: s.createdAt,
      })),
    })
  } catch (error) {
    console.error('Knowledge sources fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch knowledge sources' },
      { status: 500 }
    )
  }
}

// POST - Add a new knowledge source
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
    const parseResult = knowledgeSourceCreateSchema.safeParse(body)

    if (!parseResult.success) {
      return NextResponse.json(
        { error: 'Invalid data', details: parseResult.error.flatten() },
        { status: 400 }
      )
    }

    const data = parseResult.data

    // Find user's agent
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const org = orgMember?.organization as any

    if (!org?.subscriptions?.[0]) {
      return NextResponse.json(
        { error: 'Active subscription required' },
        { status: 403 }
      )
    }

    if (!org?.voxiaAgents?.[0]) {
      return NextResponse.json(
        { error: 'No agent found. Please complete setup first.' },
        { status: 404 }
      )
    }

    const agent = org.voxiaAgents[0]

    // Create the knowledge source
    const source = await db.knowledgeSource.create({
      data: {
        agentId: agent.id,
        type: data.type,
        title: data.title,
        location: data.location,
        content: data.content,
        status: data.type === 'QA' ? 'READY' : 'PENDING',
      },
    })

    // Simulate processing for non-QA sources
    if (data.type !== 'QA') {
      setTimeout(async () => {
        try {
          await db.knowledgeSource.update({
            where: { id: source.id },
            data: { status: 'PROCESSING' },
          })

          setTimeout(async () => {
            await db.knowledgeSource.update({
              where: { id: source.id },
              data: {
                status: 'READY',
                lastIngestedAt: new Date(),
              },
            })
          }, 3000)
        } catch (e) {
          console.error('Error processing knowledge source:', e)
        }
      }, 1000)
    }

    return NextResponse.json({
      success: true,
      source: {
        id: source.id,
        type: source.type,
        title: source.title,
        status: source.status,
      },
    })
  } catch (error) {
    console.error('Knowledge source creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create knowledge source' },
      { status: 500 }
    )
  }
}

// DELETE - Remove a knowledge source
export async function DELETE(req: NextRequest) {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(req.url)
    const sourceId = searchParams.get('id')

    if (!sourceId) {
      return NextResponse.json(
        { error: 'Source ID required' },
        { status: 400 }
      )
    }

    // Verify ownership
    const orgMember = await db.orgMember.findFirst({
      where: { userId },
      include: {
        organization: {
          include: {
            voxiaAgents: {
              include: {
                knowledgeSources: {
                  where: { id: sourceId },
                },
              },
            },
          },
        },
      },
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const org = orgMember?.organization as any
    const source = org?.voxiaAgents?.[0]?.knowledgeSources?.[0]

    if (!source) {
      return NextResponse.json(
        { error: 'Knowledge source not found' },
        { status: 404 }
      )
    }

    await db.knowledgeSource.delete({
      where: { id: sourceId },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Knowledge source deletion error:', error)
    return NextResponse.json(
      { error: 'Failed to delete knowledge source' },
      { status: 500 }
    )
  }
}
