// app/bundles/data-enrichment/page.tsx
import LayoutOne from '@/components/shared/LayoutOne'
import Link from 'next/link'
import Head from 'next/head'

export default function DataEnrichmentBundlePage() {
  return (
    <LayoutOne>
      <>
        <Head>
          <title>Data Enrichment & Integration | DossX Automation Suite</title>
          <meta name="description" content="Enrich your CRM, power AI flows, and accelerate your automation with the DossX Data Enrichment & Integration Bundle. Hosted. Scalable. Ready to deploy." />
          <meta name="keywords" content="data enrichment, CRM automation, Clearbit integration, Airtable sync, no-code automation, AI-ready workflows, n8n, DossX" />
          <meta property="og:title" content="Data Enrichment & Integration | DossX Automation Suite" />
          <meta property="og:description" content="Enrich your CRM, power AI flows, and accelerate your automation with the DossX Data Enrichment & Integration Bundle." />
          <meta property="og:type" content="website" />
        </Head>

        <section className="pb-14 pt-32 md:pb-16 md:pt-36 lg:pb-[88px] lg:pt-[200px] xl:pb-[100px]">
          <div className="container">
            {/* Hero */}
            <div className="mb-14 md:mb-[60px] lg:mb-[100px] text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                Data Enrichment &amp; Integration Bundle
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-colorText md:text-xl">
                Supercharge your CRM and workflows with enriched data, AI-ready templates, and fast prototyping tools. The DossX Data Enrichment Bundle ensures you’re working with clean, actionable insights from day one.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-2">
              {/* Details */}
              <div>
                <div className="mb-10">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">Here’s What It Does</h2>
                  <ul className="space-y-3 text-lg text-colorText">
                    <li>• Pulls enriched firmographic and contact data from sources like Clearbit and Hunter.</li>
                    <li>• Automatically syncs enriched data into Airtable, Notion, or your preferred CRM.</li>
                    <li>• Includes a custom library of n8n nodes and prebuilt flows to kickstart your AI integrations.</li>
                    <li>• Keeps your databases clean, complete, and consistent with zero manual updates.</li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">Unlock Pro-Level Data Hygiene</h2>
                  <p className="text-lg text-colorText">
                    Great workflows start with clean data. With this bundle, your GTM systems stay enriched, synced, and AI-ready—without needing a data engineer. Ideal for marketing ops, analytics leads, and fast-scaling teams.
                  </p>
                  <p className="mt-4 text-lg text-colorText">
                    You’ll build smarter, faster, and more accurately with trusted data flowing through every touchpoint.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">Plans & Pricing</h2>
                  <ul className="space-y-2 text-lg text-colorText">
                    <li>• <strong>Starter License: $550/year</strong> — Includes full node library, setup guide, and direct install assistance.</li>
                    <li>• <strong>Managed: $1,600/month</strong> — Includes full-service deployment, custom syncs, QA checks, and strategy support.</li>
                  </ul>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-6 rounded-lg bg-white p-8 shadow-md dark:bg-secondary">
                <h2 className="text-2xl font-bold md:text-3xl">Feed Your Systems Better Data</h2>
                <p className="text-lg text-colorText">
                  Whether it’s inbound lead routing, AI prompts, or analytics dashboards—better data drives every decision. DossX makes sure yours is ready on day one.
                </p>
                <Link
                  href="/stripe/checkout/dataenrichment-quickstart"
                  className="rv-button rv-button-primary block text-center"
                >
                  Get Starter License ($550/year)
                </Link>
                <Link
                  href="/stripe/checkout/dataenrichment-managed"
                  className="rv-button rv-button-secondary block text-center"
                >
                  Launch Managed ($1,600/mo)
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    </LayoutOne>
  )
}