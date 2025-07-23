// app/services/ecommerce-optimization-pack/page.tsx
'use client'

import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'

export default function EcommerceOptimizationPackPage() {
  return (
    <LayoutOne>
      <PageHero
        title="E-commerce"
        italicTitle="Optimization"
        badgeTitle="Pack"
        description="Boost sales with automated inventory alerts, abandoned-cart recovery, and dynamic pricing flows."
        scale
      />

      <section className="pb-14 pt-14 container max-w-3xl">
        <img src="/images/services/ecommerce_header.png" alt="E-commerce Optimization Pack" className="mb-10 w-full rounded-md" />

        <h2 className="mb-6 text-2xl font-bold">Service Overview</h2>
        <p className="mb-8 text-base leading-6">
          Automate your storefront with real-time stock alerts, personalized abandoned-cart campaigns, and AI-driven
          dynamic pricing—all seamlessly integrated into Shopify, Magento, or custom platforms.
        </p>

        <h3 className="mb-4 text-xl font-semibold">What’s Included</h3>
        <ul className="mb-10 list-disc pl-6 space-y-2 text-base">
          <li>Inventory low-stock notifications</li>
          <li>Abandoned-cart email & SMS recovery</li>
          <li>Automated promo-code distribution</li>
          <li>Revenue & CLV analytics</li>
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
            <Link href="https://buy.stripe.com/placeholder-ecomm-starter">
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
            <Link href="https://buy.stripe.com/placeholder-ecomm-pro">
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
            <Link href="https://buy.stripe.com/placeholder-ecomm-enterprise">
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