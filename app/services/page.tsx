import CTA from '@/components/shared/CTA'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'

export const metadata = {
  title: 'Digital Infrastructure & AI-Driven Solutions | DossX',
  description: 'DossX delivers end-to-end systems combining design, development, proprietary CMS, automation, managed hosting, and AI-powered SaaS.',
}

const ServicesPage = () => {
  return (
    <LayoutOne>
      {/* Hero Section */}
      <PageHero
        title="Digital Infrastructure &"
        italicTitle="AI-Driven Solutions"
        badgeTitle="Services"
        description="DossX delivers end-to-end systems combining design, development, proprietary CMS, automation, managed hosting, and AI-powered SaaS."
        scale
      />

      {/* Service Blocks */}
      <section className="pb-20 pt-10">
        <div className="container max-w-6xl">

          {/* Web Design & Development */}
          <div id="web" className="mb-20 scroll-mt-32">
            <div className="mb-8 border-l-4 border-primary pl-6">
              <h2 className="mb-2 text-3xl font-bold md:text-4xl">Web Design & Development</h2>
              <p className="text-lg text-white/70">High-performance digital experiences designed to engage users and convert traffic into revenue.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h4 className="mb-3 text-xl font-semibold">What We Deliver</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Custom UI/UX design
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Mobile-first development
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    SEO-optimized structure
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Performance-focused builds
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Conversion-driven layouts
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h4 className="mb-3 text-xl font-semibold">Why It Matters</h4>
                <p className="text-white/80">
                  Your website is more than a digital brochure — it&apos;s your 24/7 sales engine. We build sites that load fast, rank high, and convert visitors into customers with precision-engineered experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Proprietary CMS Platform */}
          <div id="cms" className="mb-20 scroll-mt-32">
            <div className="mb-8 border-l-4 border-primary pl-6">
              <h2 className="mb-2 text-3xl font-bold md:text-4xl">Proprietary CMS Platform</h2>
              <p className="text-lg text-white/70">A flexible publishing engine created by DossX to give businesses full control without the limits of traditional builders.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h4 className="mb-3 text-xl font-semibold">Platform Capabilities</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Modular content structure
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Easy content management
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Scalable architecture
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Multi-site capabilities
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Fast, secure performance
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h4 className="mb-3 text-xl font-semibold">Why It Matters</h4>
                <p className="text-white/80">
                  Stop fighting your CMS. Our proprietary platform gives you the flexibility to manage content your way — without the bloat, plugin conflicts, or security vulnerabilities of traditional systems.
                </p>
              </div>
            </div>
          </div>

          {/* AI Workflows & Automation */}
          <div id="ai-workflows" className="mb-20 scroll-mt-32">
            <div className="mb-8 border-l-4 border-primary pl-6">
              <h2 className="mb-2 text-3xl font-bold md:text-4xl">AI Workflows & Automation</h2>
              <p className="text-lg text-white/70">We build intelligent workflows that remove repetitive work and keep systems moving automatically.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h4 className="mb-3 text-xl font-semibold">Automation Capabilities</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Automated lead routing + notifications
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    AI-assisted internal workflows
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Marketing operations automation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Reporting + data handling pipelines
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Backend orchestration across tools
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h4 className="mb-3 text-xl font-semibold">Why It Matters</h4>
                <p className="text-white/80">
                  Manual processes drain resources and introduce errors. Our intelligent automation pipelines handle the repetitive work so your team can focus on strategy and growth.
                </p>
              </div>
            </div>
          </div>

          {/* AI-Powered SaaS Solutions */}
          <div id="saas" className="mb-20 scroll-mt-32">
            <div className="mb-8 border-l-4 border-primary pl-6">
              <h2 className="mb-2 text-3xl font-bold md:text-4xl">AI-Powered SaaS Solutions</h2>
              <p className="text-lg text-white/70">Custom software products designed to automate services, centralize operations, and scale business performance.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h4 className="mb-3 text-xl font-semibold">What We Build</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Workflow-driven platforms
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    AI-assisted tools
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Operational dashboards
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Subscription-ready software
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Custom internal business systems
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

          {/* Managed Hosting & Support */}
          <div id="hosting" className="mb-20 scroll-mt-32">
            <div className="mb-8 border-l-4 border-primary pl-6">
              <h2 className="mb-2 text-3xl font-bold md:text-4xl">Managed Hosting & Support</h2>
              <p className="text-lg text-white/70">Secure, high-performance environments ensuring your platform stays fast, protected, and optimized.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h4 className="mb-3 text-xl font-semibold">What&apos;s Included</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Uptime monitoring
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Performance optimization
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Security management
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Maintenance & updates
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    Ongoing support
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h4 className="mb-3 text-xl font-semibold">Why It Matters</h4>
                <p className="text-white/80">
                  Your digital platform is only as good as its infrastructure. We manage everything from server optimization to security patches, so you can focus on running your business.
                </p>
              </div>
            </div>
          </div>

          {/* Plans Section */}
          <div className="mb-20 rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
            <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">Service Plans</h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-white/70">
              Choose the engagement level that fits your business. Every plan includes our full-service approach to digital infrastructure.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-white/10 bg-black/20 p-6 text-center">
                <h4 className="mb-2 text-xl font-semibold">Launch</h4>
                <p className="mb-4 text-sm text-white/70">For businesses getting started with a strong digital foundation.</p>
                <Link href="/contact" className="text-primary underline hover:no-underline">Request a Consultation</Link>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-6 text-center">
                <h4 className="mb-2 text-xl font-semibold">Scale</h4>
                <p className="mb-4 text-sm text-white/70">For growing businesses adding automation and advanced features.</p>
                <Link href="/contact" className="text-primary underline hover:no-underline">Request a Consultation</Link>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-6 text-center">
                <h4 className="mb-2 text-xl font-semibold">Optimize</h4>
                <p className="mb-4 text-sm text-white/70">For established businesses maximizing performance and efficiency.</p>
                <Link href="/contact" className="text-primary underline hover:no-underline">Request a Consultation</Link>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-6 text-center">
                <h4 className="mb-2 text-xl font-semibold">Systems</h4>
                <p className="mb-4 text-sm text-white/70">For enterprises needing full-stack digital infrastructure.</p>
                <Link href="/contact" className="text-primary underline hover:no-underline">Request a Consultation</Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <CTA buttonText="Request a Consultation">
        Tell us about your project. Let&apos;s design a digital system built to scale your business.
      </CTA>
    </LayoutOne>
  )
}

export default ServicesPage
