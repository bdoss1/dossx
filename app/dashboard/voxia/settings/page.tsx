'use client'

import { useState, useEffect, useCallback } from 'react'
import { VoxiaCard } from '@/components/voxia/VoxiaCard'
import { VoxiaButton } from '@/components/voxia/VoxiaButton'
import { VoxiaInput } from '@/components/voxia/VoxiaInput'
import { VoxiaSelect } from '@/components/voxia/VoxiaSelect'

interface AgentSettings {
  name: string
  greetingScript: string
  tonePreset: string
  toneNotes: string
  businessHours: {
    days: string[]
    start: string
    end: string
  }
  afterHoursBehavior: {
    action: string
    message: string
  }
  escalationContacts: {
    name: string
    phone: string
    email: string
    reason: string
  }[]
  routingRules: {
    intent: string
    action: string
    target: string
  }[]
}

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const TONE_PRESETS = [
  { value: 'professional', label: 'Professional' },
  { value: 'friendly', label: 'Friendly' },
  { value: 'luxury', label: 'Luxury/Premium' },
  { value: 'casual', label: 'Casual' },
  { value: 'custom', label: 'Custom' },
]

const AFTER_HOURS_ACTIONS = [
  { value: 'voicemail', label: 'Take Voicemail' },
  { value: 'email', label: 'Send Email Notification' },
  { value: 'message', label: 'Play Custom Message' },
  { value: 'redirect', label: 'Redirect to Number' },
]

const ROUTING_ACTIONS = [
  { value: 'transfer', label: 'Transfer to Contact' },
  { value: 'message', label: 'Play Message' },
  { value: 'voicemail', label: 'Take Voicemail' },
  { value: 'schedule', label: 'Offer Scheduling' },
]

