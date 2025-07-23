// app/services/chatbot-integration/page.tsx
'use client'

import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'

export default function ChatbotIntegrationPage() {
  return (
    <LayoutOne>
      {/* Hero */}
      <PageHero
        title="AI Chatbot"
        italicTitle="Integration"
        badgeTitle="Conversational AI"
        description="Embed custom GPT-powered AI Agents and multi-agent workflows into your product or site—no heavy lifting."
        scale
      />

      {/* Service Details */}
      <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
        <div className="container max-w-3xl">
          <img src="/images/services/dossx_header.png" alt="Chatbot Integration" className="mb-10 w-full rounded-md" />

          <h2 className="mb-6 text-2xl font-bold md:text-3xl">Service Overview</h2>
          <p className="mb-8 text-base leading-[1.6]">
            Turn static support pages and clunky forms into intelligent, conversational experiences. DossX designs and deploys
            custom GPT-4 / Gemini AI Agents and orchestrates behind-the-scenes AI agents that handle everything from ticket
            triage to personalized product recommendations. Whether you need a single FAQ bot or a fleet of collaborative
            agents, we bake conversational AI directly into your existing stack—with enterprise-grade security and analytics.
          </p>

          <h3 className="mb-4 text-xl font-semibold">What’s Included</h3>
          <ul className="mb-10 list-disc pl-5 space-y-2 text-base text-colorText">
            <li><strong>Conversational Design:</strong> Persona crafting, intent mapping, prompt engineering.</li>
            <li><strong>RAG & Knowledge Bases:</strong> Retrieval-Augmented pipelines over your docs or data.</li>
            <li><strong>Multi-Agent Workflows:</strong> Specialist bots (support, sales, billing) collaborating.</li>
            <li><strong>Omni-Channel Deployment:</strong> Web widget, Slack, Teams, WhatsApp, mobile SDK.</li>
            <li><strong>Analytics & Optimization:</strong> Live dashboards, CSAT tracking, A/B prompt testing.</li>
          </ul>

          <h3 className="mb-6 text-xl font-semibold">Pricing Plans</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Starter */}
            <div className="rounded-lg border p-6 text-center">
              <h4 className="mb-4 text-2xl font-bold">Starter</h4>
              <p className="mb-6 text-lg font-semibold">$199<span className="text-base font-normal">/mo</span></p>
              <ul className="mb-6 list-none space-y-2 text-left text-colorText">
                <li>• 1 agent</li>
                <li>• 1 000 runs/mo</li>
                <li>• Prompt tuning</li>
                <li>• Email/chat support</li>
              </ul>
              <Link href="https://buy.stripe.com/placeholder-starter" passHref>
                <button className="rv-button rv-button-primary w-full">
                  <div className="rv-button-top">Purchase Starter</div>
                  <div className="rv-button-bottom">Purchase Starter</div>
                </button>
              </Link>
            </div>

            {/* Professional */}
            <div className="rounded-lg border p-6 text-center">
              <h4 className="mb-4 text-2xl font-bold">Professional</h4>
              <p className="mb-6 text-lg font-semibold">$599<span className="text-base font-normal">/mo</span></p>
              <ul className="mb-6 list-none space-y-2 text-left text-colorText">
                <li>• Up to 3 agents</li>
                <li>• 5 000 runs/mo</li>
                <li>• Multi-agent orchestration</li>
                <li>• Monthly strategy call</li>
              </ul>
              <Link href="https://buy.stripe.com/placeholder-pro" passHref>
                <button className="rv-button rv-button-secondary w-full">
                  <div className="rv-button-top">Purchase Pro</div>
                  <div className="rv-button-bottom">Purchase Pro</div>
                </button>
              </Link>
            </div>

            {/* Enterprise */}
            <div className="rounded-lg border p-6 text-center">
              <h4 className="mb-4 text-2xl font-bold">Enterprise</h4>
              <p className="mb-6 text-lg font-semibold">$1 499<span className="text-base font-normal">/mo</span></p>
              <ul className="mb-6 list-none space-y-2 text-left text-colorText">
                <li>• Unlimited agents</li>
                <li>• Unlimited runs</li>
                <li>• Omni-channel deployment</li>
                <li>• Dedicated SLA & concierge</li>
              </ul>
              <Link href="https://buy.stripe.com/placeholder-enterprise" passHref>
                <button className="rv-button rv-button-primary w-full">
                  <div className="rv-button-top">Purchase Enterprise</div>
                  <div className="rv-button-bottom">Purchase Enterprise</div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </LayoutOne>
  )
}