import Link from "next/link";
import LayoutOne from "@/components/shared/LayoutOne";
import PageHero from "@/components/shared/PageHero";
import RevealWrapper from "@/components/animation/RevealWrapper";
import VoiceAgentWrapper from "@/components/agent/VoiceAgentWrapper"; // client component
import Image from "next/image"; // ✅ add this

export const metadata = {
  title: "Voxia — The Voice of Your Brand. 24/7. | DossX",
  description:
    "Voxia is your AI voice concierge. Natural conversation, real integrations, instant answers — on phone and web. Bookings, FAQs, lookups, and human handoff included.",
};

// ----- Content data -----
const FEATURES_PRIMARY = [
  {
    title: "Sounds Human, Works Faster",
    desc: "NLU-powered speech makes Voxia feel natural while cutting handle time and boosting trust.",
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
  "OpenAI LLM",
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
          <div className="grid items-center gap-6 md:grid-cols-[1.2fr,1fr]">
            <div>
              <h3 className="mb-3 text-2xl font-bold md:text-3xl">
                A real voice for real customers—always on, always accurate.
              </h3>
              <p className="text-white/70">
                Voxia listens, understands, and solves—then escalates with perfect context when needed. It’s the voice layer
                between your brand and the people who want answers now.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {/* Primary CTA — opens voice modal */}
                <VoiceAgentWrapper label="Talk to Voxia" />

               

              </div>

              <p className="mt-3 text-xs text-white/60">
                24/7 availability · Phone & Web · Slack/Teams handoff · Analytics included
              </p>
            </div>

            {/* ✅ Proper Next.js Image usage */}
            <div className="relative h-[260px] w-full md:h-[300px]">
              <Image
                src="/images/agent/dossx-avatar.png"
                alt="Voxia headset illustration"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-contain"
                priority
              />
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
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 dark:bg-secondary md:p-10">
          <h3 className="mb-6 text-2xl font-bold md:text-3xl">Voice that works like your best agent</h3>
          <div className="grid gap-5 md:grid-cols-3">
            {STORY_FEATURES.map((f) => (
              <div key={f.title} className="rounded-xl border border-white/10 bg-black/20 p-5">
                <h5 className="mb-1 font-semibold">{f.title}</h5>
                <p className="text-sm text-white/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== How It Works ===== */}
      <section className="container mb-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 dark:bg-secondary md:p-10">
          <h3 className="mb-6 text-2xl font-bold md:text-3xl">How Voxia goes live</h3>
          <ol className="grid gap-4 md:grid-cols-4">
            {STEPS.map(([title, desc]) => (
              <li key={title} className="rounded-xl border border-white/10 bg-black/20 p-4">
                <h5 className="mb-1 font-semibold">{title}</h5>
                <p className="text-sm text-white/70">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== Integrations / Badges ===== */}
      <section className="container mb-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 dark:bg-secondary">
          <h3 className="mb-3 text-xl font-semibold">Plays nice with your stack</h3>
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
            <p className="mt-1 text-sm text-white/70">Typical time to launch</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-6 dark:bg-secondary">
            <h4 className="text-3xl font-bold">+35–60%</h4>
            <p className="mt-1 text-sm text-white/70">Lift in same-day resolutions*</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-6 dark:bg-secondary">
            <h4 className="text-3xl font-bold">24/7</h4>
            <p className="mt-1 text-sm text-white/70">Coverage without extra headcount</p>
          </div>
        </div>
        <p className="mt-3 text-xs text-white/50">*Varies by use case, call volume, and data quality.</p>
      </section>

      {/* ===== FAQ ===== */}
      <section className="container mb-16">
        <h3 className="mb-6 text-2xl font-bold md:text-3xl">Voxia FAQ</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {FAQ.map((i) => (
            <div key={i.q} className="rounded-2xl border border-white/10 bg-black/20 p-5 dark:bg-secondary">
              <h5 className="mb-1">{i.q}</h5>
              <p className="text-sm text-white/70">{i.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="container mb-20 text-center">
        <h3 className="mb-4 text-2xl font-bold md:text-3xl">Give your brand a voice customers love.</h3>
        <p className="mx-auto mb-6 max-w-2xl text-white/70">
          Spin up Voxia with your tone, knowledge base, and scheduling. Take calls on your site or phone line today.
        </p>
        <div className="flex items-center justify-center gap-4">
           <Link href="/pricing#voice-pricing" className="rv-button rv-button-secondary">
                  <div className="rv-button-top"><span>See Plans</span></div>
                  <div className="rv-button-bottom"><span className="text-nowrap">See Plans</span></div>
                </Link>
        </div>
      </section>
    </LayoutOne>
  );
}