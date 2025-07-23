// app/services/sales-crm-accelerator/page.tsx
'use client'

import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'

export default function SalesCrmAcceleratorPage() {
  return (
    <LayoutOne>
      <PageHero
        title="Sales &"
        italicTitle="CRM"
        badgeTitle="Accelerator"
        description="Streamline lead-to-close with automated CRM workflows and timely sales alerts."
        scale
      />

      <section className="pb-14 pt-14 container max-w-3xl">
        <img src="/images/services/sales_crm_header.png" alt="Sales & CRM Accelerator" className="mb-10 w-full rounded-md" />

        <h2 className="mb-6 text-2xl font-bold">Service Overview</h2>
        <p className="mb-8 text-base leading-6">
          Capture, qualify, and nurture every lead automatically. Our Sales & CRM Accelerator plugs into your stack,
          enriching contacts, sending timely follow-ups, and syncing data back to Salesforce, HubSpot, or your CRM of choice.
        </p>

        <h3 className="mb-4 text-xl font-semibold">What’s Included</h3>
        <ul className="mb-10 list-disc pl-6 space-y-2 text-base">
          <li>Local lead scraping & enrichment</li>
          <li>Automated missed-call text-backs & reminders</li>
          <li>Dynamic CRM sync (Salesforce, HubSpot)</li>
          <li>Sales performance dashboard</li>
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
            <Link href="https://buy.stripe.com/placeholder-sales-starter">
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
            <Link href="https://buy.stripe.com/placeholder-sales-pro">
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
            <Link href="https://buy.stripe.com/placeholder-sales-enterprise">
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