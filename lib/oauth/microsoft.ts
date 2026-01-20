import { encrypt, decrypt } from '@/lib/crypto/encryption'

const MICROSOFT_AUTH_URL = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize'
const MICROSOFT_TOKEN_URL = 'https://login.microsoftonline.com/common/oauth2/v2.0/token'
const MICROSOFT_GRAPH_API = 'https://graph.microsoft.com/v1.0'

// Scopes needed for calendar access
const SCOPES = [
  'offline_access',
  'Calendars.Read',
  'Calendars.ReadBasic',
  'User.Read',
].join(' ')

interface MicrosoftTokenResponse {
  access_token: string
  refresh_token?: string
  expires_in: number
  token_type: string
  scope: string
}

interface MicrosoftUserInfo {
  mail?: string
  userPrincipalName: string
  displayName?: string
}

export function getMicrosoftAuthUrl(state: string): string {
  const clientId = process.env.MICROSOFT_OAUTH_CLIENT_ID
  const redirectUri = process.env.MICROSOFT_OAUTH_REDIRECT_URL

  if (!clientId || !redirectUri) {
    throw new Error('Microsoft OAuth not configured')
  }

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: SCOPES,
    response_mode: 'query',
    state,
  })

  return `${MICROSOFT_AUTH_URL}?${params.toString()}`
}

export async function exchangeMicrosoftCode(code: string): Promise<{
  accessToken: string
  refreshToken: string
  expiresAt: Date
  email: string
}> {
  const clientId = process.env.MICROSOFT_OAUTH_CLIENT_ID
  const clientSecret = process.env.MICROSOFT_OAUTH_CLIENT_SECRET
  const redirectUri = process.env.MICROSOFT_OAUTH_REDIRECT_URL

  if (!clientId || !clientSecret || !redirectUri) {
    throw new Error('Microsoft OAuth not configured')
  }

  const response = await fetch(MICROSOFT_TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      grant_type: 'authorization_code',
      redirect_uri: redirectUri,
      scope: SCOPES,
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Microsoft token exchange failed: ${error}`)
  }

  const data: MicrosoftTokenResponse = await response.json()

  if (!data.refresh_token) {
    throw new Error('No refresh token received from Microsoft')
  }

  // Get user email
  const userInfo = await getMicrosoftUserInfo(data.access_token)

  const expiresAt = new Date(Date.now() + data.expires_in * 1000)

  return {
    accessToken: encrypt(data.access_token),
    refreshToken: encrypt(data.refresh_token),
    expiresAt,
    email: userInfo.mail || userInfo.userPrincipalName,
  }
}

async function getMicrosoftUserInfo(accessToken: string): Promise<MicrosoftUserInfo> {
  const response = await fetch(`${MICROSOFT_GRAPH_API}/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch Microsoft user info')
  }

  return response.json()
}

export async function refreshMicrosoftToken(encryptedRefreshToken: string): Promise<{
  accessToken: string
  refreshToken: string
  expiresAt: Date
}> {
  const clientId = process.env.MICROSOFT_OAUTH_CLIENT_ID
  const clientSecret = process.env.MICROSOFT_OAUTH_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    throw new Error('Microsoft OAuth not configured')
  }

  const refreshToken = decrypt(encryptedRefreshToken)

  const response = await fetch(MICROSOFT_TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
      scope: SCOPES,
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to refresh Microsoft token')
  }

  const data: MicrosoftTokenResponse = await response.json()
  const expiresAt = new Date(Date.now() + data.expires_in * 1000)

  return {
    accessToken: encrypt(data.access_token),
    refreshToken: data.refresh_token ? encrypt(data.refresh_token) : encryptedRefreshToken,
    expiresAt,
  }
}

export interface MicrosoftCalendar {
  id: string
  name: string
  isDefaultCalendar?: boolean
  canEdit: boolean
  owner?: {
    name?: string
    address?: string
  }
}

export async function listMicrosoftCalendars(encryptedAccessToken: string): Promise<MicrosoftCalendar[]> {
  const accessToken = decrypt(encryptedAccessToken)

  const response = await fetch(`${MICROSOFT_GRAPH_API}/me/calendars`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch Microsoft calendars')
  }

  const data = await response.json()
  return data.value || []
}

export function isMicrosoftOAuthConfigured(): boolean {
  return !!(
    process.env.MICROSOFT_OAUTH_CLIENT_ID &&
    process.env.MICROSOFT_OAUTH_CLIENT_SECRET &&
    process.env.MICROSOFT_OAUTH_REDIRECT_URL
  )
}
