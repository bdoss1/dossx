// app/support/page.tsx
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'

export const metadata = {
  title: 'Support — DossX Help Center',
  description:
    'Get help with DossX solutions, browse FAQs, and connect with our team. Voxia, QuotaX, and Synapse support in one place.',
}

export default function SupportPage() {
  return (
    <LayoutOne>
      {/* Hero */}
      <PageHero
        badgeTitle="Support"
        title="We’re Here to Help"
        italicTitle="Anytime You Need Us"
        description="Whether you’re launching Voxia, scaling QuotaX, or integrating Synapse, our team’s got you — from setup to success."
        spacing="pt-32 md:pt-44 lg:pt-[200px] pb-10 md:pb-16 lg:pb-[88px] xl:pb-[100px]"
      />

      {/* Core Support Cards */}
      <section className="py-16 md:py-20">
        <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Knowledge Base */}
          <div
            className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-transparent"
            style={{ backgroundColor: 'rgb(18 216 204 / 1)' }}
          >
            <h3 className="mb-3 text-2xl font-bold text-white">Knowledge Base</h3>
            <p className="mb-6 text-base text-white/90">
              Guides and best practices for <strong>Voxia</strong>, <strong>QuotaX</strong>, and <strong>Synapse</strong>.
              Learn setup, integrations, and optimization tips in minutes.
            </p>
            <Link
              href="/faq"
              className="inline-block rounded-lg px-6 py-3 bg-black text-white font-semibold transition hover:opacity-80"
            >
              Explore FAQs
            </Link>
          </div>

          {/* Contact Support */}
          <div
            className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-transparent"
            style={{ backgroundColor: 'rgb(18 216 204 / 1)' }}
          >
            <h3 className="mb-3 text-2xl font-bold text-white">Contact Support</h3>
            <p className="mb-6 text-base text-white/90">
              Need help with deployment, CRM wiring, or voice runtime settings? Our specialists are available to help 24/7.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg px-6 py-3 bg-black text-white font-semibold transition hover:opacity-80"
            >
              Contact Us
            </Link>
          </div>

          {/* System Status */}
          <div
            className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-transparent"
            style={{ backgroundColor: 'rgb(18 216 204 / 1)' }}
          >
            <h3 className="mb-3 text-2xl font-bold text-white">System Status</h3>
            <p className="mb-6 text-base text-white/90">
              Live uptime and incident history for DossX services, including voice, CRM sync, and connectors.
            </p>
            <a
              href="/status"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg px-6 py-3 bg-black text-white font-semibold transition hover:opacity-80"
            >
              View Status
            </a>
          </div>
        </div>
      </section>

      {/* More Ways to Get Support */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl md:text-4xl font-bold text-gray-900">More Ways to Get Support</h2>
            <p className="text-lg text-gray-700">
              Prefer a call, docs, or partner channel? Choose what fits your workflow and we’ll meet you there.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Book a Call */}
            <div
              className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-transparent"
              style={{ backgroundColor: 'rgb(18 216 204 / 1)' }}
            >
              <h4 className="text-xl font-semibold mb-2 text-white">Talk to a Specialist</h4>
              <p className="text-white/90 mb-4">
                Get hands-on help configuring voice agents, CRM integration, or data sync.
              </p>
              <Link
                href="/contact"
                className="inline-block rounded-lg px-6 py-3 bg-black text-white font-semibold transition hover:opacity-80"
              >
                Book a Call
              </Link>
            </div>

            {/* Documentation */}
            <div
              className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-transparent"
              style={{ backgroundColor: 'rgb(18 216 204 / 1)' }}
            >
              <h4 className="text-xl font-semibold mb-2 text-white">Docs & Guides</h4>
              <p className="text-white/90 mb-4">
                Quick starts and how-tos for Voxia voice runtime (ElevenLabs + OpenAI), QuotaX pipelines, and Synapse connectors.
              </p>
              <a
                href="/docs"
                className="inline-block rounded-lg px-6 py-3 bg-black text-white font-semibold transition hover:opacity-80"
              >
                View Docs
              </a>
            </div>

            {/* Partner Portal */}
            <div
              className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-transparent"
              style={{ backgroundColor: 'rgb(18 216 204 / 1)' }}
            >
              <h4 className="text-xl font-semibold mb-2 text-white">Partner Support</h4>
              <p className="text-white/90 mb-4">
                Access co-marketing kits, enablement, and priority support for certified partners.
              </p>
              <Link
                href="/partners"
                className="inline-block rounded-lg px-6 py-3 bg-black text-white font-semibold transition hover:opacity-80"
              >
                Partner Portal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mb-20 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">Still stuck or just want a human?</h3>
        <p className="mb-6 text-gray-700 max-w-2xl mx-auto">
          We can jump on a quick call, review your setup, and get you live — usually the same day.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-lg px-8 py-4 text-lg font-semibold text-white transition hover:opacity-80"
          style={{ backgroundColor: 'black' }}
        >
          Get Help Now
        </Link>
      </section>
    </LayoutOne>
  )
}