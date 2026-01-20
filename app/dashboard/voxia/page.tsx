import { getGatingContext, canAccessFeature } from '@/lib/voxia/gating'
import { VoxiaCard } from '@/components/voxia/VoxiaCard'
import { VoxiaButton } from '@/components/voxia/VoxiaButton'
import { db } from '@/lib/db'
import { redirect } from 'next/navigation'

export default async function VoxiaOverviewPage() {
  const context = await getGatingContext()

  if (!context.isAuthenticated) {
    redirect('/sign-in')
  }

  if (!context.organization) {
    redirect('/voxia/onboarding')
  }

  // Fetch full agent details
  const agent = await db.voxiaAgent.findFirst({
    where: { orgId: context.organization.id },
    include: {
      knowledgeSources: true,
    },
  })

  const canManage = canAccessFeature(context.subscription?.status)

  const getStatusBadge = () => {
    const status = agent?.status
    switch (status) {
      case 'ACTIVE':
        return <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm font-medium">Active</span>
      case 'CONFIGURING':
        return <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 rounded-full text-sm font-medium">Configuring</span>
      case 'PAUSED':
        return <span className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm font-medium">Paused</span>
      case 'NEEDS_ATTENTION':
        return <span className="px-3 py-1 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 rounded-full text-sm font-medium">Needs Attention</span>
      default:
        return <span className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm font-medium">Draft</span>
    }
  }

  // Parse business hours for display
  const businessHours = agent?.businessHoursJson as { days: string[]; start: string; end: string } | null

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-secondary dark:text-white">AI Voice Agent</h1>
          <p className="text-colorText dark:text-dark-100">
            Manage your intelligent voice assistant
          </p>
        </div>
        {getStatusBadge()}
      </div>

      {/* Billing warning */}
      {!canManage && (
        <VoxiaCard variant="bordered" className="border-yellow-300 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/20">
          <div className="flex items-start gap-4">
            <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h3 className="font-medium text-yellow-800 dark:text-yellow-200">Subscription Issue</h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                Your subscription requires attention. Please update your billing to continue using your voice agent.
              </p>
              <VoxiaButton href="/dashboard/billing" size="sm" className="mt-3">
                Fix Billing
              </VoxiaButton>
            </div>
          </div>
        </VoxiaCard>
      )}

      {!agent ? (
        <VoxiaCard variant="bordered" className="text-center py-12">
          <svg className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
          <h3 className="text-lg font-medium text-secondary dark:text-white mb-2">
            No Agent Configured
          </h3>
          <p className="text-colorText dark:text-dark-100 mb-4">
            Complete your setup to start using your AI voice agent.
          </p>
          <VoxiaButton href="/voxia/onboarding/setup">
            Complete Setup
          </VoxiaButton>
        </VoxiaCard>
      ) : (
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Agent Details */}
          <VoxiaCard variant="bordered">
            <h3 className="font-medium text-secondary dark:text-white mb-4">Agent Details</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-colorText dark:text-dark-100">Name</label>
                <p className="text-secondary dark:text-white font-medium">{agent.name}</p>
              </div>
              <div>
                <label className="text-sm text-colorText dark:text-dark-100">Tone</label>
                <p className="text-secondary dark:text-white font-medium capitalize">{agent.tonePreset}</p>
              </div>
              {agent.greetingScript && (
                <div>
                  <label className="text-sm text-colorText dark:text-dark-100">Greeting</label>
                  <p className="text-secondary dark:text-white">{agent.greetingScript}</p>
                </div>
              )}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <VoxiaButton href="/dashboard/voxia/settings" variant="outline" size="sm" disabled={!canManage}>
                Edit Settings
              </VoxiaButton>
            </div>
          </VoxiaCard>

          {/* Business Hours */}
          <VoxiaCard variant="bordered">
            <h3 className="font-medium text-secondary dark:text-white mb-4">Business Hours</h3>
            {businessHours ? (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-secondary dark:text-white">
                  <svg className="w-5 h-5 text-colorText dark:text-dark-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{businessHours.start} - {businessHours.end}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {businessHours.days?.map((day) => (
                    <span key={day} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm text-secondary dark:text-white">
                      {day}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-colorText dark:text-dark-100">Not configured</p>
            )}
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <VoxiaButton href="/dashboard/voxia/settings" variant="outline" size="sm" disabled={!canManage}>
                Configure Hours
              </VoxiaButton>
            </div>
          </VoxiaCard>

          {/* Knowledge Base Summary */}
          <VoxiaCard variant="bordered">
            <h3 className="font-medium text-secondary dark:text-white mb-4">Knowledge Base</h3>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-secondary dark:text-white">
                  {agent.knowledgeSources.length}
                </p>
                <p className="text-sm text-colorText dark:text-dark-100">Sources</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {agent.knowledgeSources.filter(s => s.status === 'READY').length}
                </p>
                <p className="text-sm text-colorText dark:text-dark-100">Ready</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                  {agent.knowledgeSources.filter(s => s.status === 'PROCESSING').length}
                </p>
                <p className="text-sm text-colorText dark:text-dark-100">Processing</p>
              </div>
            </div>
            <VoxiaButton href="/dashboard/voxia/knowledge" variant="outline" size="sm" className="w-full" disabled={!canManage}>
              Manage Knowledge
            </VoxiaButton>
          </VoxiaCard>

          {/* Test Agent Card */}
          <VoxiaCard variant="bordered">
            <h3 className="font-medium text-secondary dark:text-white mb-4">Test Your Agent</h3>
            <p className="text-colorText dark:text-dark-100 mb-4">
              Make a test call to experience how your AI voice agent handles conversations.
            </p>
            <VoxiaButton
              variant="outline"
              size="sm"
              className="w-full"
              disabled={!canManage || agent.status !== 'ACTIVE'}
            >
              {agent.status === 'ACTIVE' ? 'Start Test Call' : 'Agent Not Active'}
            </VoxiaButton>
            {agent.status !== 'ACTIVE' && (
              <p className="text-sm text-colorText dark:text-dark-100 mt-2">
                Your agent must be active to make test calls.
              </p>
            )}
          </VoxiaCard>
        </div>
      )}
    </div>
  )
}
