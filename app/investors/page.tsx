import ContactForm from '@/components/contactpage/ContactForm'
import LayoutOne from '@/components/shared/LayoutOne'
import Link from 'next/link'

export default function InvestorsPage() {
  return (
    <LayoutOne>
      {/* Hero */}
      <section className="pb-14 pt-32 md:pb-16 md:pt-36 lg:pb-[88px] lg:pt-[200px] xl:pb-[100px]">
        <div className="container">
          <div className="mx-auto mb-14 max-w-4xl text-center md:mb-[60px] lg:mb-[100px]">
            <h1 className="mb-5 text-4xl font-bold md:text-5xl lg:text-6xl">
              Invest in DossX — The AI Ops Stack for Real-World Businesses
            </h1>
            <p className="text-lg text-colorText md:text-xl">
              We’re productizing AI for the backbone of the economy: small and mid-market operators. 
              Three focused products, one unified platform—built to deliver ROI in days, not months.
            </p>
          </div>

          {/* Proof points */}
          <div className="mb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {kpi: 'Time-to-Value', val: 'Days', sub: 'Deploy & see impact fast'},
              {kpi: 'Core Products', val: '3', sub: 'Voxia · QuotaX · Synapse'},
              {kpi: 'Gross Margins', val: '>80%', sub: 'SaaS + automation'},
              {kpi: 'Market Tailwind', val: '$100B+', sub: 'AI services for SMB/MM'},
            ].map(({kpi, val, sub}) => (
              <div key={kpi} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center dark:bg-secondary">
                <div className="text-3xl font-bold">{val}</div>
                <div className="mt-1 text-sm text-white/70">{kpi}</div>
                <div className="mt-2 text-xs text-white/60">{sub}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left column: Narrative */}
            <div className="space-y-12">
              {/* Thesis */}
              <section>
                <h2 className="mb-3 text-2xl font-bold md:text-3xl">The DossX Thesis</h2>
                <p className="text-lg text-colorText">
                  AI is moving from novelty to infrastructure. DossX delivers a practical AI operating layer 
                  for revenue, service, and decision-making. Our focus: <b>deploy fast, integrate deeply, prove ROI</b>.
                </p>
              </section>

              {/* Products */}
              <section>
                <h3 className="mb-3 text-xl font-semibold md:text-2xl">Product Suite</h3>
                <ul className="space-y-4 text-colorText">
                  <li>
                    <b>Voxia — 24/7 Voice Concierge:</b> Natural voice on phone & web, powered by OpenAI + ElevenLabs. 
                    Answers questions, books appointments, checks orders, and hands off to humans in Slack/Teams.
                  </li>
                  <li>
                    <b>QuotaX — AI Sales Engine:</b> Captures & qualifies leads, runs adaptive sequences, 
                    syncs with CRMs (HubSpot, Salesforce, Pipedrive), and books meetings automatically.
                  </li>
                  <li>
                    <b>Synapse — Workflow Intelligence Hub:</b> Connects data across tools, triggers actions, 
                    and surfaces insights that cut through the noise. The “brain” that keeps everything in sync.
                  </li>
                </ul>
              </section>

              {/* Why we win */}
              <section>
                <h3 className="mb-3 text-xl font-semibold md:text-2xl">Why We Win</h3>
                <ul className="space-y-3 text-colorText">
                  <li>• <b>Speed to Value:</b> Go-live in days, with measurable outcomes in week one.</li>
                  <li>• <b>Full-Stack Outcomes:</b> Voice + Sales + Intelligence work together as one engine.</li>
                  <li>• <b>Deep Integrations:</b> Calendars, CRMs, ERPs, DBs—real data, real results.</li>
                  <li>• <b>Operational Moat:</b> Playbooks, data mappings, and agent behaviors tuned by vertical.</li>
                </ul>
              </section>

              {/* Business model */}
              <section>
                <h3 className="mb-3 text-xl font-semibold md:text-2xl">Business Model</h3>
                <ul className="space-y-3 text-colorText">
                  <li>• Subscription tiers across Voxia, QuotaX, Synapse (SMB → Mid-Market → Enterprise).</li>
                  <li>• Usage add-ons (runs, connectors, real-time sync) drive strong net dollar retention.</li>
                  <li>• One-time setup fees streamline onboarding and accelerate payback.</li>
                </ul>
              </section>

              {/* Go-to-market */}
              <section>
                <h3 className="mb-3 text-xl font-semibold md:text-2xl">Go-to-Market</h3>
                <ul className="space-y-3 text-colorText">
                  <li>• Direct sales to SMB/MM with fast pilots and proof-of-value launches.</li>
                  <li>• Channel partners & agencies bundle DossX into managed offerings.</li>
                  <li>• Vertical playbooks (e.g., home services, healthcare, legal, real estate).</li>
                </ul>
              </section>

              {/* Traction (replace placeholders as numbers arrive) */}
              <section>
                <h3 className="mb-3 text-xl font-semibold md:text-2xl">Traction & Signals</h3>
                <ul className="space-y-3 text-colorText">
                  <li>• Paying customers across multiple verticals with rapid expansion potential.</li>
                  <li>• <span className="text-white/80">[Replace]</span> Avg. deployment time: <b>&lt; 7 days</b>.</li>
                  <li>• <span className="text-white/80">[Replace]</span> Lead-to-meeting uplift with QuotaX pilots.</li>
                  <li>• <span className="text-white/80">[Replace]</span> CSAT & deflection improvements via Voxia.</li>
                </ul>
              </section>

              {/* Use of funds */}
              <section>
                <h3 className="mb-3 text-xl font-semibold md:text-2xl">Use of Funds</h3>
                <ul className="space-y-3 text-colorText">
                  <li>• Product: verticalized playbooks, analytics, enterprise controls.</li>
                  <li>• GTM: partner motions, targeted vertical acquisition, customer success.</li>
                  <li>• Infrastructure: reliability, observability, security posture.</li>
                </ul>
              </section>

              {/* The ask */}
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 dark:bg-secondary">
                <h3 className="mb-2 text-xl font-semibold md:text-2xl">The Opportunity</h3>
                <p className="text-colorText">
                  We’re assembling the right investors to scale distribution and deepen product leadership in the AI ops stack. 
                  If you believe AI should deliver <b>clear business outcomes</b> for real operators, we should talk.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/contact" className="rv-button rv-button-primary">
                    <div className="rv-button-top"><span>Talk to Investor Relations</span></div>
                    <div className="rv-button-bottom"><span>Talk to Investor Relations</span></div>
                  </Link>
                  <Link href="/agents/voice" className="rv-button rv-button-white">
                    <div className="rv-button-top"><span>See Voxia in Action</span></div>
                    <div className="rv-button-bottom"><span>See Voxia in Action</span></div>
                  </Link>
                </div>
              </section>
            </div>

            {/* Right column: IR contact form */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 dark:bg-secondary">
              <h2 className="mb-2 text-2xl font-bold md:text-3xl">Contact Investor Relations</h2>
              <p className="mb-6 text-colorText">
                Share your firm info and areas of interest. We’ll reply with our latest deck, roadmap, and 
                product demo access.
              </p>
              <ContactForm />
              <p className="mt-4 text-xs text-white/60">
                By submitting, you agree to be contacted about DossX investment materials and updates.
              </p>
            </div>
          </div>

          {/* Risk & compliance note */}
          <div className="mx-auto mt-14 max-w-4xl text-center text-xs text-white/50">
            Forward-looking statements are based on current expectations and are subject to risks and uncertainties. 
            This page is informational and not an offer to sell securities.
          </div>
        </div>
      </section>
    </LayoutOne>
  )
}