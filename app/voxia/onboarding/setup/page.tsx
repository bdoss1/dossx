'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { VoxiaButton } from '@/components/voxia/VoxiaButton'
import { VoxiaCard } from '@/components/voxia/VoxiaCard'
import { VoxiaInput, VoxiaTextarea } from '@/components/voxia/VoxiaInput'
import { VoxiaSelect } from '@/components/voxia/VoxiaSelect'
import { VoxiaCheckbox } from '@/components/voxia/VoxiaCheckbox'

const TIMEZONES = [
  { value: 'America/New_York', label: 'Eastern Time (ET)' },
  { value: 'America/Chicago', label: 'Central Time (CT)' },
  { value: 'America/Denver', label: 'Mountain Time (MT)' },
  { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
  { value: 'America/Phoenix', label: 'Arizona Time (AZ)' },
  { value: 'America/Anchorage', label: 'Alaska Time (AKT)' },
  { value: 'Pacific/Honolulu', label: 'Hawaii Time (HT)' },
  { value: 'Europe/London', label: 'London (GMT/BST)' },
  { value: 'Europe/Paris', label: 'Paris (CET/CEST)' },
  { value: 'Asia/Tokyo', label: 'Tokyo (JST)' },
  { value: 'Australia/Sydney', label: 'Sydney (AEST/AEDT)' },
]

const TONE_OPTIONS = [
  { value: 'professional', label: 'Professional' },
  { value: 'friendly', label: 'Friendly & Approachable' },
  { value: 'luxury', label: 'Premium & Sophisticated' },
  { value: 'custom', label: 'Custom (describe below)' },
]

const DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const

type Step = 'company' | 'agent' | 'goals' | 'hours' | 'knowledge' | 'consent'

export default function SetupPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<Step>('company')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Form state
  const [formData, setFormData] = useState({
    // Company
    businessName: '',
    websiteUrl: '',
    contactName: '',
    contactEmail: '',
    timezone: 'America/New_York',

    // Agent
    agentName: '',
    tonePreset: 'professional',
    toneNotes: '',
    greetingScript: '',

    // Goals
    goals: {
      answerFaqs: true,
      qualifyLeads: false,
      scheduleAppointments: false,
      routeCalls: true,
      takeMessages: true,
      successCriteria: '',
    },

    // Hours
    businessHours: DAYS.reduce((acc, day) => ({
      ...acc,
      [day]: {
        enabled: day !== 'saturday' && day !== 'sunday',
        start: '09:00',
        end: '17:00',
      },
    }), {} as Record<string, { enabled: boolean; start: string; end: string }>),

    // After hours
    afterHoursBehavior: {
      action: 'voicemail' as const,
      notifyEmail: '',
      customMessage: '',
    },

    // Escalation
    escalationContacts: [{ name: '', phone: '', email: '', role: '' }],

    // Knowledge
    knowledgeUrls: [''],
    knowledgeText: '',
    knowledgeQA: [{ question: '', answer: '' }],

    // Consent
    acceptedTerms: false,
    acceptedCallPolicy: false,
  })

  const updateFormData = (updates: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...updates }))
  }

  const steps: { id: Step; label: string }[] = [
    { id: 'company', label: 'Company' },
    { id: 'agent', label: 'Agent' },
    { id: 'goals', label: 'Goals' },
    { id: 'hours', label: 'Hours' },
    { id: 'knowledge', label: 'Knowledge' },
    { id: 'consent', label: 'Review' },
  ]

  const currentStepIndex = steps.findIndex((s) => s.id === currentStep)

  const handleNext = () => {
    const nextStep = steps[currentStepIndex + 1]
    if (nextStep) {
      setCurrentStep(nextStep.id)
    }
  }

  const handleBack = () => {
    const prevStep = steps[currentStepIndex - 1]
    if (prevStep) {
      setCurrentStep(prevStep.id)
    }
  }

  const handleSubmit = async () => {
    if (!formData.acceptedTerms || !formData.acceptedCallPolicy) {
      setError('Please accept the terms and call policy to continue.')
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Clean up form data
      const submitData = {
        ...formData,
        knowledgeUrls: formData.knowledgeUrls.filter((url) => url.trim()),
        knowledgeQA: formData.knowledgeQA.filter((qa) => qa.question.trim() && qa.answer.trim()),
        escalationContacts: formData.escalationContacts.filter((c) => c.name.trim()),
      }

      const response = await fetch('/api/voxia/onboarding/setup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit setup')
      }

      router.push('/voxia/onboarding/complete')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-backgroundBody dark:bg-dark py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold text-secondary dark:text-white mb-4 inline-block">
            DossX
          </Link>
          <h1 className="text-3xl font-bold text-secondary dark:text-white mb-2">
            Configure Your AI Voice Agent
          </h1>
          <p className="text-colorText dark:text-dark-100">
            Tell us about your business so we can set up Voxia perfectly for you.
          </p>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <button
                onClick={() => index <= currentStepIndex && setCurrentStep(step.id)}
                disabled={index > currentStepIndex}
                className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm transition-colors ${
                  step.id === currentStep
                    ? 'bg-primary text-black font-medium'
                    : index < currentStepIndex
                      ? 'bg-primary/20 text-primary cursor-pointer'
                      : 'bg-gray-200 dark:bg-gray-700 text-colorText dark:text-dark-100'
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-current/20 flex items-center justify-center text-xs">
                  {index + 1}
                </span>
                <span className="hidden sm:inline">{step.label}</span>
              </button>
              {index < steps.length - 1 && (
                <div className="w-4 h-px bg-gray-300 dark:bg-gray-600 mx-1" />
              )}
            </div>
          ))}
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-800 dark:text-red-200">{error}</p>
          </div>
        )}

        {/* Form Steps */}
        <VoxiaCard variant="elevated" className="mb-8">
          {currentStep === 'company' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-secondary dark:text-white mb-4">
                Company Information
              </h2>
              <VoxiaInput
                label="Business Name"
                value={formData.businessName}
                onChange={(e) => updateFormData({ businessName: e.target.value })}
                placeholder="Acme Corp"
                required
              />
              <VoxiaInput
                label="Website URL"
                type="url"
                value={formData.websiteUrl}
                onChange={(e) => updateFormData({ websiteUrl: e.target.value })}
                placeholder="https://example.com"
              />
              <div className="grid sm:grid-cols-2 gap-6">
                <VoxiaInput
                  label="Contact Name"
                  value={formData.contactName}
                  onChange={(e) => updateFormData({ contactName: e.target.value })}
                  placeholder="John Smith"
                  required
                />
                <VoxiaInput
                  label="Contact Email"
                  type="email"
                  value={formData.contactEmail}
                  onChange={(e) => updateFormData({ contactEmail: e.target.value })}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <VoxiaSelect
                label="Timezone"
                options={TIMEZONES}
                value={formData.timezone}
                onChange={(e) => updateFormData({ timezone: e.target.value })}
                required
              />
            </div>
          )}

          {currentStep === 'agent' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-secondary dark:text-white mb-4">
                Agent Identity
              </h2>
              <VoxiaInput
                label="Agent Name"
                value={formData.agentName}
                onChange={(e) => updateFormData({ agentName: e.target.value })}
                placeholder="e.g., Alex, Sam, or your brand name"
                hint="This is how your AI voice agent will introduce itself"
                required
              />
              <VoxiaSelect
                label="Voice Tone"
                options={TONE_OPTIONS}
                value={formData.tonePreset}
                onChange={(e) => updateFormData({ tonePreset: e.target.value })}
                required
              />
              {formData.tonePreset === 'custom' && (
                <VoxiaTextarea
                  label="Tone Description"
                  value={formData.toneNotes}
                  onChange={(e) => updateFormData({ toneNotes: e.target.value })}
                  placeholder="Describe the specific tone and personality you want..."
                  rows={3}
                />
              )}
              <VoxiaTextarea
                label="Greeting Script"
                value={formData.greetingScript}
                onChange={(e) => updateFormData({ greetingScript: e.target.value })}
                placeholder="Thank you for calling [Business Name]. This is [Agent Name], your virtual assistant. How may I help you today?"
                hint="This is what callers will hear when they first connect"
                rows={4}
                required
              />
            </div>
          )}

          {currentStep === 'goals' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-secondary dark:text-white mb-4">
                Agent Goals
              </h2>
              <p className="text-colorText dark:text-dark-100 mb-4">
                What should your AI voice agent help callers with?
              </p>
              <div className="space-y-4">
                <VoxiaCheckbox
                  id="answerFaqs"
                  label="Answer Frequently Asked Questions"
                  description="Respond to common questions using your knowledge base"
                  checked={formData.goals.answerFaqs}
                  onChange={(e) => updateFormData({
                    goals: { ...formData.goals, answerFaqs: e.target.checked },
                  })}
                />
                <VoxiaCheckbox
                  id="qualifyLeads"
                  label="Qualify Leads"
                  description="Gather key information from potential customers"
                  checked={formData.goals.qualifyLeads}
                  onChange={(e) => updateFormData({
                    goals: { ...formData.goals, qualifyLeads: e.target.checked },
                  })}
                />
                <VoxiaCheckbox
                  id="scheduleAppointments"
                  label="Schedule Appointments"
                  description="Book meetings directly on your calendar"
                  checked={formData.goals.scheduleAppointments}
                  onChange={(e) => updateFormData({
                    goals: { ...formData.goals, scheduleAppointments: e.target.checked },
                  })}
                />
                <VoxiaCheckbox
                  id="routeCalls"
                  label="Route Calls"
                  description="Direct callers to the right department or person"
                  checked={formData.goals.routeCalls}
                  onChange={(e) => updateFormData({
                    goals: { ...formData.goals, routeCalls: e.target.checked },
                  })}
                />
                <VoxiaCheckbox
                  id="takeMessages"
                  label="Take Messages"
                  description="Capture messages when live support isn't available"
                  checked={formData.goals.takeMessages}
                  onChange={(e) => updateFormData({
                    goals: { ...formData.goals, takeMessages: e.target.checked },
                  })}
                />
              </div>
              <VoxiaTextarea
                label="Success Criteria (optional)"
                value={formData.goals.successCriteria}
                onChange={(e) => updateFormData({
                  goals: { ...formData.goals, successCriteria: e.target.value },
                })}
                placeholder="What does a successful call look like for your business?"
                rows={3}
              />
            </div>
          )}

          {currentStep === 'hours' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-secondary dark:text-white mb-4">
                Business Hours & Routing
              </h2>
              <p className="text-colorText dark:text-dark-100 mb-4">
                Set your business hours and how calls should be handled outside these times.
              </p>
              <div className="space-y-3">
                {DAYS.map((day) => (
                  <div key={day} className="flex items-center gap-4 flex-wrap">
                    <label className="flex items-center gap-2 w-32">
                      <input
                        type="checkbox"
                        checked={formData.businessHours[day].enabled}
                        onChange={(e) => updateFormData({
                          businessHours: {
                            ...formData.businessHours,
                            [day]: { ...formData.businessHours[day], enabled: e.target.checked },
                          },
                        })}
                        className="rounded border-gray-300 text-primary focus:ring-primary/50"
                      />
                      <span className="capitalize text-secondary dark:text-white">{day}</span>
                    </label>
                    {formData.businessHours[day].enabled && (
                      <div className="flex items-center gap-2">
                        <input
                          type="time"
                          value={formData.businessHours[day].start}
                          onChange={(e) => updateFormData({
                            businessHours: {
                              ...formData.businessHours,
                              [day]: { ...formData.businessHours[day], start: e.target.value },
                            },
                          })}
                          className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-200 px-3 py-2 text-sm"
                        />
                        <span className="text-colorText dark:text-dark-100">to</span>
                        <input
                          type="time"
                          value={formData.businessHours[day].end}
                          onChange={(e) => updateFormData({
                            businessHours: {
                              ...formData.businessHours,
                              [day]: { ...formData.businessHours[day], end: e.target.value },
                            },
                          })}
                          className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-200 px-3 py-2 text-sm"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="font-medium text-secondary dark:text-white mb-4">
                  After-Hours Behavior
                </h3>
                <VoxiaSelect
                  options={[
                    { value: 'voicemail', label: 'Take voicemail' },
                    { value: 'email_notify', label: 'Send email notification' },
                    { value: 'text_notify', label: 'Send text notification' },
                    { value: 'schedule_callback', label: 'Schedule callback' },
                  ]}
                  value={formData.afterHoursBehavior.action}
                  onChange={(e) => updateFormData({
                    afterHoursBehavior: {
                      ...formData.afterHoursBehavior,
                      action: e.target.value as typeof formData.afterHoursBehavior.action,
                    },
                  })}
                />
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="font-medium text-secondary dark:text-white mb-4">
                  Escalation Contact
                </h3>
                <p className="text-sm text-colorText dark:text-dark-100 mb-4">
                  Who should be contacted for urgent matters?
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <VoxiaInput
                    label="Name"
                    value={formData.escalationContacts[0].name}
                    onChange={(e) => updateFormData({
                      escalationContacts: [{ ...formData.escalationContacts[0], name: e.target.value }],
                    })}
                    placeholder="Jane Doe"
                    required
                  />
                  <VoxiaInput
                    label="Phone"
                    type="tel"
                    value={formData.escalationContacts[0].phone}
                    onChange={(e) => updateFormData({
                      escalationContacts: [{ ...formData.escalationContacts[0], phone: e.target.value }],
                    })}
                    placeholder="+1 555 123 4567"
                  />
                  <VoxiaInput
                    label="Email"
                    type="email"
                    value={formData.escalationContacts[0].email}
                    onChange={(e) => updateFormData({
                      escalationContacts: [{ ...formData.escalationContacts[0], email: e.target.value }],
                    })}
                    placeholder="jane@example.com"
                  />
                  <VoxiaInput
                    label="Role"
                    value={formData.escalationContacts[0].role}
                    onChange={(e) => updateFormData({
                      escalationContacts: [{ ...formData.escalationContacts[0], role: e.target.value }],
                    })}
                    placeholder="Manager"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 'knowledge' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-secondary dark:text-white mb-4">
                Knowledge Base
              </h2>
              <p className="text-colorText dark:text-dark-100 mb-4">
                Help your AI voice agent answer questions accurately by providing knowledge sources.
              </p>

              <div>
                <h3 className="font-medium text-secondary dark:text-white mb-2">
                  Website URLs
                </h3>
                <p className="text-sm text-colorText dark:text-dark-100 mb-3">
                  Add URLs for your AI agent to learn from (e.g., FAQ pages, service descriptions).
                </p>
                {formData.knowledgeUrls.map((url, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <VoxiaInput
                      value={url}
                      onChange={(e) => {
                        const newUrls = [...formData.knowledgeUrls]
                        newUrls[index] = e.target.value
                        updateFormData({ knowledgeUrls: newUrls })
                      }}
                      placeholder="https://example.com/faq"
                      className="flex-1"
                    />
                    {formData.knowledgeUrls.length > 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          const newUrls = formData.knowledgeUrls.filter((_, i) => i !== index)
                          updateFormData({ knowledgeUrls: newUrls })
                        }}
                        className="px-3 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => updateFormData({ knowledgeUrls: [...formData.knowledgeUrls, ''] })}
                  className="text-sm text-primary hover:text-primary/80"
                >
                  + Add another URL
                </button>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="font-medium text-secondary dark:text-white mb-2">
                  Additional Information
                </h3>
                <VoxiaTextarea
                  value={formData.knowledgeText}
                  onChange={(e) => updateFormData({ knowledgeText: e.target.value })}
                  placeholder="Paste any additional information, product descriptions, policies, or other content your agent should know..."
                  rows={6}
                />
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="font-medium text-secondary dark:text-white mb-2">
                  Quick Q&A
                </h3>
                <p className="text-sm text-colorText dark:text-dark-100 mb-3">
                  Add specific questions and answers your agent should know.
                </p>
                {formData.knowledgeQA.map((qa, index) => (
                  <div key={index} className="p-4 bg-gray-50 dark:bg-dark-300 rounded-lg mb-3">
                    <VoxiaInput
                      label="Question"
                      value={qa.question}
                      onChange={(e) => {
                        const newQA = [...formData.knowledgeQA]
                        newQA[index] = { ...qa, question: e.target.value }
                        updateFormData({ knowledgeQA: newQA })
                      }}
                      placeholder="What are your business hours?"
                      className="mb-3"
                    />
                    <VoxiaTextarea
                      label="Answer"
                      value={qa.answer}
                      onChange={(e) => {
                        const newQA = [...formData.knowledgeQA]
                        newQA[index] = { ...qa, answer: e.target.value }
                        updateFormData({ knowledgeQA: newQA })
                      }}
                      placeholder="We're open Monday through Friday, 9 AM to 5 PM Eastern Time."
                      rows={2}
                    />
                    {formData.knowledgeQA.length > 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          const newQA = formData.knowledgeQA.filter((_, i) => i !== index)
                          updateFormData({ knowledgeQA: newQA })
                        }}
                        className="text-sm text-red-500 hover:text-red-600 mt-2"
                      >
                        Remove Q&A
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => updateFormData({ knowledgeQA: [...formData.knowledgeQA, { question: '', answer: '' }] })}
                  className="text-sm text-primary hover:text-primary/80"
                >
                  + Add another Q&A
                </button>
              </div>
            </div>
          )}

          {currentStep === 'consent' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-secondary dark:text-white mb-4">
                Review & Confirm
              </h2>

              <div className="bg-gray-50 dark:bg-dark-300 rounded-lg p-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-colorText dark:text-dark-100">Business Name:</span>
                  <span className="font-medium text-secondary dark:text-white">{formData.businessName || '-'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-colorText dark:text-dark-100">Agent Name:</span>
                  <span className="font-medium text-secondary dark:text-white">{formData.agentName || '-'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-colorText dark:text-dark-100">Voice Tone:</span>
                  <span className="font-medium text-secondary dark:text-white capitalize">{formData.tonePreset}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-colorText dark:text-dark-100">Knowledge Sources:</span>
                  <span className="font-medium text-secondary dark:text-white">
                    {formData.knowledgeUrls.filter(u => u).length} URLs,{' '}
                    {formData.knowledgeQA.filter(qa => qa.question).length} Q&As
                  </span>
                </div>
              </div>

              <div className="pt-6 space-y-4">
                <VoxiaCheckbox
                  id="terms"
                  label="I accept the Terms of Service"
                  description="By checking this box, you agree to our terms of service and privacy policy."
                  checked={formData.acceptedTerms}
                  onChange={(e) => updateFormData({ acceptedTerms: e.target.checked })}
                  required
                />
                <VoxiaCheckbox
                  id="callPolicy"
                  label="I understand the AI voice agent call policy"
                  description="You acknowledge that an AI will handle calls on your behalf and callers will be informed they are speaking with an AI assistant."
                  checked={formData.acceptedCallPolicy}
                  onChange={(e) => updateFormData({ acceptedCallPolicy: e.target.checked })}
                  required
                />
              </div>
            </div>
          )}
        </VoxiaCard>

        {/* Navigation */}
        <div className="flex justify-between">
          <VoxiaButton
            variant="ghost"
            onClick={handleBack}
            disabled={currentStepIndex === 0}
          >
            Back
          </VoxiaButton>
          {currentStep === 'consent' ? (
            <VoxiaButton onClick={handleSubmit} loading={loading}>
              Complete Setup
            </VoxiaButton>
          ) : (
            <VoxiaButton onClick={handleNext}>
              Continue
            </VoxiaButton>
          )}
        </div>
      </div>
    </main>
  )
}
