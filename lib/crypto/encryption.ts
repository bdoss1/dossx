import crypto from 'crypto'

const ALGORITHM = 'aes-256-gcm'
const IV_LENGTH = 16
const TAG_LENGTH = 16
const ENCODING = 'base64' as const

function getEncryptionKey(): Buffer {
  const secret = process.env.TOKEN_ENCRYPTION_SECRET
  if (!secret) {
    throw new Error('TOKEN_ENCRYPTION_SECRET environment variable is not set')
  }
  // Use SHA-256 to derive a 32-byte key from the secret
  return crypto.createHash('sha256').update(secret).digest()
}

/**
 * Encrypts plaintext using AES-256-GCM
 * @param plaintext - The text to encrypt
 * @returns Base64 encoded string containing IV + encrypted data + auth tag
 */
export function encrypt(plaintext: string): string {
  const key = getEncryptionKey()
  const iv = crypto.randomBytes(IV_LENGTH)

  const cipher = crypto.createCipheriv(ALGORITHM, key, iv)

  let encrypted = cipher.update(plaintext, 'utf8')
  encrypted = Buffer.concat([encrypted, cipher.final()])

  const authTag = cipher.getAuthTag()

  // Combine IV + encrypted data + auth tag
  const combined = Buffer.concat([iv, encrypted, authTag])

  return combined.toString(ENCODING)
}

/**
 * Decrypts base64 encoded ciphertext that was encrypted with encrypt()
 * @param ciphertext - Base64 encoded encrypted data
 * @returns Decrypted plaintext
 */
export function decrypt(ciphertext: string): string {
  const key = getEncryptionKey()
  const combined = Buffer.from(ciphertext, ENCODING)

  if (combined.length < IV_LENGTH + TAG_LENGTH) {
    throw new Error('Invalid ciphertext: too short')
  }

  // Extract IV, encrypted data, and auth tag
  const iv = combined.subarray(0, IV_LENGTH)
  const authTag = combined.subarray(combined.length - TAG_LENGTH)
  const encrypted = combined.subarray(IV_LENGTH, combined.length - TAG_LENGTH)

  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv)
  decipher.setAuthTag(authTag)

  let decrypted = decipher.update(encrypted)
  decrypted = Buffer.concat([decrypted, decipher.final()])

  return decrypted.toString('utf8')
}

/**
 * Verify that encryption/decryption works correctly
 * @returns true if roundtrip succeeds
 */
export function verifyEncryption(): boolean {
  try {
    const testValue = 'test-encryption-value-' + Date.now()
    const encrypted = encrypt(testValue)
    const decrypted = decrypt(encrypted)
    return decrypted === testValue
  } catch {
    return false
  }
}
