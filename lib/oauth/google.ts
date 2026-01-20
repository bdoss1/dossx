import { encrypt, decrypt } from '@/lib/crypto/encryption'

const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth'
const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token'
const GOOGLE_CALENDAR_API = 'https://www.googleapis.com/calendar/v3'

// Scopes needed for calendar access
const SCOPES = [
  'https://www.googleapis.com/auth/calendar.readonly',
  'https://www.googleapis.com/auth/calendar.events.readonly',
  'openid',
  'email',
].join(' ')

interface GoogleTokenResponse {
  access_token: string
  refresh_token?: string
  expires_in: number
  token_type: string
  scope: string
  id_token?: string
}

interface GoogleUserInfo {
  email: string
  name?: string
}

export function getGoogleAuthUrl(state: string): string {
  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID
  const redirectUri = process.env.GOOGLE_OAUTH_REDIRECT_URL

  if (!clientId || !redirectUri) {
    throw new Error('Google OAuth not configured')
  }

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: SCOPES,
    access_type: 'offline',
    prompt: 'consent',
    state,
  })

  return `${GOOGLE_AUTH_URL}?${params.toString()}`
}

export async function exchangeGoogleCode(code: string): Promise<{
  accessToken: string
  refreshToken: string
  expiresAt: Date
  email: string
}> {
  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID
  const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET
  const redirectUri = process.env.GOOGLE_OAUTH_REDIRECT_URL

  if (!clientId || !clientSecret || !redirectUri) {
    throw new Error('Google OAuth not configured')
  }

  const response = await fetch(GOOGLE_TOKEN_URL, {
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
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Google token exchange failed: ${error}`)
  }

  const data: GoogleTokenResponse = await response.json()

  if (!data.refresh_token) {
    throw new Error('No refresh token received from Google')
  }

  // Get user email
  const userInfo = await getGoogleUserInfo(data.access_token)

  const expiresAt = new Date(Date.now() + data.expires_in * 1000)

  return {
    accessToken: encrypt(data.access_token),
    refreshToken: encrypt(data.refresh_token),
    expiresAt,
    email: userInfo.email,
  }
}

async function getGoogleUserInfo(accessToken: string): Promise<GoogleUserInfo> {
  const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch Google user info')
  }

  return response.json()
}

export async function refreshGoogleToken(encryptedRefreshToken: string): Promise<{
  accessToken: string
  expiresAt: Date
}> {
  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID
  const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    throw new Error('Google OAuth not configured')
  }

  const refreshToken = decrypt(encryptedRefreshToken)

  const response = await fetch(GOOGLE_TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to refresh Google token')
  }

  const data: GoogleTokenResponse = await response.json()
  const expiresAt = new Date(Date.now() + data.expires_in * 1000)

  return {
    accessToken: encrypt(data.access_token),
    expiresAt,
  }
}

export interface GoogleCalendar {
  id: string
  summary: string
  primary?: boolean
  accessRole: string
}

export async function listGoogleCalendars(encryptedAccessToken: string): Promise<GoogleCalendar[]> {
  const accessToken = decrypt(encryptedAccessToken)

  const response = await fetch(`${GOOGLE_CALENDAR_API}/users/me/calendarList`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch Google calendars')
  }

  const data = await response.json()
  return data.items || []
}

export function isGoogleOAuthConfigured(): boolean {
  return !!(
    process.env.GOOGLE_OAUTH_CLIENT_ID &&
    process.env.GOOGLE_OAUTH_CLIENT_SECRET &&
    process.env.GOOGLE_OAUTH_REDIRECT_URL
  )
}
