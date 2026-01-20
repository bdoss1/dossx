'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import { VoxiaCard } from '@/components/voxia/VoxiaCard'
import { VoxiaButton } from '@/components/voxia/VoxiaButton'
import { VoxiaInput } from '@/components/voxia/VoxiaInput'

interface CalendarConnection {
  id: string
  provider: 'GOOGLE' | 'MICROSOFT'
  email: string | null
  selectedCalendarIds: string[]
  availableCalendars: { id: string; name: string; primary?: boolean }[]
  createdAt: string
}

interface CalendarRules {
  leadTime: number
  maxPerDay: number
  bufferBefore: number
  bufferAfter: number
}

export default function CalendarPage() {
  const searchParams = useSearchParams()
  const [connections, setConnections] = useState<CalendarConnection[]>([])
  const [rules, setRules] = useState<CalendarRules>({
    leadTime: 24,
    maxPerDay: 8,
    bufferBefore: 15,
    bufferAfter: 15,
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  // Check for OAuth callback messages
  useEffect(() => {
    const success = searchParams.get('success')
    const error = searchParams.get('error')

    if (success) {
      setMessage({
        type: 'success',
        text: success === 'google_connected'
          ? 'Google Calendar connected successfully!'
          : 'Microsoft Calendar connected successfully!',
      })
    } else if (error) {
      const errorMessages: Record<string, string> = {
        google_denied: 'Google Calendar connection was denied.',
        microsoft_denied: 'Microsoft Calendar connection was denied.',
        google_failed: 'Failed to connect Google Calendar. Please try again.',
        microsoft_failed: 'Failed to connect Microsoft Calendar. Please try again.',
        missing_params: 'Invalid callback. Please try again.',
        invalid_state: 'Session expired. Please try again.',
        expired_state: 'Session expired. Please try again.',
      }
      setMessage({
        type: 'error',
        text: errorMessages[error] || 'An error occurred. Please try again.',
      })
    }
  }, [searchParams])

  const fetchCalendarData = useCallback(async () => {
    try {
      const response = await fetch('/api/voxia/calendar')
      const data = await response.json()
      setConnections(data.connections || [])
      if (data.rules) {
        setRules(data.rules)
      }
    } catch (error) {
      console.error('Failed to fetch calendar data:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchCalendarData()
  }, [fetchCalendarData])

  const handleConnectGoogle = () => {
    window.location.href = '/api/oauth/google/start'
  }

  const handleConnectMicrosoft = () => {
    window.location.href = '/api/oauth/microsoft/start'
  }

  const handleDisconnect = async (connectionId: string, provider: string) => {
    if (!confirm(`Are you sure you want to disconnect your ${provider} calendar?`)) return

    try {
      const response = await fetch(`/api/voxia/calendar?id=${connectionId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        fetchCalendarData()
        setMessage({ type: 'success', text: 'Calendar disconnected successfully.' })
      }
    } catch (error) {
      console.error('Failed to disconnect:', error)
      setMessage({ type: 'error', text: 'Failed to disconnect calendar.' })
    }
  }

  const handleCalendarSelection = async (connectionId: string, calendarIds: string[]) => {
    try {
      await fetch('/api/voxia/calendar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          connectionId,
          selectedCalendarIds: calendarIds,
        }),
      })
      fetchCalendarData()
    } catch (error) {
      console.error('Failed to update calendar selection:', error)
    }
  }

  const handleSaveRules = async () => {
    setSaving(true)
    try {
      const response = await fetch('/api/voxia/calendar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rules }),
      })

      if (response.ok) {
        setMessage({ type: 'success', text: 'Scheduling rules saved successfully.' })
      }
    } catch (error) {
      console.error('Failed to save rules:', error)
      setMessage({ type: 'error', text: 'Failed to save scheduling rules.' })
    } finally {
      setSaving(false)
    }
  }

  const googleConnection = connections.find(c => c.provider === 'GOOGLE')
  const microsoftConnection = connections.find(c => c.provider === 'MICROSOFT')

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-secondary dark:text-white">Calendar Connections</h1>
        <p className="text-colorText dark:text-dark-100">
          Connect your calendars to enable intelligent scheduling.
        </p>
      </div>

      {/* Message */}
      {message && (
        <div className={`p-4 rounded-lg ${
          message.type === 'success'
            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
            : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
        }`}>
          {message.text}
          <button
            onClick={() => setMessage(null)}
            className="float-right font-bold"
          >
            ×
          </button>
        </div>
      )}

      {loading ? (
        <div className="text-center py-12">
          <svg className="w-8 h-8 mx-auto text-primary animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        </div>
      ) : (
        <>
          {/* Calendar Connections */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Google Calendar */}
            <VoxiaCard variant="bordered">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-secondary dark:text-white">Google Calendar</h3>
                  <p className="text-sm text-colorText dark:text-dark-100">
                    {googleConnection ? googleConnection.email : 'Not connected'}
                  </p>
                </div>
              </div>

              {googleConnection ? (
                <>
                  {googleConnection.availableCalendars.length > 0 && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-secondary dark:text-white mb-2">
                        Select calendars to check for availability
                      </label>
                      <div className="space-y-2 max-h-48 overflow-y-auto">
                        {googleConnection.availableCalendars.map((cal) => (
                          <label key={cal.id} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={googleConnection.selectedCalendarIds.includes(cal.id)}
                              onChange={(e) => {
                                const newIds = e.target.checked
                                  ? [...googleConnection.selectedCalendarIds, cal.id]
                                  : googleConnection.selectedCalendarIds.filter(id => id !== cal.id)
                                handleCalendarSelection(googleConnection.id, newIds)
                              }}
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/50"
                            />
                            <span className="text-sm text-secondary dark:text-white">
                              {cal.name}
                              {cal.primary && (
                                <span className="ml-1 text-xs text-colorText dark:text-dark-100">(Primary)</span>
                              )}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                  <VoxiaButton
                    variant="outline"
                    size="sm"
                    onClick={() => handleDisconnect(googleConnection.id, 'Google')}
                  >
                    Disconnect
                  </VoxiaButton>
                </>
              ) : (
                <VoxiaButton onClick={handleConnectGoogle}>
                  Connect Google Calendar
                </VoxiaButton>
              )}
            </VoxiaCard>

            {/* Microsoft Calendar */}
            <VoxiaCard variant="bordered">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="#F25022" d="M1 1h10v10H1z"/>
                    <path fill="#00A4EF" d="M1 13h10v10H1z"/>
                    <path fill="#7FBA00" d="M13 1h10v10H13z"/>
                    <path fill="#FFB900" d="M13 13h10v10H13z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-secondary dark:text-white">Microsoft 365</h3>
                  <p className="text-sm text-colorText dark:text-dark-100">
                    {microsoftConnection ? microsoftConnection.email : 'Not connected'}
                  </p>
                </div>
              </div>

              {microsoftConnection ? (
                <>
                  {microsoftConnection.availableCalendars.length > 0 && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-secondary dark:text-white mb-2">
                        Select calendars to check for availability
                      </label>
                      <div className="space-y-2 max-h-48 overflow-y-auto">
                        {microsoftConnection.availableCalendars.map((cal) => (
                          <label key={cal.id} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={microsoftConnection.selectedCalendarIds.includes(cal.id)}
                              onChange={(e) => {
                                const newIds = e.target.checked
                                  ? [...microsoftConnection.selectedCalendarIds, cal.id]
                                  : microsoftConnection.selectedCalendarIds.filter(id => id !== cal.id)
                                handleCalendarSelection(microsoftConnection.id, newIds)
                              }}
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/50"
                            />
                            <span className="text-sm text-secondary dark:text-white">
                              {cal.name}
                              {cal.primary && (
                                <span className="ml-1 text-xs text-colorText dark:text-dark-100">(Default)</span>
                              )}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                  <VoxiaButton
                    variant="outline"
                    size="sm"
                    onClick={() => handleDisconnect(microsoftConnection.id, 'Microsoft')}
                  >
                    Disconnect
                  </VoxiaButton>
                </>
              ) : (
                <VoxiaButton onClick={handleConnectMicrosoft}>
                  Connect Microsoft 365
                </VoxiaButton>
              )}
            </VoxiaCard>
          </div>

          {/* Scheduling Rules */}
          <VoxiaCard variant="bordered">
            <h2 className="font-medium text-secondary dark:text-white mb-4">Scheduling Rules</h2>
            <p className="text-colorText dark:text-dark-100 mb-6">
              Configure how your AI voice agent books appointments.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <VoxiaInput
                label="Minimum Lead Time (hours)"
                type="number"
                min={0}
                value={rules.leadTime}
                onChange={(e) => setRules(r => ({ ...r, leadTime: parseInt(e.target.value) || 0 }))}
                helperText="How far in advance appointments must be booked"
              />
              <VoxiaInput
                label="Maximum Appointments Per Day"
                type="number"
                min={1}
                value={rules.maxPerDay}
                onChange={(e) => setRules(r => ({ ...r, maxPerDay: parseInt(e.target.value) || 1 }))}
                helperText="Limit daily appointment volume"
              />
              <VoxiaInput
                label="Buffer Before (minutes)"
                type="number"
                min={0}
                value={rules.bufferBefore}
                onChange={(e) => setRules(r => ({ ...r, bufferBefore: parseInt(e.target.value) || 0 }))}
                helperText="Prep time before each appointment"
              />
              <VoxiaInput
                label="Buffer After (minutes)"
                type="number"
                min={0}
                value={rules.bufferAfter}
                onChange={(e) => setRules(r => ({ ...r, bufferAfter: parseInt(e.target.value) || 0 }))}
                helperText="Wind-down time after each appointment"
              />
            </div>

            <div className="mt-6">
              <VoxiaButton onClick={handleSaveRules} disabled={saving}>
                {saving ? 'Saving...' : 'Save Rules'}
              </VoxiaButton>
            </div>
          </VoxiaCard>
        </>
      )}
    </div>
  )
}
