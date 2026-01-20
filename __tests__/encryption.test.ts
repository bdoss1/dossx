import { describe, it, expect, beforeAll, vi } from 'vitest'

// Mock environment variable before importing the module
beforeAll(() => {
  // Set a test encryption secret (32 bytes = 64 hex characters)
  process.env.TOKEN_ENCRYPTION_SECRET = 'a'.repeat(64)
})

describe('Encryption utilities', () => {
  it('should encrypt and decrypt a simple string', async () => {
    // Dynamically import after setting env var
    const { encrypt, decrypt } = await import('@/lib/crypto/encryption')

    const originalText = 'Hello, World!'
    const encrypted = encrypt(originalText)
    const decrypted = decrypt(encrypted)

    expect(decrypted).toBe(originalText)
  })

  it('should produce different ciphertext for the same input (due to random IV)', async () => {
    const { encrypt } = await import('@/lib/crypto/encryption')

    const text = 'Same text'
    const encrypted1 = encrypt(text)
    const encrypted2 = encrypt(text)

    // The encrypted values should be different due to random IV
    expect(encrypted1).not.toBe(encrypted2)
  })

  it('should encrypt and decrypt OAuth tokens', async () => {
    const { encrypt, decrypt } = await import('@/lib/crypto/encryption')

    const accessToken = 'ya29.a0AfH6SMB1234567890_very_long_access_token_string'
    const refreshToken = '1//0abcdefghijklmnopqrstuvwxyz_refresh_token'

    const encryptedAccess = encrypt(accessToken)
    const encryptedRefresh = encrypt(refreshToken)

    expect(decrypt(encryptedAccess)).toBe(accessToken)
    expect(decrypt(encryptedRefresh)).toBe(refreshToken)
  })

  it('should handle empty strings', async () => {
    const { encrypt, decrypt } = await import('@/lib/crypto/encryption')

    const encrypted = encrypt('')
    const decrypted = decrypt(encrypted)

    expect(decrypted).toBe('')
  })

  it('should handle special characters and unicode', async () => {
    const { encrypt, decrypt } = await import('@/lib/crypto/encryption')

    const unicodeText = '🔐 Émojis & spëcial châräctèrs! 日本語 中文'
    const encrypted = encrypt(unicodeText)
    const decrypted = decrypt(encrypted)

    expect(decrypted).toBe(unicodeText)
  })

  it('should handle long strings (simulating large tokens)', async () => {
    const { encrypt, decrypt } = await import('@/lib/crypto/encryption')

    const longText = 'x'.repeat(10000)
    const encrypted = encrypt(longText)
    const decrypted = decrypt(encrypted)

    expect(decrypted).toBe(longText)
  })

  it('should throw error when decrypting invalid data', async () => {
    const { decrypt } = await import('@/lib/crypto/encryption')

    expect(() => decrypt('not-valid-base64!!!')).toThrow()
  })

  it('should throw error when decrypting tampered data', async () => {
    const { encrypt, decrypt } = await import('@/lib/crypto/encryption')

    const encrypted = encrypt('secret data')
    // Tamper with the encrypted data
    const tampered = 'A' + encrypted.slice(1)

    expect(() => decrypt(tampered)).toThrow()
  })
})
