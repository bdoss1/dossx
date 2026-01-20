import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { v4 as uuid } from 'uuid'

// Initialize S3 client only if credentials are available
function getS3Client(): S3Client | null {
  if (
    !process.env.S3_ACCESS_KEY_ID ||
    !process.env.S3_SECRET_ACCESS_KEY ||
    !process.env.S3_BUCKET ||
    !process.env.S3_REGION
  ) {
    return null
  }

  return new S3Client({
    region: process.env.S3_REGION,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
  })
}

const BUCKET = process.env.S3_BUCKET || ''

export type UploadResult = {
  success: true
  key: string
  url: string
} | {
  success: false
  error: string
}

/**
 * Upload a file to S3
 */
export async function uploadFile(
  file: Buffer,
  fileName: string,
  contentType: string,
  agentId: string
): Promise<UploadResult> {
  const client = getS3Client()

  if (!client || !BUCKET) {
    // TODO: Implement local file storage fallback
    console.warn('S3 not configured - file upload skipped')
    return {
      success: false,
      error: 'S3 is not configured. Please set S3_* environment variables.',
    }
  }

  try {
    const fileExtension = fileName.split('.').pop() || 'bin'
    const key = `voxia/${agentId}/${uuid()}.${fileExtension}`

    await client.send(
      new PutObjectCommand({
        Bucket: BUCKET,
        Key: key,
        Body: file,
        ContentType: contentType,
        Metadata: {
          originalName: fileName,
          agentId,
        },
      })
    )

    return {
      success: true,
      key,
      url: `https://${BUCKET}.s3.${process.env.S3_REGION}.amazonaws.com/${key}`,
    }
  } catch (error) {
    console.error('S3 upload error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown upload error',
    }
  }
}

/**
 * Generate a presigned URL for downloading a file
 */
export async function getPresignedDownloadUrl(key: string): Promise<string | null> {
  const client = getS3Client()

  if (!client || !BUCKET) {
    return null
  }

  try {
    const command = new GetObjectCommand({
      Bucket: BUCKET,
      Key: key,
    })

    return await getSignedUrl(client, command, { expiresIn: 3600 }) // 1 hour
  } catch (error) {
    console.error('Error generating presigned URL:', error)
    return null
  }
}

/**
 * Delete a file from S3
 */
export async function deleteFile(key: string): Promise<boolean> {
  const client = getS3Client()

  if (!client || !BUCKET) {
    return false
  }

  try {
    await client.send(
      new DeleteObjectCommand({
        Bucket: BUCKET,
        Key: key,
      })
    )
    return true
  } catch (error) {
    console.error('S3 delete error:', error)
    return false
  }
}

/**
 * Check if S3 is configured
 */
export function isS3Configured(): boolean {
  return !!(
    process.env.S3_ACCESS_KEY_ID &&
    process.env.S3_SECRET_ACCESS_KEY &&
    process.env.S3_BUCKET &&
    process.env.S3_REGION
  )
}
