import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'
import SubscribeButton from '@/components/pricing/SubscribeButton' // unified checkout button

export const metadata = { title: 'Pricing' }

const TIERS = [
  { key: 'starter', name: 'Starter', blurb: 'For small teams getting started', badge: 'Most Accessible' },
  { key: 'growth',  name: 'Growth',  blurb: 'For scaling teams and integrations', badge: 'Most Popular' },
  { key: 'pro',     name: 'Pro',     blurb: 'For advanced needs & compliance', badge: 'Best Value' },
] as const

// One-time setup fees per product
const SETUP_FEES: Record<'voice' | 'sales', number> = {
  voice: 499, // branding, KB import, calendar + DB wiring
  sales: 399, // CRM connection, pipeline mapping, starter flows
}

// ----------------- PRODUCTS -----------------
const PRODUCTS = [
  {
    key: 'voice',
    title: 'Voxia (VoiceAgent)',
    desc: '24/7 AI voice concierge with knowledge base + calendar.',
    price: { starter: '$229/mo', growth: '$499/mo', pro: '$999/mo' },
    runs:  { starter: '500 runs', growth: '2,500 runs', pro: '10,000 runs' },
    features: [
      ['Starter', ['Website/phone voice widget', 'FAQ + DB + Calendar basics', 'Transcripts & basic analytics']],
      ['Growth',  ['Bookings + Slack/Teams handoff', 'Custom branding', 'Email summaries & alerts']],
      ['Pro',     ['Full integrations & compliance', 'Advanced analytics dashboard', 'Priority support SLA']],
    ],
  },
  {
    key: 'sales',
    title: 'QuotaX (SalesAgent)',
    desc: 'AI funnel automation with CRM sync and follow-ups.',
    price: { starter: '$229/mo', growth: '$449/mo', pro: '$899/mo' },
    runs:  { starter: '1,000 leads', growth: '5,000 leads', pro: 'Unlimited workflows*' },
    features: [
      ['Starter', ['Lead capture & enrichment', 'Basic CRM integration', 'Email follow-ups']],
      ['Growth',  ['Multi-channel outreach (email/SMS/DM)', 'Advanced sequences & playbooks', 'Pipeline analytics']],
      ['Pro',     ['Enterprise CRM integrations', 'Advanced reporting & governance', 'Priority support SLA']],
    ],
  },
  // -------- Synapse set to Contact for pricing ----------
  {
    key: 'synapse',
    title: 'Synapse (Workflow Intelligence)',
    desc: 'Unified insights, cross-app actions, and decisioning across your stack.',
    // Using "contact" flags for all tiers
    price: { starter: 'Contact us', growth: 'Contact us', pro: 'Contact us' },
    runs:  { starter: 'Custom scope', growth: 'Custom scope', pro: 'Custom scope' },
    features: [
      ['Starter', ['Connect core systems (CRM/Calendar/DB)', 'KPI snapshots & alerts', 'Foundational playbooks']],
      ['Growth',  ['Multi-source orchestration', 'Team dashboards & governance', 'Advanced connectors']],
      ['Pro',     ['Real-time event bus', 'Fine-grained access & audit', 'Custom data models & SLAs']],
    ],
    contactOnly: true as const,
  },
] as const

// ---- UI bits ----
function TierCard({
  product,
  tier,
}: {
  product: (typeof PRODUCTS)[number],
  tier: (typeof TIERS)[number]
}) {
  const price = product.price[tier.key as 'starter' | 'growth' | 'pro']
  const usage = product.runs[tier.key as 'starter' | 'growth' | 'pro']
  const feat  = product.features.find(([label]) => label.toLowerCase() === tier.name.toLowerCase())?.[1] as string[] | undefined

  const isContactOnly = (product as any).contactOnly === true
  const setup = (product.key === 'voice' || product.key === 'sales') ? SETUP_FEES[product.key] : undefined

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur dark:bg-secondary">
      <div className="mb-2 flex items-center justify-between">
        <h4 className="text-lg font-semibold">{tier.name}</h4>
        <span className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-white/70">{tier.badge}</span>
      </div>

      {/* Price / Contact */}
      <div className="mb-1 text-3xl font-bold">
        {isContactOnly ? 'Contact us' : price}
      </div>
      <div className="mb-4 text-sm text-white/70">{usage}</div>

      {/* Features */}
      <ul className="mb-4 space-y-2 text-sm text-white/80">
        {(feat || []).map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/80" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* Setup fee note (only for products that use SubscribeButton) */}
      {!isContactOnly && setup && (
        <p className="mb-4 text-xs text-white/70">
          One-time setup fee: <span className="font-semibold">${setup}</span> (billed with first purchase)
        </p>
      )}

      {/* Action */}
      {isContactOnly ? (
        <Link
          href="/contact"
          className="rv-button rv-button-secondary block w-full text-center"
        >
          <div className="rv-button-top"><span>Contact Sales — {product.title}</span></div>
          <div className="rv-button-bottom"><span className="text-nowrap">Contact Sales — {product.title}</span></div>
        </Link>
      ) : (
        <SubscribeButton
          product={product.key as 'voice' | 'sales'}
          tier={tier.key as 'starter' | 'growth' | 'pro'}
          label={`Subscribe – ${product.title}`}
          className="rv-button rv-button-primary block w-full text-center"
        />
      )}

      <p className="mt-3 text-xs text-white/60">Cancel anytime. *Fair use limits may apply.</p>
    </div>
  )
}

const PricingPage = () => {
  return (
    <LayoutOne>
      <PageHero
        title="Pricing"
        italicTitle="Plans"
        badgeTitle="Pricing"
        description="One subscription, real outcomes. Launch DossX products fast, scale when growth demands."
        scale
      />

      {/* SaaS Product Sections */}
      <section className="container space-y-14 pb-10">
        {PRODUCTS.map((p) => (
          <div key={p.key} className="rounded-3xl border border-white/10 bg-black/20 p-6 md:p-10">
            <div className="mb-6 md:mb-8">
              <h3 id={`${p.key}-pricing`} className="text-2xl md:text-3xl font-bold">{p.title}</h3>
              <p className="mt-1 text-white/70">{p.desc}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {TIERS.map((t) => (
                <TierCard key={t.key} product={p} tier={t} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Add-ons Strip */}
      <section className="container mb-16 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
        <h4 className="text-xl font-semibold">Add-Ons & Upsells</h4>
        <ul className="mt-3 grid gap-2 text-sm text-white/80 md:grid-cols-2 lg:grid-cols-3">
          <li>Extra Usage: +$25 / 500 runs · +$200 / 5,000 runs</li>
          <li>Custom Voice Pack: $149 one-time or $49/mo</li>
          <li>Phone Routing (Twilio/Zoom/Teams): $99/mo</li>
          <li>Additional CRM/Data Connectors: $59–$79/mo</li>
          <li>Real-Time Sync Upgrade: $199/mo</li>
          <li>Priority SLA: $299/mo · Dedicated Success: $499/mo · White-Label: $199/mo</li>
        </ul>
      </section>

      {/* CTA (short contact blurb) */}
      <section className="container mb-20 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Not sure which plan fits best?
        </h3>
        <p className="mb-6 text-white/70 max-w-2xl mx-auto">
          Tell us about your stack and goals — we’ll recommend the right starting tier and stand up a quick pilot.
        </p>
        <Link href="/contact" className="rv-button rv-button-primary inline-block">
          <div className="rv-button-top"><span>Contact Us</span></div>
          <div className="rv-button-bottom"><span className="text-nowrap">Contact Us</span></div>
        </Link>
      </section>
    </LayoutOne>
  )
}

export default PricingPage