// app/bundles/sales-crm/page.tsx
import LayoutOne from '@/components/shared/LayoutOne'
import Link from 'next/link'
import Head from 'next/head'

export default function SalesCRMBundlePage() {
  return (
    <LayoutOne>
      <>
        <Head>
          <title>Sales & CRM Automation Suite | DossX</title>
          <meta name="description" content="Automate follow-ups, qualify leads, sync your CRM, and speed up your sales cycle with the DossX Sales & CRM Accelerator. Hosted and scalable." />
          <meta name="keywords" content="sales automation, CRM workflows, Stripe HubSpot integration, AI email follow-up, DossX, no-code sales" />
          <meta property="og:title" content="Sales & CRM Automation Suite | DossX" />
          <meta property="og:description" content="Automate follow-ups, qualify leads, sync your CRM, and speed up your sales cycle with the DossX Sales & CRM Accelerator." />
          <meta property="og:type" content="website" />
        </Head>

        <section className="pb-14 pt-32 md:pb-16 md:pt-36 lg:pb-[88px] lg:pt-[200px] xl:pb-[100px]">
          <div className="container">
            {/* Hero */}
            <div className="mb-14 md:mb-[60px] lg:mb-[100px] text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                Sales &amp; CRM Accelerator
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-colorText md:text-xl">
                Accelerate every deal, automate every follow-up, and get instant pipeline visibility. The DossX Sales & CRM Accelerator combines hosted automations, AI follow-ups, and CRM sync to shorten sales cycles and boost conversion.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-2">
              {/* Details */}
              <div>
                <div className="mb-10">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">What It Does</h2>
                  <ul className="space-y-3 text-lg text-colorText">
                    <li>• Logs post-call notes and qualifies leads by behavior, profile, or property match.</li>
                    <li>• Sends personalized email sequences triggered by tags, deal stage, or calendar events.</li>
                    <li>• Instantly updates your CRM (HubSpot, Pipedrive, Airtable) and syncs with Stripe & Slack.</li>
                    <li>• Delivers pipeline activity alerts and deal movements in your workspace or inbox.</li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">Why It Matters</h2>
                  <p className="text-lg text-colorText">
                    Sales teams waste hours chasing leads, logging notes, and fixing data manually. With DossX, your workflows run themselves—freeing reps to close, not copy-paste.
                  </p>
                  <p className="mt-4 text-lg text-colorText">
                    No lead slips through the cracks. No follow-up gets skipped. No data gets lost in the shuffle.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">Plans & Pricing</h2>
                  <ul className="space-y-2 text-lg text-colorText">
                    <li>• <strong>Starter License: $700/year</strong> — Full install package with CRM sync templates and best practices.</li>
                    <li>• <strong>Managed: $1,800/month</strong> — End-to-end deployment, white-glove support, optimization and alerts.</li>
                  </ul>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-6 rounded-lg bg-white p-8 shadow-md dark:bg-secondary">
                <h2 className="text-2xl font-bold md:text-3xl">Turn Leads Into Revenue—Faster</h2>
                <p className="text-lg text-colorText">
                  Go from call to closed without chasing follow-ups or fixing CRM data. Let DossX do the busywork.
                </p>
                <Link
                  href="/stripe/checkout/salescrm-quickstart"
                  className="rv-button rv-button-primary block text-center"
                >
                  Get Starter License ($700/year)
                </Link>
                <Link
                  href="/stripe/checkout/salescrm-managed"
                  className="rv-button rv-button-secondary block text-center"
                >
                  Launch Managed ($1,800/mo)
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    </LayoutOne>
  )
}