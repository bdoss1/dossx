// app/bundles/ai-assistant/page.tsx
import LayoutOne from '@/components/shared/LayoutOne'
import Link from 'next/link'
import Head from 'next/head'

export default function AIAssistantBundlePage() {
  return (
    <LayoutOne>
      <>
        <Head>
          <title>AI Assistant & Chatbot Hub | DossX</title>
          <meta name="description" content="Deploy branded AI agents that manage tasks, handle support, and drive engagement—across Telegram, Slack, and your website. Hosted by DossX." />
          <meta name="keywords" content="AI agents, chatbot automation, multi-agent systems, GPT chatbot builder, Telegram AI assistant, LLM customer support, DossX" />
          <meta property="og:title" content="AI Assistant & Chatbot Hub | DossX" />
          <meta property="og:description" content="Deploy branded AI agents that manage tasks, handle support, and drive engagement—across Telegram, Slack, and your website." />
          <meta property="og:type" content="website" />
        </Head>

        <section className="pb-14 pt-32 md:pb-16 md:pt-36 lg:pb-[88px] lg:pt-[200px] xl:pb-[100px]">
          <div className="container">
            {/* Hero */}
            <div className="mb-14 md:mb-[60px] lg:mb-[100px] text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                AI Assistant &amp; Chatbot Hub
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-colorText md:text-xl">
                Bring always-on, branded AI agents to your website, internal tools, or messaging platforms. This bundle equips you with fully managed, multi-agent assistants that scale your support and automation 24/7.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-2">
              {/* Details */}
              <div>
                <div className="mb-10">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">What It Powers</h2>
                  <ul className="space-y-3 text-lg text-colorText">
                    <li>• 24/7 assistant deployed on Telegram or Slack that handles scheduling, task reminders, and AI lookups.</li>
                    <li>• Web widget or internal dashboard chatbot with persistent memory and escalation paths.</li>
                    <li>• Multi-agent orchestration to route queries between support, product, and knowledge search agents.</li>
                    <li>• Real-time stock alerts, lead capture, or calendar management via chat interfaces.</li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">Why It Converts</h2>
                  <p className="text-lg text-colorText">
                    AI support agents are the future of CX. You’ll never miss an inquiry, ticket, or support moment again—and you’ll reduce human workload while delivering better service.
                  </p>
                  <p className="mt-4 text-lg text-colorText">
                    We combine LLMs with structured workflows to make your bots smarter, faster, and on-brand.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">Pricing</h2>
                  <ul className="space-y-2 text-lg text-colorText">
                    <li>• <strong>Starter License: $800/year</strong> — Includes assistant templates, prompt libraries, and platform setup.</li>
                    <li>• <strong>Managed: $2,200/month</strong> — Fully hosted, optimized AI agents with ongoing iteration, security, and analytics.</li>
                  </ul>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-6 rounded-lg bg-white p-8 shadow-md dark:bg-secondary">
                <h2 className="text-2xl font-bold md:text-3xl">Deploy a 24/7 AI Workforce</h2>
                <p className="text-lg text-colorText">
                  Automate support, triage, task reminders, and more with branded AI agents—without the dev lift.
                </p>
                <Link
                  href="/stripe/checkout/aiassistant-quickstart"
                  className="rv-button rv-button-primary block text-center"
                >
                  Get Starter License ($800/year)
                </Link>
                <Link
                  href="/stripe/checkout/aiassistant-managed"
                  className="rv-button rv-button-secondary block text-center"
                >
                  Launch Managed ($2,200/mo)
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    </LayoutOne>
  )
}