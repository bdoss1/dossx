import CTA from '@/components/shared/CTA'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'

export const metadata = {
  title: 'AI Automation, Voice Technology & SaaS Solutions | DossX',
  description: 'DossX delivers intelligent automation, AI voice technology, and scalable SaaS solutions designed to power modern business growth.',
}

const ServicesPage = () => {
  return (
    <LayoutOne>
      {/* Hero Section */}
      <PageHero
        title="Intelligent Automation &"
        italicTitle="AI-Driven Solutions"
        badgeTitle="Services"
        description="DossX delivers intelligent automation, AI voice technology, and scalable SaaS solutions designed to power modern business growth."
        scale
      />

      {/* Service Blocks */}
      <section className="pb-20 pt-10">
        <div className="container max-w-6xl">

          {/* AI Workflows & Automation */}
          <div id="ai-workflows" className="mb-20 scroll-mt-32">
            <div className="mb-8 border-l-4 border-primary pl-6">
              <h2 className="mb-2 text-3xl font-bold md:text-4xl">AI Workflows & Automation</h2>
              <p className="text-lg text-white/70">Intelligent automation systems that streamline operations, eliminate repetitive work, and connect business tools into powerful backend workflows.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h4 className="mb-3 text-xl font-semibold">Automation Capabilities</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Automated lead capture & routing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Smart operational workflows
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    AI-assisted task execution
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    System integrations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Process automation across platforms
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h4 className="mb-3 text-xl font-semibold">Why It Matters</h4>
                <p className="text-white/80">
                  Manual processes drain resources and introduce errors. Our intelligent automation systems handle the repetitive work so your team can focus on strategy and growth.
                </p>
              </div>
            </div>
          </div>

          {/* Voxia Voice Agent */}
          <div id="voxia" className="mb-20 scroll-mt-32">
            <div className="mb-8 border-l-4 border-primary pl-6">
              <h2 className="mb-2 text-3xl font-bold md:text-4xl">Voxia — AI Voice Agent</h2>
              <p className="text-lg text-white/70">AI-powered voice assistant designed to handle customer conversations, automate call responses, and support business communication at scale.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h4 className="mb-3 text-xl font-semibold">What Voxia Delivers</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Natural voice interactions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Automated call handling
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Smart routing & responses
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Customer support assistance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Scalable voice automation
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h4 className="mb-3 text-xl font-semibold">Why It Matters</h4>
                <p className="text-white/80">
                  Voxia makes every call a conversion opportunity. It reduces missed calls, automates customer interactions, and creates a polished first impression — all while scaling infinitely without hiring additional staff.
                </p>
              </div>
            </div>
          </div>

          {/* AI-Powered SaaS Solutions */}
          <div id="saas" className="mb-20 scroll-mt-32">
            <div className="mb-8 border-l-4 border-primary pl-6">
              <h2 className="mb-2 text-3xl font-bold md:text-4xl">AI-Powered SaaS Solutions</h2>
              <p className="text-lg text-white/70">Custom SaaS platforms powered by AI and automation to help businesses run smarter, faster, and more efficiently.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h4 className="mb-3 text-xl font-semibold">What We Build</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    AI-driven business platforms
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Workflow-based SaaS tools
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Operational dashboards
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Subscription-ready systems
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Custom software tailored to business needs
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h4 className="mb-3 text-xl font-semibold">Why It Matters</h4>
                <p className="text-white/80">
                  Off-the-shelf software rarely fits perfectly. We build custom SaaS solutions that reduce manual work, scale operations, and improve customer experience — tailored to your exact business needs.
                </p>
              </div>
            </div>
          </div>

          {/* Plans Section */}
          <div className="mb-20 rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
            <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">Service Plans</h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-white/70">
              Choose the engagement level that fits your business. Every plan includes our full-service approach to intelligent automation.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-white/10 bg-black/20 p-6 text-center">
                <h4 className="mb-2 text-xl font-semibold">Launch</h4>
                <p className="mb-4 text-sm text-white/70">For businesses getting started with automation.</p>
                <Link href="/contact" className="text-primary underline hover:no-underline">Request a Consultation</Link>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-6 text-center">
                <h4 className="mb-2 text-xl font-semibold">Scale</h4>
                <p className="mb-4 text-sm text-white/70">For growing businesses adding advanced automation.</p>
                <Link href="/contact" className="text-primary underline hover:no-underline">Request a Consultation</Link>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-6 text-center">
                <h4 className="mb-2 text-xl font-semibold">Optimize</h4>
                <p className="mb-4 text-sm text-white/70">For established businesses maximizing efficiency.</p>
                <Link href="/contact" className="text-primary underline hover:no-underline">Request a Consultation</Link>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-6 text-center">
                <h4 className="mb-2 text-xl font-semibold">Systems</h4>
                <p className="mb-4 text-sm text-white/70">For enterprises needing full AI-powered infrastructure.</p>
                <Link href="/contact" className="text-primary underline hover:no-underline">Request a Consultation</Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <CTA buttonText="Request a Consultation">
        Tell us about your project. Let&apos;s build intelligent systems designed to scale your business.
      </CTA>
    </LayoutOne>
  )
}

export default ServicesPage
