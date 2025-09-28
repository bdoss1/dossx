'use client';

import Link from 'next/link';
import RevealWrapper from '../animation/RevealWrapper';
import TextAppearAnimation from '../animation/TextAppearAnimation';

const WhyChooseUsV6 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        {/* ─── Header Copy ─── */}
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-24 lg:justify-between">
          <div className="md:w-[60%] md:self-start">
            <RevealWrapper className="rv-badge mb-2">
              <span className="rv-badge-text">Why Choose DossX</span>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear lg:leading-[1.1]">
                Ship-ready&nbsp;<i className="font-instrument">AI</i>&nbsp;that scales with your business
              </h2>
            </TextAppearAnimation>
          </div>

          <div className="w-full md:w-[40%] md:max-w-72 md:self-end lg:max-w-[470px]">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg md:place-self-end md:text-right">
                DossX turns real workflows into revenue: voice agents that never sleep, sales automation that never
                forgets, and orchestration that keeps every system in sync. Faster launches, cleaner ops, happier customers.
              </p>
            </TextAppearAnimation>

            <RevealWrapper className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/contact" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>Start Your Project</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>Start Your Project</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>

        {/* ─── Solution Cards (DossX Core) ─── */}
        <article>
          <RevealWrapper className="mb-[30px] flex flex-col gap-[30px] max-lg:flex-wrap md:flex-row">
            {/* Voxia */}
            <RevealWrapper className="flex-1 border px-[30px] py-20 dark:border-dark">
              <h5 className="mb-2.5 mt-5 lg:text-[35px]">Voxia — 24/7 Voice Concierge</h5>
              <p className="text-base leading-[1.6]">
                Natural, human-sounding voice powered by ElevenLabs + OpenAI. Answers FAQs, books appointments, checks
                order status, and hands off to humans in Slack/Teams when it matters.
              </p>
              <div className="mt-5">
                <Link href="/agents/voice" className="underline hover:text-primary">
                  Explore Voxia →
                </Link>
              </div>
            </RevealWrapper>

            {/* QuotaX */}
            <RevealWrapper className="flex-1 border px-[30px] py-20 dark:border-dark">
              <h5 className="mb-2.5 mt-5 lg:text-[35px]">QuotaX — AI Sales Engine</h5>
              <p className="text-base leading-[1.6]">
                Capture, score, and nurture leads across email/SMS/chat. Auto-syncs with your CRM and books meetings
                while your team sleeps—complete funnel visibility included.
              </p>
              <div className="mt-5">
                <Link href="/agents/sales" className="underline hover:text-primary">
                  Explore QuotaX →
                </Link>
              </div>
            </RevealWrapper>

            {/* Synapse */}
            <RevealWrapper className="flex-1 border px-[30px] py-20 dark:border-dark">
              <h5 className="mb-2.5 mt-5 lg:text-[35px]">Synapse — Workflow Orchestration</h5>
              <p className="text-base leading-[1.6]">
                Event-driven automation that connects your apps, data, and agents. Build branching logic, monitor runs,
                and keep CRMs, calendars, and billing perfectly in sync.
              </p>
              <div className="mt-5">
                <Link href="/agents/synapse" className="underline hover:text-primary">
                  Explore Synapse →
                </Link>
              </div>
            </RevealWrapper>
          </RevealWrapper>

          {/* ─── Platform Advantages ─── */}
          <RevealWrapper className="flex flex-col gap-[30px] md:flex-row">
            {/* Security */}
            <RevealWrapper className="min-h-[322px] flex-1 border px-[30px] py-20 dark:border-dark">
              <h5 className="mb-2.5 mt-5 lg:text-[35px]">Enterprise-grade Security</h5>
              <p className="text-base leading-[1.6]">
                SOC-2 aligned controls, encryption at rest & in transit, role-based access, and full audit trails.
                Trust built in from day one.
              </p>
            </RevealWrapper>

            {/* Speed */}
            <RevealWrapper className="min-h-[322px] flex-1 border px-[30px] py-20 dark:border-dark">
              <h5 className="mb-2.5 mt-5 lg:text-[35px]">Launch in Days, Not Months</h5>
              <p className="text-base leading-[1.6]">
                Pre-wired connectors and opinionated defaults mean you go live fast—then scale with advanced configs
                as your needs grow.
              </p>
            </RevealWrapper>

            {/* Human-in-the-loop */}
            <RevealWrapper className="min-h-[322px] flex-1 border px-[30px] py-20 dark:border-dark">
              <h5 className="mb-2.5 mt-5 lg:text-[35px]">Human-in-the-Loop by Design</h5>
              <p className="text-base leading-[1.6]">
                Smart escalation and approvals where they matter. Keep teams informed with transcripts, summaries, and
                alerts—right in Slack/Teams.
              </p>
            </RevealWrapper>
          </RevealWrapper>
        </article>
      </div>
    </section>
  );
};

export default WhyChooseUsV6;