export default function SettingsPage() {
  const [settings, setSettings] = useState<AgentSettings>({
    name: '',
    greetingScript: '',
    tonePreset: 'professional',
    toneNotes: '',
    businessHours: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      start: '09:00',
      end: '17:00',
    },
    afterHoursBehavior: {
      action: 'voicemail',
      message: '',
    },
    escalationContacts: [],
    routingRules: [],
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const fetchSettings = useCallback(async () => {
    try {
      const response = await fetch('/api/voxia/agent')
      if (response.ok) {
        const data = await response.json()
        if (data.agent) {
          setSettings({
            name: data.agent.name || '',
            greetingScript: data.agent.greetingScript || '',
            tonePreset: data.agent.tonePreset || 'professional',
            toneNotes: data.agent.toneNotes || '',
            businessHours: data.agent.businessHoursJson || settings.businessHours,
            afterHoursBehavior: data.agent.afterHoursBehaviorJson || settings.afterHoursBehavior,
            escalationContacts: data.agent.escalationContactsJson || [],
            routingRules: data.agent.routingRulesJson || [],
          })
        }
      }
    } catch (error) {
      console.error('Failed to fetch settings:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchSettings()
  }, [fetchSettings])

  const handleSave = async () => {
    setSaving(true)
    setMessage(null)

    try {
      const response = await fetch('/api/voxia/agent', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: settings.name,
          greetingScript: settings.greetingScript,
          tonePreset: settings.tonePreset,
          toneNotes: settings.toneNotes,
          businessHoursJson: settings.businessHours,
          afterHoursBehaviorJson: settings.afterHoursBehavior,
          escalationContactsJson: settings.escalationContacts,
          routingRulesJson: settings.routingRules,
        }),
      })

      if (response.ok) {
        setMessage({ type: 'success', text: 'Settings saved successfully.' })
      } else {
        const error = await response.json()
        setMessage({ type: 'error', text: error.error || 'Failed to save settings.' })
      }
    } catch (error) {
      console.error('Failed to save settings:', error)
      setMessage({ type: 'error', text: 'Failed to save settings.' })
    } finally {
      setSaving(false)
    }
  }

  const addEscalationContact = () => {
    setSettings(s => ({
      ...s,
      escalationContacts: [
        ...s.escalationContacts,
        { name: '', phone: '', email: '', reason: '' },
      ],
    }))
  }

  const removeEscalationContact = (index: number) => {
    setSettings(s => ({
      ...s,
      escalationContacts: s.escalationContacts.filter((_, i) => i !== index),
    }))
  }

  const updateEscalationContact = (index: number, field: string, value: string) => {
    setSettings(s => ({
      ...s,
      escalationContacts: s.escalationContacts.map((contact, i) =>
        i === index ? { ...contact, [field]: value } : contact
      ),
    }))
  }

  const addRoutingRule = () => {
    setSettings(s => ({
      ...s,
      routingRules: [
        ...s.routingRules,
        { intent: '', action: 'transfer', target: '' },
      ],
    }))
  }

  const removeRoutingRule = (index: number) => {
    setSettings(s => ({
      ...s,
      routingRules: s.routingRules.filter((_, i) => i !== index),
    }))
  }

  const updateRoutingRule = (index: number, field: string, value: string) => {
    setSettings(s => ({
      ...s,
      routingRules: s.routingRules.map((rule, i) =>
        i === index ? { ...rule, [field]: value } : rule
      ),
    }))
  }

  if (loading) {
    return (
      <div className="text-center py-12">
        <svg className="w-8 h-8 mx-auto text-primary animate-spin" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-secondary dark:text-white">Agent Settings</h1>
          <p className="text-colorText dark:text-dark-100">
            Configure how your AI voice agent behaves.
          </p>
        </div>
        <VoxiaButton onClick={handleSave} disabled={saving}>
          {saving ? 'Saving...' : 'Save Changes'}
        </VoxiaButton>
      </div>

      {/* Message */}
      {message && (
        <div className={`p-4 rounded-lg ${
          message.type === 'success'
            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
            : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
        }`}>
          {message.text}
        </div>
      )}

      {/* Basic Settings */}
      <VoxiaCard variant="bordered">
        <h2 className="font-medium text-secondary dark:text-white mb-4">Basic Information</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <VoxiaInput
            label="Agent Name"
            value={settings.name}
            onChange={(e) => setSettings(s => ({ ...s, name: e.target.value }))}
            placeholder="Voxia"
          />
          <VoxiaSelect
            label="Voice Tone"
            value={settings.tonePreset}
            onChange={(e) => setSettings(s => ({ ...s, tonePreset: e.target.value }))}
            options={TONE_PRESETS}
          />
        </div>
        {settings.tonePreset === 'custom' && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-secondary dark:text-white mb-1.5">
              Custom Tone Notes
            </label>
            <textarea
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-200 text-secondary dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              rows={3}
              value={settings.toneNotes}
              onChange={(e) => setSettings(s => ({ ...s, toneNotes: e.target.value }))}
              placeholder="Describe the specific tone you want your agent to use..."
            />
          </div>
        )}
      </VoxiaCard>

      {/* Greeting Script */}
      <VoxiaCard variant="bordered">
        <h2 className="font-medium text-secondary dark:text-white mb-4">Greeting Script</h2>
        <p className="text-sm text-colorText dark:text-dark-100 mb-4">
          This is the first thing callers will hear when they reach your AI voice agent.
        </p>
        <textarea
          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-200 text-secondary dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
          rows={4}
          value={settings.greetingScript}
          onChange={(e) => setSettings(s => ({ ...s, greetingScript: e.target.value }))}
          placeholder="Thank you for calling [Company Name]. I'm your AI assistant. How can I help you today?"
        />
      </VoxiaCard>

      {/* Business Hours */}
      <VoxiaCard variant="bordered">
        <h2 className="font-medium text-secondary dark:text-white mb-4">Business Hours</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {DAYS.map((day) => (
              <button
                key={day}
                onClick={() => {
                  const days = settings.businessHours.days.includes(day)
                    ? settings.businessHours.days.filter(d => d !== day)
                    : [...settings.businessHours.days, day]
                  setSettings(s => ({
                    ...s,
                    businessHours: { ...s.businessHours, days },
                  }))
                }}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  settings.businessHours.days.includes(day)
                    ? 'bg-primary text-black'
                    : 'bg-gray-100 dark:bg-gray-800 text-colorText dark:text-dark-100 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {day.slice(0, 3)}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <VoxiaInput
              label="Start Time"
              type="time"
              value={settings.businessHours.start}
              onChange={(e) => setSettings(s => ({
                ...s,
                businessHours: { ...s.businessHours, start: e.target.value },
              }))}
            />
            <VoxiaInput
              label="End Time"
              type="time"
              value={settings.businessHours.end}
              onChange={(e) => setSettings(s => ({
                ...s,
                businessHours: { ...s.businessHours, end: e.target.value },
              }))}
            />
          </div>
        </div>
      </VoxiaCard>

      {/* After Hours Behavior */}
      <VoxiaCard variant="bordered">
        <h2 className="font-medium text-secondary dark:text-white mb-4">After Hours Behavior</h2>
        <p className="text-sm text-colorText dark:text-dark-100 mb-4">
          Configure what happens when someone calls outside business hours.
        </p>
        <div className="space-y-4">
          <VoxiaSelect
            label="Action"
            value={settings.afterHoursBehavior.action}
            onChange={(e) => setSettings(s => ({
              ...s,
              afterHoursBehavior: { ...s.afterHoursBehavior, action: e.target.value },
            }))}
            options={AFTER_HOURS_ACTIONS}
          />
          {(settings.afterHoursBehavior.action === 'message' || settings.afterHoursBehavior.action === 'redirect') && (
            <VoxiaInput
              label={settings.afterHoursBehavior.action === 'message' ? 'Custom Message' : 'Redirect Number'}
              value={settings.afterHoursBehavior.message}
              onChange={(e) => setSettings(s => ({
                ...s,
                afterHoursBehavior: { ...s.afterHoursBehavior, message: e.target.value },
              }))}
              placeholder={settings.afterHoursBehavior.action === 'message'
                ? "We're currently closed. Please call back during business hours."
                : "+1 (555) 123-4567"
              }
            />
          )}
        </div>
      </VoxiaCard>

      {/* Escalation Contacts */}
      <VoxiaCard variant="bordered">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-medium text-secondary dark:text-white">Escalation Contacts</h2>
            <p className="text-sm text-colorText dark:text-dark-100">
              People your AI can transfer calls to when needed.
            </p>
          </div>
          <VoxiaButton variant="outline" size="sm" onClick={addEscalationContact}>
            Add Contact
          </VoxiaButton>
        </div>

        {settings.escalationContacts.length === 0 ? (
          <p className="text-center py-8 text-colorText dark:text-dark-100">
            No escalation contacts configured.
          </p>
        ) : (
          <div className="space-y-4">
            {settings.escalationContacts.map((contact, index) => (
              <div key={index} className="p-4 bg-gray-50 dark:bg-dark-200 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <VoxiaInput
                    label="Name"
                    value={contact.name}
                    onChange={(e) => updateEscalationContact(index, 'name', e.target.value)}
                    placeholder="John Smith"
                  />
                  <VoxiaInput
                    label="Phone"
                    type="tel"
                    value={contact.phone}
                    onChange={(e) => updateEscalationContact(index, 'phone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                  />
                  <VoxiaInput
                    label="Email"
                    type="email"
                    value={contact.email}
                    onChange={(e) => updateEscalationContact(index, 'email', e.target.value)}
                    placeholder="john@example.com"
                  />
                  <VoxiaInput
                    label="Escalation Reason"
                    value={contact.reason}
                    onChange={(e) => updateEscalationContact(index, 'reason', e.target.value)}
                    placeholder="Billing inquiries, Technical support, etc."
                  />
                </div>
                <div className="mt-4 text-right">
                  <button
                    onClick={() => removeEscalationContact(index)}
                    className="text-sm text-red-500 hover:text-red-600"
                  >
                    Remove Contact
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </VoxiaCard>

      {/* Routing Rules */}
      <VoxiaCard variant="bordered">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-medium text-secondary dark:text-white">Intelligent Routing</h2>
            <p className="text-sm text-colorText dark:text-dark-100">
              Define rules for how calls are handled based on caller intent.
            </p>
          </div>
          <VoxiaButton variant="outline" size="sm" onClick={addRoutingRule}>
            Add Rule
          </VoxiaButton>
        </div>

        {settings.routingRules.length === 0 ? (
          <p className="text-center py-8 text-colorText dark:text-dark-100">
            No routing rules configured. Default behavior will be used.
          </p>
        ) : (
          <div className="space-y-4">
            {settings.routingRules.map((rule, index) => (
              <div key={index} className="p-4 bg-gray-50 dark:bg-dark-200 rounded-lg">
                <div className="grid md:grid-cols-3 gap-4">
                  <VoxiaInput
                    label="When caller mentions"
                    value={rule.intent}
                    onChange={(e) => updateRoutingRule(index, 'intent', e.target.value)}
                    placeholder="billing, emergency, sales, etc."
                  />
                  <VoxiaSelect
                    label="Then"
                    value={rule.action}
                    onChange={(e) => updateRoutingRule(index, 'action', e.target.value)}
                    options={ROUTING_ACTIONS}
                  />
                  <VoxiaInput
                    label="Target"
                    value={rule.target}
                    onChange={(e) => updateRoutingRule(index, 'target', e.target.value)}
                    placeholder={
                      rule.action === 'transfer' ? 'Contact name' :
                      rule.action === 'message' ? 'Message text' :
                      'Details...'
                    }
                  />
                </div>
                <div className="mt-4 text-right">
                  <button
                    onClick={() => removeRoutingRule(index)}
                    className="text-sm text-red-500 hover:text-red-600"
                  >
                    Remove Rule
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </VoxiaCard>

      {/* Save Button (bottom) */}
      <div className="flex justify-end">
        <VoxiaButton onClick={handleSave} disabled={saving} size="lg">
          {saving ? 'Saving...' : 'Save All Changes'}
        </VoxiaButton>
      </div>
    </div>
  )
}
