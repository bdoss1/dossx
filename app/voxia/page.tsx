import Link from 'next/link'
import { Metadata } from 'next'
import { VoxiaButton } from '@/components/voxia/VoxiaButton'
import { VoxiaCard } from '@/components/voxia/VoxiaCard'
import { VOXIA_PLANS } from '@/lib/voxia/types'

export const metadata: Metadata = {
  title: 'Voxia - AI Voice Agent | DossX',
  description: 'Automate conversations, route calls intelligently, and schedule appointments with a voice experience designed for modern business.',
}

export default function VoxiaLandingPage() {
  return (
    <main className="min-h-screen bg-backgroundBody dark:bg-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-secondary dark:text-white">
            DossX
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/sign-in"
              className="text-secondary dark:text-white hover:text-primary transition-colors"
            >
              Sign In
            </Link>
            <VoxiaButton href="/voxia/onboarding" size="sm">
              Start Voxia
            </VoxiaButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            AI Voice Agent
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary dark:text-white mb-6 leading-tight">
            Meet Voxia — Your AI Voice Agent
          </h1>
          <p className="text-xl text-colorText dark:text-dark-100 mb-10 max-w-2xl mx-auto">
            Automate conversations, route calls intelligently, and schedule appointments with a voice experience designed for modern business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <VoxiaButton href="/voxia/onboarding" size="lg">
              Start Voxia
            </VoxiaButton>
            <VoxiaButton href="#features" variant="outline" size="lg">
              Learn More
            </VoxiaButton>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white dark:bg-dark-200">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
              Intelligent Voice Automation
            </h2>
            <p className="text-lg text-colorText dark:text-dark-100 max-w-2xl mx-auto">
              Transform how your business handles calls with AI-powered voice technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              }
              title="Natural Conversations"
              description="AI-powered voice interactions that feel human, understanding context and intent naturally."
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              title="Intelligent Routing"
              description="Automatically direct calls to the right team members based on caller intent and business rules."
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
              title="Appointment Scheduling"
              description="Let callers book appointments directly through the voice agent, synced with your calendar."
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
              title="Knowledge Base"
              description="Train your agent with your business information from URLs, documents, and custom Q&A pairs."
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="24/7 Availability"
              description="Never miss a call. Your AI voice agent handles inquiries around the clock."
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="Seamless Escalation"
              description="Automatically transfer to live agents when needed, with full context handoff."
            />
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-colorText dark:text-dark-100 max-w-2xl mx-auto">
              Select the plan that fits your business needs. All plans include core voice agent capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {Object.values(VOXIA_PLANS).map((plan) => (
              <VoxiaCard
                key={plan.id}
                variant={plan.highlighted ? 'elevated' : 'bordered'}
                className={plan.highlighted ? 'ring-2 ring-primary' : ''}
              >
                {plan.highlighted && (
                  <div className="text-center mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-secondary dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-colorText dark:text-dark-100 mb-6">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-colorText dark:text-dark-100">{feature}</span>
                    </li>
                  ))}
                </ul>
                <VoxiaButton
                  href="/voxia/onboarding"
                  variant={plan.highlighted ? 'primary' : 'outline'}
                  className="w-full"
                >
                  Get Started
                </VoxiaButton>
              </VoxiaCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-secondary dark:bg-dark-300">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business Communications?
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Join forward-thinking businesses using AI voice technology to deliver exceptional customer experiences.
          </p>
          <VoxiaButton href="/voxia/onboarding" size="lg">
            Start Your Free Trial
          </VoxiaButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-white dark:bg-dark-200 border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-secondary dark:text-white font-bold text-xl">DossX</div>
          <div className="text-sm text-colorText dark:text-dark-100">
            &copy; {new Date().getFullYear()} DossX. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-colorText dark:text-dark-100 hover:text-primary">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-colorText dark:text-dark-100 hover:text-primary">
              Terms
            </Link>
            <Link href="/contact" className="text-sm text-colorText dark:text-dark-100 hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <VoxiaCard variant="bordered" className="hover:shadow-lg transition-shadow duration-300">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-secondary dark:text-white mb-2">{title}</h3>
      <p className="text-colorText dark:text-dark-100">{description}</p>
    </VoxiaCard>
  )
}
