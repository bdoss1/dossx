import Link from "next/link";
import LayoutOne from "@/components/shared/LayoutOne";
import PageHero from "@/components/shared/PageHero";
import RevealWrapper from "@/components/animation/RevealWrapper";

export const metadata = {
  title: "Synapse — AI Intelligence Hub for Real-Time Decisions | DossX",
  description:
    "Synapse centralizes your signals across CRM, billing, support, and marketing—delivering daily briefings, anomaly alerts, forecasts, and recommended actions.",
};

const HIGHLIGHTS = [
  { title: "Unified Signals", desc: "Bring CRM, billing, support, and analytics into one AI layer—no more tab-hopping." },
  { title: "Daily Briefings", desc: "Action-packed summaries: risks, trends, stuck deals, revenue signals—delivered where you work." },
  { title: "Smart Alerts", desc: "Catch anomalies early—billing spikes, churn signals, SLA risks—inside Slack or Teams." },
  { title: "Forecast & What-Ifs", desc: "Transparent forecasts and scenario planning you can actually explain." },
  { title: "Source-Linked Insights", desc: "Every insight links back to the source system—to verify in seconds." },
  { title: "Privacy & Control", desc: "Role-based access, audit logs, and redaction for sensitive fields." },
];

const USE_CASES = [
  {
    title: "Revenue Brief",
    desc: "Daily rollup: MRR change, pipeline risks, churn watchlist, and paid conversion trends—linked to deals and invoices.",
  },
  {
    title: "Support Heatmap",
    desc: "Ticket spikes by product/region, CSAT dips, and top drivers—plus suggested fixes and owner routing.",
  },
  {
    title: "Ops & SLA Monitor",
    desc: "Proactive alerts when SLAs are at risk, tasks stalled, or data freshness falls below thresholds.",
  },
  {
    title: "Exec Snapshot",
    desc: "One-page narrative for leadership—what changed, why it matters, and the next best action.",
  },
];

const FAQ = [
  {
    q: "How is Synapse different from a BI dashboard?",
    a: "Dashboards show data—Synapse reads it, explains what changed, and recommends the next action. It’s a brief, not a wall of charts.",
  },
  {
    q: "What sources can we connect first?",
    a: "Start with your CRM and billing. Add support tools, data warehouses, or raw databases as you go.",
  },
  {
    q: "Is our data secure?",
    a: "Yes—SOC-2–aligned controls, encryption in transit/at rest, role-based access, and auditable query history.",
  },
  {
    q: "How long to go live?",
    a: "Most teams connect sources and see their first briefings within 3–5 business days. We handle setup and validation.",
  },
];

export default function SynapsePage() {
  return (
    <LayoutOne>
      {/* Hero */}
      <PageHero
        title="Synapse — From Chaos to Clarity"
        italicTitle="Daily Decisions"
        badgeTitle="AI Intelligence Hub"
        description="Synapse ingests your scattered data, surfaces what matters, and recommends the next best action—so leaders decide in minutes, not meetings."
        scale
      />

      {/* Intro CTA */}
      <section className="container -mt-8 mb-12">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 dark:bg-secondary">
          <div className="grid items-center gap-6 md:grid-cols-[1.25fr,1fr]">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                One brain. All your signals. Action you can trust.
              </h3>
              <p className="text-white/70">
                Synapse builds an intelligence layer across sales, finance, operations, and support—sending briefings,
                alerts, and forecasts that link straight to source systems.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="rv-button rv-button-primary">
                  <div className="rv-button-top"><span>Talk to DossX</span></div>
                  <div className="rv-button-bottom"><span className="text-nowrap">Talk to DossX</span></div>
                </Link>
                <Link href="/pricing#data-pricing" className="rv-button rv-button-secondary">
                  <div className="rv-button-top"><span>See Plans</span></div>
                  <div className="rv-button-bottom"><span className="text-nowrap">See Plans</span></div>
                </Link>
              </div>

              <p className="mt-3 text-xs text-white/60">Month-to-month. Setup handled. First insights in under a week.</p>
            </div>

            {/* Visual placeholder */}
            <div className="relative h-[260px] md:h-[300px] flex items-center justify-center">
              <div className="rounded-full bg-gradient-to-tr from-primary/40 to-white/10 w-60 h-60 flex items-center justify-center text-white/70">
                Synapse Intelligence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container mb-16">
        <RevealWrapper>
          <h2 className="mb-2 text-center">Insights that explain themselves</h2>
          <p className="mx-auto max-w-2xl text-center text-white/75">
            Synapse turns noisy systems into crisp decisions—briefings you’ll actually read, with links you can actually trust.
          </p>
        </RevealWrapper>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((h) => (
            <div key={h.title} className="rounded-2xl border border-white/10 bg-black/20 p-6 dark:bg-secondary">
              <h4 className="mb-2">{h.title}</h4>
              <p className="text-white/70">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="container mb-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 dark:bg-secondary">
          <h3 className="text-xl font-semibold mb-3">Proven, practical outcomes</h3>
          <div className="grid gap-5 md:grid-cols-2">
            {USE_CASES.map((u) => (
              <div key={u.title} className="rounded-xl border border-white/10 bg-black/20 p-5 dark:bg-secondary">
                <h5 className="mb-1">{u.title}</h5>
                <p className="text-white/70 text-sm">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mb-16">
        <h3 className="mb-6 text-2xl md:text-3xl font-bold">Synapse FAQ</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {FAQ.map((i) => (
            <div key={i.q} className="rounded-2xl border border-white/10 bg-black/20 p-5 dark:bg-secondary">
              <h5 className="mb-1">{i.q}</h5>
              <p className="text-white/70 text-sm">{i.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mb-20 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Clarity on demand. Decisions on time.</h3>
        <p className="mb-6 text-white/70 max-w-2xl mx-auto">
          Connect a few sources, pick your KPIs, and let Synapse brief you daily in Slack, email, or your dashboard.
        </p>
        <Link href="/contact" className="rv-button rv-button-primary inline-block">
          <div className="rv-button-top"><span>Contact Us</span></div>
          <div className="rv-button-bottom"><span className="text-nowrap">Contact Us</span></div>
        </Link>
      </section>
    </LayoutOne>
  );
}