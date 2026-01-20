'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { VoxiaButton } from '@/components/voxia/VoxiaButton'
import { VoxiaCard } from '@/components/voxia/VoxiaCard'
import { VOXIA_PLANS, VoxiaPlanId } from '@/lib/voxia/types'

export default function PlanSelectionPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const canceled = searchParams.get('canceled')

  const [selectedPlan, setSelectedPlan] = useState<VoxiaPlanId | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleContinue = async () => {
    if (!selectedPlan) return

    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: selectedPlan }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session')
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-backgroundBody dark:bg-dark py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="text-2xl font-bold text-secondary dark:text-white mb-8 inline-block">
            DossX
          </Link>
          <div className="flex items-center justify-center gap-2 text-sm text-colorText dark:text-dark-100 mb-4">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-black text-xs font-bold">1</span>
            <span className="font-medium text-secondary dark:text-white">Select Plan</span>
            <span className="w-8 h-px bg-gray-300 dark:bg-gray-600" />
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 text-xs">2</span>
            <span>Payment</span>
            <span className="w-8 h-px bg-gray-300 dark:bg-gray-600" />
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 text-xs">3</span>
            <span>Setup</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
            Choose Your Voxia Plan
          </h1>
          <p className="text-lg text-colorText dark:text-dark-100 max-w-2xl mx-auto">
            Select the plan that best fits your business needs. You can upgrade or downgrade at any time.
          </p>
        </div>

        {/* Canceled message */}
        {canceled && (
          <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg text-center">
            <p className="text-yellow-800 dark:text-yellow-200">
              Your payment was canceled. Please select a plan to continue.
            </p>
          </div>
        )}

        {/* Error message */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-center">
            <p className="text-red-800 dark:text-red-200">{error}</p>
          </div>
        )}

        {/* Plan cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {Object.values(VOXIA_PLANS).map((plan) => (
            <VoxiaCard
              key={plan.id}
              variant={selectedPlan === plan.id ? 'elevated' : 'bordered'}
              className={`cursor-pointer transition-all duration-200 ${
                selectedPlan === plan.id
                  ? 'ring-2 ring-primary'
                  : 'hover:shadow-lg'
              } ${plan.highlighted && !selectedPlan ? 'ring-2 ring-primary/50' : ''}`}
              onClick={() => setSelectedPlan(plan.id as VoxiaPlanId)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  {plan.highlighted && (
                    <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-2">
                      Recommended
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-secondary dark:text-white">
                    {plan.name}
                  </h3>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedPlan === plan.id
                    ? 'border-primary bg-primary'
                    : 'border-gray-300 dark:border-gray-600'
                }`}>
                  {selectedPlan === plan.id && (
                    <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              <p className="text-sm text-colorText dark:text-dark-100 mb-6">
                {plan.description}
              </p>
              <ul className="space-y-2">
                {plan.features.slice(0, 5).map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-colorText dark:text-dark-100">{feature}</span>
                  </li>
                ))}
                {plan.features.length > 5 && (
                  <li className="text-sm text-primary">+{plan.features.length - 5} more</li>
                )}
              </ul>
            </VoxiaCard>
          ))}
        </div>

        {/* Continue button */}
        <div className="text-center">
          <VoxiaButton
            onClick={handleContinue}
            disabled={!selectedPlan}
            loading={loading}
            size="lg"
          >
            Continue to Payment
          </VoxiaButton>
          <p className="text-sm text-colorText dark:text-dark-100 mt-4">
            Secure payment powered by Stripe
          </p>
        </div>
      </div>
    </main>
  )
}
