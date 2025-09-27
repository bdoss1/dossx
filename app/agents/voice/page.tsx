import Link from "next/link";
import LayoutOne from "@/components/shared/LayoutOne";
import PageHero from "@/components/shared/PageHero";
import RevealWrapper from "@/components/animation/RevealWrapper";
import VoiceAgentWrapper from "@/components/agent/VoiceAgentWrapper"; // <- client component (has "use client")

export const metadata = {
  title: "Voxia — The Voice of Your Brand. 24/7. | DossX",
  description:
    "Voxia is your AI voice concierge. Natural conversation, real integrations, instant answers — on phone and web. Bookings, FAQs, lookups, and human handoff included.",
};

// ----- Content data -----
const FEATURES_PRIMARY = [
  {
    title: "Sounds Human, Works Faster",
    desc: "ElevenLabs + NLU-powered speech makes Voxia feel natural while cutting handle time and boosting trust.",
  },
  {
    title: "Understands Your Business",
    desc: "Reads your knowledge base, database, and calendar for accurate, brand-aligned answers in real time.",
  },
  {
    title: "Escalates with Context",
    desc: "When a human should step in, Voxia summarizes the convo and routes to Slack or Teams with next steps.",
  },
];

const STORY_FEATURES = [
  {
    title: "Always On, Always On-Brand",
    desc: "Greeting, tone, and policies tuned to your style. Voxia never tires, never takes lunch, never forgets follow-ups.",
  },
  {
    title: "Omni-Channel Voice",
    desc: "Phone line and web widget share the same brain. Your customers choose the channel; Voxia does the work.",
  },
  {
    title: "Proof You Can Show",
    desc: "Transcripts, analytics, resolution rates, and bookings—all visible in your dashboard for real accountability.",
  },
];

const STEPS = [
  ["Connect", "Hook up your calendar, knowledge base, and data source. We wire credentials and guardrails."],
  ["Tune", "Pick the voice, define tone, set escalation rules, and align intents to outcomes."],
  ["Launch", "Enable the phone line and site widget. Voxia handles real conversations in days, not months."],
  ["Optimize", "Review transcripts and metrics, iterate prompts, and expand intents as you scale."],
];

const BADGES = [
  "ElevenLabs Voice",
  "OpenAI NLU",
  "Google/Outlook Calendar",
  "Slack / Teams",
  "Postgres / MySQL",
  "Twilio / Zoom Phone",
];

const FAQ = [
  {
    q: "What can Voxia handle on Day 1?",
    a: "FAQs, appointment booking, order/status lookups, lead capture, and smart handoffs. We expand intents during onboarding.",
  },
  {
    q: "How long does setup take?",
    a: "Typically 3–5 business days. We connect systems, import knowledge, and test flows before go-live.",
  },
  {
    q: "Can Voxia mirror our brand voice?",
    a: "Yes. We tune greetings, tone, pacing, and escalation style—and can support custom voices when needed.",
  },
  {
    q: "Where do we see performance?",
    a: "Your dashboard includes transcripts, booking rates, deflection, CSAT signals, and resolution metrics.",
  },
];

