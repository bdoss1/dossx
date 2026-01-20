'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import { VoxiaCard } from '@/components/voxia/VoxiaCard'
import { VoxiaButton } from '@/components/voxia/VoxiaButton'

interface SubscriptionData {
  id: string
  status: string
  plan: string
  currentPeriodEnd: string | null
  stripeCustomerId: string
}

const PLAN_DETAILS: Record<string, { name: string; features: string[] }> = {
  LAUNCH: {
    name: 'Voxia Launch',
    features: [
      'Core AI voice agent',
      'Basic call routing',
      'Knowledge base (up to 50 sources)',
      'Business hours configuration',
      'Email notifications',
    ],
  },
  GROWTH: {
    name: 'Voxia Growth',
    features: [
      'Everything in Launch',
      'Multi-flow conversations',
      'CRM integration ready',
      'Advanced analytics',
      'Calendar integrations',
      'Unlimited knowledge sources',
    ],
  },
  SCALE: {
    name: 'Voxia Scale',
    features: [
      'Everything in Growth',
      'Advanced routing rules',
      'Custom voice training',
      'Priority support',
      'Dedicated success manager',
      'SLA guarantee',
    ],
  },
}

export default function BillingPage() {
  const searchParams = useSearchParams()
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null)
  const [loading, setLoading] = useState(true)
  const [portalLoading, setPortalLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error' | 'warning'; text: string } | null>(null)

  // Check for status messages from redirect
  useEffect(() => {
    const status = searchParams.get('status')
    if (status === 'inactive') {
      setMessage({
        type: 'warning',
        text: 'Your subscription requires attention. Please update your billing to continue using your voice agent.',
      })
    }
  }, [searchParams])

  const fetchSubscription = useCallback(async () => {
    try {
      const response = await fetch('/api/voxia/onboarding/status')
      const data = await response.json()
      if (data.subscription) {
        setSubscription({
          id: data.subscription.id,
          status: data.subscription.status,
          plan: data.subscription.plan,
          currentPeriodEnd: data.subscription.currentPeriodEnd,
          stripeCustomerId: data.subscription.stripeCustomerId,
        })
      }
    } catch (error) {
      console.error('Failed to fetch subscription:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchSubscription()
  }, [fetchSubscription])

  const handleManageBilling = async () => {
    setPortalLoading(true)
    try {
      const response = await fetch('/api/stripe/portal', {
        method: 'POST',
      })
      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to open billing portal.' })
      }
    } catch (error) {
      console.error('Failed to open billing portal:', error)
      setMessage({ type: 'error', text: 'Failed to open billing portal.' })
    } finally {
      setPortalLoading(false)
    }
  }

  const getStatusBadge = () => {
    if (!subscription) return null

    switch (subscription.status) {
      case 'ACTIVE':
        return (
          <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm font-medium">
            Active
          </span>
        )
      case 'TRIALING':
        return (
          <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm font-medium">
            Trial
          </span>
        )
      case 'PAST_DUE':
        return (
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 rounded-full text-sm font-medium">
            Past Due
          </span>
        )
      case 'CANCELED':
        return (
          <span className="px-3 py-1 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 rounded-full text-sm font-medium">
            Canceled
          </span>
        )
      default:
        return (
          <span className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm font-medium">
            {subscription.status}
          </span>
        )
    }
  }

  const planDetails = subscription ? PLAN_DETAILS[subscription.plan] : null

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
      <div>
        <h1 className="text-2xl font-bold text-secondary dark:text-white">Billing</h1>
        <p className="text-colorText dark:text-dark-100">
          Manage your subscription and billing details.
        </p>
      </div>

      {/* Message */}
      {message && (
        <div className={`p-4 rounded-lg ${
          message.type === 'success'
            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
            : message.type === 'warning'
              ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
              : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
        }`}>
          <div className="flex items-start gap-3">
            {message.type === 'warning' && (
              <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            )}
            <div className="flex-1">
              {message.text}
            </div>
            <button
              onClick={() => setMessage(null)}
              className="font-bold shrink-0"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {!subscription ? (
        <VoxiaCard variant="bordered" className="text-center py-12">
          <svg className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
          <h3 className="text-lg font-medium text-secondary dark:text-white mb-2">
            No Active Subscription
          </h3>
          <p className="text-colorText dark:text-dark-100 mb-4">
            Start using Voxia by selecting a plan that fits your needs.
          </p>
          <VoxiaButton href="/voxia/onboarding/plan">
            View Plans
          </VoxiaButton>
        </VoxiaCard>
      ) : (
        <>
          {/* Current Plan */}
          <VoxiaCard variant="bordered">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="font-medium text-secondary dark:text-white mb-1">Current Plan</h2>
                <p className="text-2xl font-bold text-secondary dark:text-white">
                  {planDetails?.name || subscription.plan}
                </p>
              </div>
              {getStatusBadge()}
            </div>

            {/* Plan features */}
            {planDetails && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-colorText dark:text-dark-100 mb-3">
                  Included Features
                </h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {planDetails.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-secondary dark:text-white">
                      <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Next billing date */}
            {subscription.currentPeriodEnd && (
              <p className="text-sm text-colorText dark:text-dark-100 mb-6">
                {subscription.status === 'CANCELED' ? 'Access ends' : 'Next billing date'}:{' '}
                <span className="font-medium text-secondary dark:text-white">
                  {new Date(subscription.currentPeriodEnd).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </p>
            )}

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <VoxiaButton onClick={handleManageBilling} disabled={portalLoading}>
                {portalLoading ? 'Loading...' : 'Manage Subscription'}
              </VoxiaButton>
              <VoxiaButton href="/voxia/onboarding/plan" variant="outline">
                Change Plan
              </VoxiaButton>
            </div>
          </VoxiaCard>

          {/* Billing actions */}
          {(subscription.status === 'PAST_DUE' || subscription.status === 'CANCELED') && (
            <VoxiaCard variant="bordered" className="border-yellow-300 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/20">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h3 className="font-medium text-yellow-800 dark:text-yellow-200">
                    {subscription.status === 'PAST_DUE' ? 'Payment Failed' : 'Subscription Canceled'}
                  </h3>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                    {subscription.status === 'PAST_DUE'
                      ? 'Your last payment was unsuccessful. Please update your payment method to continue using Voxia.'
                      : 'Your subscription has been canceled. Reactivate to restore access to your AI voice agent.'}
                  </p>
                  <VoxiaButton onClick={handleManageBilling} size="sm" className="mt-3">
                    {subscription.status === 'PAST_DUE' ? 'Update Payment Method' : 'Reactivate Subscription'}
                  </VoxiaButton>
                </div>
              </div>
            </VoxiaCard>
          )}

          {/* Billing History Link */}
          <VoxiaCard variant="bordered">
            <h2 className="font-medium text-secondary dark:text-white mb-4">Billing History</h2>
            <p className="text-colorText dark:text-dark-100 mb-4">
              View and download invoices from your billing portal.
            </p>
            <VoxiaButton variant="outline" onClick={handleManageBilling} disabled={portalLoading}>
              View Invoices
            </VoxiaButton>
          </VoxiaCard>
        </>
      )}
    </div>
  )
}
