'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { VoxiaButton } from '@/components/voxia/VoxiaButton'
import { VoxiaCard } from '@/components/voxia/VoxiaCard'

interface OnboardingStatus {
  hasSubscription: boolean
  subscriptionStatus: string | null
  onboardingStage: string | null
  agentStatus: string | null
  knowledgeSourcesCount: number
  knowledgeSourcesReady: number
  calendarConnected: boolean
}

export default function CompletePage() {
  const router = useRouter()
  const [status, setStatus] = useState<OnboardingStatus | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('/api/voxia/onboarding/status')
        const data = await response.json()
        setStatus(data)
      } catch (error) {
        console.error('Failed to fetch status:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStatus()
    const interval = setInterval(fetchStatus, 5000) // Poll every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const isActive = status?.agentStatus === 'ACTIVE'
  const isConfiguring = status?.agentStatus === 'CONFIGURING'

  return (
    <main className="min-h-screen bg-backgroundBody dark:bg-dark py-12 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <Link href="/" className="text-2xl font-bold text-secondary dark:text-white mb-8 inline-block">
          DossX
        </Link>

        {/* Success animation */}
        <div className="mb-8">
          {isActive ? (
            <div className="w-24 h-24 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          ) : (
            <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-primary animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            </div>
          )}
        </div>

        <h1 className="text-3xl font-bold text-secondary dark:text-white mb-4">
          {isActive ? 'Your AI Voice Agent is Ready!' : 'Configuring Your AI Voice Agent'}
        </h1>
        <p className="text-lg text-colorText dark:text-dark-100 mb-8">
          {isActive
            ? 'Voxia is now active and ready to handle calls for your business.'
            : 'We\'re setting up your AI voice agent. This usually takes a few moments.'}
        </p>

        {/* Status checklist */}
        <VoxiaCard variant="bordered" className="text-left mb-8">
          <h2 className="font-bold text-secondary dark:text-white mb-4">Setup Progress</h2>
          <div className="space-y-3">
            <StatusItem
              label="Subscription Active"
              status={status?.hasSubscription && status.subscriptionStatus === 'ACTIVE' ? 'complete' : 'pending'}
            />
            <StatusItem
              label="Configuration Received"
              status={status?.onboardingStage === 'SETUP_SUBMITTED' || status?.onboardingStage === 'COMPLETE' ? 'complete' : 'pending'}
            />
            <StatusItem
              label="Knowledge Base Processing"
              status={
                status?.knowledgeSourcesCount === 0
                  ? 'pending'
                  : status?.knowledgeSourcesReady === status?.knowledgeSourcesCount
                    ? 'complete'
                    : 'processing'
              }
              detail={status?.knowledgeSourcesCount ? `${status.knowledgeSourcesReady}/${status.knowledgeSourcesCount} sources ready` : undefined}
            />
            <StatusItem
              label="Agent Provisioning"
              status={isActive ? 'complete' : isConfiguring ? 'processing' : 'pending'}
            />
            <StatusItem
              label="Calendar Connected"
              status={status?.calendarConnected ? 'complete' : 'optional'}
              detail="Optional"
            />
          </div>
        </VoxiaCard>

        {/* Actions */}
        <div className="space-y-4">
          <VoxiaButton href="/dashboard" size="lg" className="w-full sm:w-auto">
            Go to Dashboard
          </VoxiaButton>
          {!status?.calendarConnected && (
            <div>
              <VoxiaButton href="/dashboard/voxia/calendar" variant="outline" className="w-full sm:w-auto">
                Connect Calendar
              </VoxiaButton>
            </div>
          )}
        </div>

        <p className="text-sm text-colorText dark:text-dark-100 mt-8">
          Need help? <a href="/contact" className="text-primary hover:underline">Contact our team</a>
        </p>
      </div>
    </main>
  )
}

function StatusItem({
  label,
  status,
  detail,
}: {
  label: string
  status: 'complete' | 'processing' | 'pending' | 'optional'
  detail?: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
        status === 'complete'
          ? 'bg-green-100 dark:bg-green-900/30'
          : status === 'processing'
            ? 'bg-primary/10'
            : status === 'optional'
              ? 'bg-gray-100 dark:bg-gray-800'
              : 'bg-gray-100 dark:bg-gray-800'
      }`}>
        {status === 'complete' ? (
          <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : status === 'processing' ? (
          <svg className="w-4 h-4 text-primary animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        ) : status === 'optional' ? (
          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        ) : (
          <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full" />
        )}
      </div>
      <div className="flex-1">
        <span className="text-secondary dark:text-white">{label}</span>
        {detail && (
          <span className="text-sm text-colorText dark:text-dark-100 ml-2">({detail})</span>
        )}
      </div>
    </div>
  )
}