export default function VoxiaLanding() {
  return (
    <LayoutOne>
      {/* ===== Hero ===== */}
      <PageHero
        title="Meet Voxia — Your 24/7 AI Voice Concierge"
        italicTitle="The Voice of Your Brand"
        badgeTitle="AI Voice"
        description="Answer questions, book appointments, and resolve routine requests instantly—on phone and web—with natural conversation and deep integration."
        scale
      />

      {/* ===== Futuristic visual + top CTAs ===== */}
      <section className="container -mt-8 mb-12">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 dark:bg-secondary">
          <div className="grid gap-6 items-center md:grid-cols-[1.2fr,1fr]">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                A real voice for real customers—always on, always accurate.
              </h3>
              <p className="text-white/70">
                Voxia listens, understands, and solves—then escalates with perfect context when needed. It’s the voice layer
                between your brand and the people who want answers now.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {/* Primary CTA — opens voice modal */}
                <VoiceAgentWrapper label="Talk to Voxia" />

                {/* Secondary CTA — pricing anchor */}
                <Link href="/pricing#voice-pricing" className="rv-button rv-button-secondary">
                  <div className="rv-button-top"><span>See Plans</span></div>
                  <div className="rv-button-bottom"><span className="text-nowrap">See Plans</span></div>
                </Link>

                {/* Tertiary CTA — contact */}
                <Link href="/contact" className="rv-button rv-button-ghost">
                  <div className="rv-button-top"><span>Book a Demo</span></div>
                  <div className="rv-button-bottom"><span className="text-nowrap">Book a Demo</span></div>
                </Link>
              </div>

              <p className="mt-3 text-xs text-white/60">
                24/7 availability · Phone & Web · Slack/Teams handoff · Analytics included
              </p>
            </div>

            {/* Headset-style inline SVG (no external assets) */}
            <div className="relative h-[260px] md:h-[300px]">
              <svg viewBox="0 0 600 400" className="absolute inset-0 h-full w-full">
                <defs>
                  <linearGradient id="vox-g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
                  </linearGradient>
                  <radialGradient id="vox-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </radialGradient>
                </defs>

                {/* grid */}
                {Array.from({ length: 10 }, (_, i) => (
                  <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="400" stroke="url(#vox-g1)" />
                ))}
                {Array.from({ length: 8 }, (_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 50} x2="600" y2={i * 50} stroke="url(#vox-g1)" />
                ))}

                {/* headset outline */}
                <ellipse cx="300" cy="200" rx="120" ry="85" fill="none" stroke="white" strokeOpacity="0.35" />
                <circle cx="220" cy="200" r="34" fill="none" stroke="white" strokeOpacity="0.6" />
                <circle cx="380" cy="200" r="34" fill="none" stroke="white" strokeOpacity="0.6" />
                <path d="M190,200 C190,170 225,150 250,170" stroke="white" strokeOpacity="0.25" fill="none" />
                <path d="M410,200 C410,170 375,150 350,170" stroke="white" strokeOpacity="0.25" fill="none" />
                {/* mic boom */}
                <path d="M360,235 C380,245 410,250 430,260" stroke="white" strokeOpacity="0.5" fill="none" />
                <circle cx="440" cy="262" r="6" fill="white" opacity="0.9" />
                {/* glow */}
                <circle cx="300" cy="200" r="120" fill="url(#vox-glow)" opacity="0.15" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Primary Value Props ===== */}
      <section className="container mb-16">
        <RevealWrapper>
          <h2 className="mb-2 text-center">Natural conversation. Real answers. Measurable results.</h2>
          <p className="mx-auto max-w-2xl text-center text-white/75">
            Voxia isn’t an IVR menu—it’s a brand-trained voice that solves problems and books outcomes, fast.
          </p>
        </RevealWrapper>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES_PRIMARY.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-black/20 p-6 dark:bg-secondary">
              <h4 className="mb-2">{f.title}</h4>
              <p className="text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== High-Tech Storytelling ===== */}
      <section className="container mb-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 dark:bg-secondary">
          <h3 className="mb-6 text-2xl md:text-3xl font-bold">Voice that works like your best agent</h3>
          <div className="grid gap-5 md:grid-cols-3">
            {STORY_FEATURES.map((f) => (
              <div key={f.title} className="rounded-xl border border-white/10 bg-black/20 p-5">
                <h5 className="mb-1 font-semibold">{f.title}</h5>
                <p className="text-white/70 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== How It Works ===== */}
      <section className="container mb-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 dark:bg-secondary">
          <h3 className="mb-6 text-2xl md:text-3xl font-bold">How Voxia goes live</h3>
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
          <div className="rounded-2xl border border-white/10 bg-black/20 p-6 dark:bg-secondary">
            <h4 className="text-3xl font-bold">3–5 days</h4>
            <p className="text-white/70 text-sm mt-1">Typical time to launch</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-6 dark:bg-secondary">
            <h4 className="text-3xl font-bold">+35–60%</h4>
            <p className="text-white/70 text-sm mt-1">Lift in same-day resolutions*</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-6 dark:bg-secondary">
            <h4 className="text-3xl font-bold">24/7</h4>
            <p className="text-white/70 text-sm mt-1">Coverage without extra headcount</p>
          </div>
        </div>
        <p className="mt-3 text-xs text-white/50">*Varies by use case, call volume, and data quality.</p>
      </section>

      {/* ===== FAQ ===== */}
      <section className="container mb-16">
        <h3 className="mb-6 text-2xl md:text-3xl font-bold">Voxia FAQ</h3>
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
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Give your brand a voice customers love.</h3>
        <p className="mb-6 text-white/70 max-w-2xl mx-auto">
          Spin up Voxia with your tone, knowledge base, and scheduling. Take calls on your site or phone line today.
        </p>
        <div className="flex items-center justify-center gap-4">
          <VoiceAgentWrapper label="Talk to Voxia" />
          <Link href="/contact" className="rv-button rv-button-secondary">
            <div className="rv-button-top"><span>Book a Demo</span></div>
            <div className="rv-button-bottom"><span className="text-nowrap">Book a Demo</span></div>
          </Link>
        </div>
      </section>
    </LayoutOne>
  );
}