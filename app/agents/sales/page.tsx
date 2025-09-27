import Link from "next/link";
import LayoutOne from "@/components/shared/LayoutOne";
import PageHero from "@/components/shared/PageHero";
import RevealWrapper from "@/components/animation/RevealWrapper";

export const metadata = {
  title: "QuotaX — Your AI Sales Engine That Never Sleeps | DossX",
  description:
    "QuotaX captures, qualifies, and nurtures leads across email/SMS, books meetings on real calendars, and syncs everything to your CRM. Faster response, cleaner pipeline, more revenue.",
};

// ----- Content data -----
const FEATURES = [
  {
    title: "Instant Lead Response",
    desc: "Auto-acknowledge new leads in seconds, ask qualifying questions, and route to the right owner—before competitors even open their inbox.",
  },
  {
    title: "Adaptive Sequences",
    desc: "Email and SMS that branch based on replies, intent, and behavior. QuotaX learns what works and leans into it.",
  },
  {
    title: "CRM-First Sync",
    desc: "Bi-directional integrations with HubSpot, Salesforce, and Pipedrive. No duplicate contacts, no missing activities, no chaos.",
  },
  {
    title: "Calendar-Aware Booking",
    desc: "Offer live availability, place holds, and send reminders. Fewer back-and-forths, more meetings on the books.",
  },
  {
    title: "AI Drafts & Coaching",
    desc: "Polished reply drafts, objection handling, and next-best-action—summarized inline so reps move faster.",
  },
  {
    title: "Pipeline Analytics",
    desc: "See time-to-first-touch, meeting rate by source, sequence performance, and influenced revenue—updated in real time.",
  },
];

const STEPS = [
  ["Connect", "OAuth your CRM, email domain, and calendar; map forms and sources."],
  ["Tune", "Define ICP, routing logic, brand voice, and safety guardrails; pick sequences."],
  ["Launch", "Turn on capture and outreach—QuotaX starts qualifying and booking immediately."],
  ["Optimize", "Review analytics weekly, test playbooks, and scale the channels that convert."],
];

const BADGES = [
  "HubSpot",
  "Salesforce",
  "Pipedrive",
  "Google/Outlook Calendar",
  "Twilio SMS",
  "Slack / Teams",
];

const PROOF = [
  { metric: "+28–52%", label: "Lift in meetings booked*" },
  { metric: "~90 sec", label: "Avg. time-to-first-touch" },
  { metric: "3–5 days", label: "Typical time to launch" },
];

const FAQ = [
  {
    q: "Does QuotaX replace SDRs?",
    a: "No—QuotaX handles the busywork so reps can focus on conversations that close. Think of it as your tireless sales ops partner.",
  },
  {
    q: "How fast can we go live?",
    a: "Most teams launch in 3–5 business days. We wire your CRM, sequences, and routing—then you watch the calendar fill.",
  },
  {
    q: "Which CRMs do you support?",
    a: "HubSpot, Salesforce, and Pipedrive with bi-directional sync, clean logging, and deduplication.",
  },
  {
    q: "Can we customize sequences and tone?",
    a: "Absolutely. We tune message style, send windows, and ICP filters to match your brand and audience.",
  },
];

