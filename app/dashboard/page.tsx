import Link from 'next/link'
import { VoxiaCard } from '@/components/voxia/VoxiaCard'
import { VoxiaButton } from '@/components/voxia/VoxiaButton'
import { getGatingContext } from '@/lib/voxia/gating'

export default async function DashboardPage() {
  const context = await getGatingContext()

  if (!context.isAuthenticated) {
    return null
  }

  const isAgentActive = context.agent?.status === 'ACTIVE'
  const isConfiguring = context.agent?.status === 'CONFIGURING'
  const needsAttention = context.agent?.status === 'NEEDS_ATTENTION'

  const getStatusColor = () => {
    if (isAgentActive) return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
    if (isConfiguring) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
    if (needsAttention) return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
    return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
  }

  const getStatusText = () => {
    if (isAgentActive) return 'Active'
    if (isConfiguring) return 'Configuring'
    if (needsAttention) return 'Needs Attention'
    return context.agent?.status || 'Not Set Up'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-secondary dark:text-white">Dashboard</h1>
        <p className="text-colorText dark:text-dark-100">
          Welcome back! Here's an overview of your AI voice agent.
        </p>
      </div>

      {/* Status cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Agent Status */}
        <VoxiaCard variant="bordered">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-medium text-secondary dark:text-white">Voice Agent</h3>
              <p className="text-sm text-colorText dark:text-dark-100">
                {context.agent?.name || 'Voxia'}
              </p>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}>
              {getStatusText()}
            </span>
          </div>
          <VoxiaButton href="/dashboard/voxia" variant="outline" size="sm" className="w-full">
            Manage Agent
          </VoxiaButton>
        </VoxiaCard>

        {/* Subscription Status */}
        <VoxiaCard variant="bordered">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-medium text-secondary dark:text-white">Subscription</h3>
              <p className="text-sm text-colorText dark:text-dark-100">
                {context.subscription?.plan || 'No Plan'}
              </p>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              context.subscription?.status === 'ACTIVE'
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
            }`}>
              {context.subscription?.status || 'Inactive'}
            </span>
          </div>
          <VoxiaButton href="/dashboard/billing" variant="outline" size="sm" className="w-full">
            Manage Billing
          </VoxiaButton>
        </VoxiaCard>

        {/* Quick Actions */}
        <VoxiaCard variant="bordered">
          <h3 className="font-medium text-secondary dark:text-white mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <Link
              href="/dashboard/voxia/knowledge"
              className="flex items-center gap-2 text-sm text-colorText dark:text-dark-100 hover:text-primary"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Edit Knowledge Base
            </Link>
            <Link
              href="/dashboard/voxia/calendar"
              className="flex items-center gap-2 text-sm text-colorText dark:text-dark-100 hover:text-primary"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Connect Calendar
            </Link>
            <Link
              href="/dashboard/voxia/settings"
              className="flex items-center gap-2 text-sm text-colorText dark:text-dark-100 hover:text-primary"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Agent Settings
            </Link>
          </div>
        </VoxiaCard>
      </div>

      {/* Setup checklist if still configuring */}
      {isConfiguring && (
        <VoxiaCard variant="bordered">
          <h3 className="font-medium text-secondary dark:text-white mb-4">
            Setup Progress
          </h3>
          <p className="text-sm text-colorText dark:text-dark-100 mb-4">
            Your AI voice agent is being configured. This process usually takes a few minutes.
          </p>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <span className="text-sm text-colorText dark:text-dark-100">Processing...</span>
          </div>
        </VoxiaCard>
      )}

      {/* Recent Activity Placeholder */}
      <VoxiaCard variant="bordered">
        <h3 className="font-medium text-secondary dark:text-white mb-4">Recent Activity</h3>
        <div className="text-center py-8">
          <svg className="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-colorText dark:text-dark-100">
            Activity tracking will appear here once your agent starts handling calls.
          </p>
        </div>
      </VoxiaCard>
    </div>
  )
}
