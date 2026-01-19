import CTA from '@/components/shared/CTA'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'

export const metadata = {
  title: 'Plans | DossX',
  description: 'Choose the right DossX plan for your business. From launch to enterprise — scalable digital infrastructure and AI-powered solutions.',
}

const PLANS = [
  {
    name: 'Launch',
    description: 'For businesses getting started with a strong digital foundation.',
    scope: 'Essential scope',
    highlights: [
      'Custom website design & development',
      'Proprietary CMS setup',
      'Basic hosting & security',
      'Core performance optimization',
      'Email support',
    ],
  },
  {
    name: 'Scale',
    description: 'For growing businesses adding automation and advanced features.',
    scope: 'Growth scope',
    highlights: [
      'Everything in Launch',
      'AI workflow automation',
      'Advanced CMS features',
      'Enhanced hosting & CDN',
      'Priority email & chat support',
    ],
    popular: true,
  },
  {
    name: 'Optimize',
    description: 'For established businesses maximizing performance and efficiency.',
    scope: 'Performance scope',
    highlights: [
      'Everything in Scale',
      'Advanced AI-powered features',
      'Custom integrations',
      'Performance monitoring',
      'Dedicated support channel',
    ],
  },
  {
    name: 'Systems',
    description: 'For enterprises needing full-stack digital infrastructure.',
    scope: 'Enterprise scope',
    highlights: [
      'Everything in Optimize',
      'AI-powered SaaS development',
      'Enterprise hosting & SLAs',
      'Custom security & compliance',
      'Dedicated account manager',
    ],
  },
]

const PricingPage = () => {
  return (
    <LayoutOne>
      <PageHero
        title="Service"
        italicTitle="Plans"
        badgeTitle="Plans"
        description="Choose the engagement level that fits your business. Every plan includes our full-service approach to digital infrastructure."
        scale
      />

      {/* Plans Grid */}
      <section className="container pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-6 ${
                plan.popular
                  ? 'border-primary bg-primary/5'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}

              <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
              <p className="mb-4 text-sm text-white/70">{plan.description}</p>

              <div className="mb-6 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-white/80">{plan.scope}</p>
              </div>

              <ul className="mb-6 space-y-2">
                {plan.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 text-sm text-white/80">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`block w-full rounded-lg py-3 text-center font-semibold transition ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Request a Consultation
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="container pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <h2 className="mb-8 text-center text-3xl font-bold">What Every Plan Includes</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <h4 className="mb-2 text-lg font-semibold">Performance-First Builds</h4>
              <p className="text-sm text-white/70">Core Web Vitals optimized for speed and conversion.</p>
            </div>
            <div className="text-center">
              <h4 className="mb-2 text-lg font-semibold">Proprietary CMS</h4>
              <p className="text-sm text-white/70">Flexible content management without the limitations.</p>
            </div>
            <div className="text-center">
              <h4 className="mb-2 text-lg font-semibold">Secure Hosting</h4>
              <p className="text-sm text-white/70">Enterprise-grade infrastructure with SSL and backups.</p>
            </div>
            <div className="text-center">
              <h4 className="mb-2 text-lg font-semibold">Mobile-First Design</h4>
              <p className="text-sm text-white/70">Responsive experiences across all devices.</p>
            </div>
            <div className="text-center">
              <h4 className="mb-2 text-lg font-semibold">SEO Foundations</h4>
              <p className="text-sm text-white/70">Technical SEO built into every project.</p>
            </div>
            <div className="text-center">
              <h4 className="mb-2 text-lg font-semibold">Ongoing Support</h4>
              <p className="text-sm text-white/70">Maintenance and updates included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="container pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <h2 className="mb-6 text-2xl font-bold">Available Add-Ons</h2>
          <p className="mb-8 text-white/70">Enhance your plan with additional capabilities as your needs grow.</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white/5 p-4">
              <h4 className="font-semibold">Extended Automation</h4>
              <p className="text-sm text-white/70">Additional AI workflow capacity</p>
            </div>
            <div className="rounded-lg bg-white/5 p-4">
              <h4 className="font-semibold">Custom Integrations</h4>
              <p className="text-sm text-white/70">Connect additional tools and platforms</p>
            </div>
            <div className="rounded-lg bg-white/5 p-4">
              <h4 className="font-semibold">Advanced Analytics</h4>
              <p className="text-sm text-white/70">Deeper insights and reporting</p>
            </div>
            <div className="rounded-lg bg-white/5 p-4">
              <h4 className="font-semibold">Priority Support</h4>
              <p className="text-sm text-white/70">Faster response times and SLAs</p>
            </div>
            <div className="rounded-lg bg-white/5 p-4">
              <h4 className="font-semibold">White-Label Options</h4>
              <p className="text-sm text-white/70">Remove DossX branding for partners</p>
            </div>
            <div className="rounded-lg bg-white/5 p-4">
              <h4 className="font-semibold">Multi-Site Management</h4>
              <p className="text-sm text-white/70">Manage multiple properties from one dashboard</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA buttonText="Request a Consultation">
        Not sure which plan fits best? Tell us about your project.
      </CTA>
    </LayoutOne>
  )
}

export default PricingPage
