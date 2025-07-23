// app/services/marketing-social-suite/page.tsx
'use client'

import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'

export default function MarketingSocialSuitePage() {
  return (
    <LayoutOne>
      <PageHero
        title="Marketing &"
        italicTitle="Social"
        badgeTitle="Suite"
        description="Automate your social and marketing workflows with prebuilt + custom flows—no code required."
        scale
      />

      <section className="pb-14 pt-14 container max-w-3xl">
        <img src="/images/services/marketing_social_header.png" alt="Marketing & Social Suite" className="mb-10 w-full rounded-md" />

        <h2 className="mb-6 text-2xl font-bold">Service Overview</h2>
        <p className="mb-8 text-base leading-6">
          Launch and manage targeted campaigns across email, social, and ads with our turnkey marketing automation suite.
          Choose from prebuilt flows or have us craft custom sequences that nurture leads, boost engagement, and drive conversions.
        </p>

        <h3 className="mb-4 text-xl font-semibold">What’s Included</h3>
        <ul className="mb-10 list-disc pl-6 space-y-2 text-base">
          <li>Prebuilt social posting & email nurture flows</li>
          <li>Custom campaign design & setup</li>
          <li>Multi-channel analytics dashboard</li>
          <li>Bi-weekly performance review call</li>
        </ul>

        <h3 className="mb-6 text-xl font-semibold">Pricing Plans</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Starter */}
          <div className="rounded-lg border p-6 text-center">
            <h4 className="mb-4 text-2xl font-bold">Starter</h4>
            <p className="mb-6 text-lg font-semibold">$249<span className="text-base font-normal">/mo</span></p>
            <ul className="mb-6 space-y-1 text-left">
              <li>• 1 000 runs/mo</li>
              <li>• 1 prebuilt flow</li>
              <li>• Email/chat support</li>
            </ul>
            <Link href="https://buy.stripe.com/placeholder-marketing-starter">
              <button className="rv-button rv-button-primary w-full">
                <div className="rv-button-top">Buy Starter</div>
                <div className="rv-button-bottom">Buy Starter</div>
              </button>
            </Link>
          </div>

          {/* Professional */}
          <div className="rounded-lg border p-6 text-center">
            <h4 className="mb-4 text-2xl font-bold">Professional</h4>
            <p className="mb-6 text-lg font-semibold">$749<span className="text-base font-normal">/mo</span></p>
            <ul className="mb-6 space-y-1 text-left">
              <li>• 5 000 runs/mo</li>
              <li>• 4 flows (3 prebuilt + 1 custom)</li>
              <li>• Monthly strategy call</li>
            </ul>
            <Link href="https://buy.stripe.com/placeholder-marketing-pro">
              <button className="rv-button rv-button-secondary w-full">
                <div className="rv-button-top">Buy Professional</div>
                <div className="rv-button-bottom">Buy Professional</div>
              </button>
            </Link>
          </div>

          {/* Enterprise */}
          <div className="rounded-lg border p-6 text-center">
            <h4 className="mb-4 text-2xl font-bold">Enterprise</h4>
            <p className="mb-6 text-lg font-semibold">$1,999<span className="text-base font-normal">/mo</span></p>
            <ul className="mb-6 space-y-1 text-left">
              <li>• Unlimited runs & flows</li>
              <li>• Omni-channel deployment</li>
              <li>• Dedicated SLA & concierge</li>
            </ul>
            <Link href="https://buy.stripe.com/placeholder-marketing-enterprise">
              <button className="rv-button rv-button-primary w-full">
                <div className="rv-button-top">Buy Enterprise</div>
                <div className="rv-button-bottom">Buy Enterprise</div>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </LayoutOne>
  )
}