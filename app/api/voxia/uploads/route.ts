import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { getDb } from '@/lib/db'
import { uploadFile, isS3Configured } from '@/lib/s3/upload'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain',
  'text/csv',
]

const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    // Check S3 configuration
    if (!isS3Configured()) {
      return NextResponse.json(
        {
          error: 'File uploads are not configured',
          message: 'S3 storage is not configured. Please contact support.',
        },
        { status: 503 }
      )
    }

    const db = await getDb()

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

    if (!orgMember?.organization.subscriptions[0]) {
      return NextResponse.json(
        { error: 'Active subscription required' },
        { status: 403 }
      )
    }

    if (!orgMember.organization.voxiaAgents[0]) {
      return NextResponse.json(
        { error: 'No agent found. Please complete setup first.' },
        { status: 404 }
      )
    }

    const agent = orgMember.organization.voxiaAgents[0]

    // Parse form data
    const formData = await req.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        {
          error: 'Invalid file type',
          message: 'Allowed types: PDF, DOC, DOCX, TXT, CSV',
        },
        { status: 400 }
      )
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        {
          error: 'File too large',
          message: 'Maximum file size is 10MB',
        },
        { status: 400 }
      )
    }

    // Read file content
    const buffer = Buffer.from(await file.arrayBuffer())

    // Upload to S3
    const uploadResult = await uploadFile(buffer, file.name, file.type, agent.id)

    if (!uploadResult.success) {
      return NextResponse.json(
        { error: 'Upload failed', message: uploadResult.error },
        { status: 500 }
      )
    }

    // Create knowledge source record
    const source = await db.knowledgeSource.create({
      data: {
        agentId: agent.id,
        type: 'FILE',
        title: file.name,
        location: uploadResult.key,
        status: 'PENDING',
      },
    })

    // Simulate processing
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
        }, 5000)
      } catch (e) {
        console.error('Error processing file upload:', e)
      }
    }, 1000)

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
    console.error('File upload error:', error)
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    )
  }
}