export default function SalesLanding() {
  return (
    <LayoutOne>
      {/* ===== Hero ===== */}
      <PageHero
        title="QuotaX — Turn Leads Into Meetings on Autopilot"
        italicTitle="Revenue Unlocked"
        badgeTitle="AI Sales Engine"
        description="Capture, enrich, and qualify every lead. Trigger adaptive email/SMS sequences. Book real meetings on real calendars—cleanly synced to your CRM."
        scale
      />

      {/* ===== Futuristic visual + top CTAs ===== */}
      <section className="container -mt-8 mb-12">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 dark:bg-secondary">
          <div className="grid gap-6 items-center md:grid-cols-[1.2fr,1fr]">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Win the first 5 minutes. Own the follow-up forever.</h3>
              <p className="text-white/70">
                QuotaX replies instantly, sequences smartly, and logs perfectly. No more missed leads, no more CRM spaghetti—just
                clean pipeline and booked conversations.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="rv-button rv-button-primary">
                  <div className="rv-button-top"><span>Talk to DossX</span></div>
                  <div className="rv-button-bottom"><span className="text-nowrap">Talk to DossX</span></div>
                </Link>

                <Link href="/pricing#sales-pricing" className="rv-button rv-button-secondary">
                  <div className="rv-button-top"><span>See Plans</span></div>
                  <div className="rv-button-bottom"><span className="text-nowrap">See Plans</span></div>
                </Link>

                <Link href="/agents/voice" className="rv-button rv-button-ghost">
                  <div className="rv-button-top"><span>See Voxia (Voice)</span></div>
                  <div className="rv-button-bottom"><span className="text-nowrap">See Voxia (Voice)</span></div>
                </Link>
              </div>

              <p className="mt-3 text-xs text-white/60">Month-to-month. Setup handled. Live in under a week.</p>
            </div>

            {/* Inline “network → calendar” illustration (no external assets) */}
            <div className="relative h-[260px] md:h-[300px]">
              <svg viewBox="0 0 600 400" className="absolute inset-0 h-full w-full">
                <defs>
                  <linearGradient id="qx-g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
                  </linearGradient>
                </defs>
                {/* grid */}
                {Array.from({ length: 10 }, (_, i) => (
                  <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="400" stroke="url(#qx-g1)" />
                ))}
                {Array.from({ length: 8 }, (_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 50} x2="600" y2={i * 50} stroke="url(#qx-g1)" />
                ))}
                {/* lead nodes */}
                <circle cx="90" cy="200" r="6" fill="white" opacity="0.9" />
                <circle cx="180" cy="150" r="6" fill="white" opacity="0.9" />
                <circle cx="210" cy="250" r="6" fill="white" opacity="0.9" />
                <circle cx="300" cy="180" r="6" fill="white" opacity="0.9" />
                {/* edges to “calendar” */}
                <path d="M90,200 C130,170 160,160 180,150" stroke="white" strokeOpacity="0.4" fill="none" />
                <path d="M180,150 C220,170 250,170 300,180" stroke="white" strokeOpacity="0.4" fill="none" />
                <path d="M210,250 C240,220 270,200 300,180" stroke="white" strokeOpacity="0.4" fill="none" />
                {/* calendar icon */}
                <rect x="420" y="120" width="120" height="100" rx="12" stroke="white" strokeOpacity="0.7" fill="none" />
                <line x1="420" y1="150" x2="540" y2="150" stroke="white" strokeOpacity="0.5" />
                <circle cx="450" cy="175" r="6" fill="white" opacity="0.9" />
                <circle cx="495" cy="175" r="6" fill="white" opacity="0.5" />
                <circle cx="525" cy="200" r="6" fill="white" opacity="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Value Props ===== */}
      <section className="container mb-16">
        <RevealWrapper>
          <h2 className="mb-2 text-center">More signal. Less slog. Revenue on repeat.</h2>
          <p className="mx-auto max-w-2xl text-center text-white/75">
            QuotaX turns every inbound into a qualified conversation and every outbound into a booked meeting—then proves it with analytics.
          </p>
        </RevealWrapper>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-black/20 p-6 dark:bg-secondary">
              <h4 className="mb-2">{f.title}</h4>
              <p className="text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== How It Works ===== */}
      <section className="container mb-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 dark:bg-secondary">
          <h3 className="mb-6 text-2xl md:text-3xl font-bold">How QuotaX goes live</h3>
          <ol className="grid gap-4 md:grid-cols-4">
            {STEPS.map(([title, desc]) => (
              <li key={title} className="rounded-xl border border-white/10 bg-black/20 p-4">
                <h5 className="mb-1 font-semibold">{title}</h5>
                <p className="text-white/70 text-sm">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== Integrations / Badges ===== */}
      <section className="container mb-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 dark:bg-secondary">
          <h3 className="text-xl font-semibold mb-3">Plays nice with your stack</h3>
          <div className="flex flex-wrap gap-2 text-sm text-white/80">
            {BADGES.map((b) => (
              <span key={b} className="rounded-full border border-white/15 bg-black/20 px-3 py-1">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Proof Strip ===== */}
      <section className="container mb-16">
        <div className="grid gap-5 md:grid-cols-3">
          {PROOF.map((p) => (
            <div key={p.metric} className="rounded-2xl border border-white/10 bg-black/20 p-6 dark:bg-secondary">
              <h4 className="text-3xl font-bold">{p.metric}</h4>
              <p className="text-white/70 text-sm mt-1">{p.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-white/50">*Ranges depend on source quality, domain reputation, and market.</p>
      </section>

      {/* ===== FAQ ===== */}
      <section className="container mb-16">
        <h3 className="mb-6 text-2xl md:text-3xl font-bold">QuotaX FAQ</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {FAQ.map((i) => (
            <div key={i.q} className="rounded-2xl border border-white/10 bg-black/20 p-5 dark:bg-secondary">
              <h5 className="mb-1">{i.q}</h5>
              <p className="text-white/70 text-sm">{i.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="container mb-20 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Let’s turn intent into revenue.</h3>
        <p className="mb-6 text-white/70 max-w-2xl mx-auto">
          We’ll map your ICP, connect CRM + comms, and deploy winning sequences. You focus on closing—QuotaX handles the rest.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/contact" className="rv-button rv-button-primary">
            <div className="rv-button-top"><span>Talk to DossX</span></div>
            <div className="rv-button-bottom"><span className="text-nowrap">Talk to DossX</span></div>
          </Link>
          <Link href="/pricing#sales-pricing" className="rv-button rv-button-secondary">
            <div className="rv-button-top"><span>See Plans</span></div>
            <div className="rv-button-bottom"><span className="text-nowrap">See Plans</span></div>
          </Link>
        </div>
      </section>
    </LayoutOne>
  );
}