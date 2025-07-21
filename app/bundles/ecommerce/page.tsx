// app/bundles/ecommerce/page.tsx
import LayoutOne from '@/components/shared/LayoutOne'
import Link from 'next/link'
import Head from 'next/head'

export default function EcommerceBundlePage() {
  return (
    <LayoutOne>
      <>
        <Head>
          <title>E-commerce Automation Pack | DossX</title>
          <meta name="description" content="Automate Shopify fulfillment, product content, marketing assets, and notifications with the DossX E-commerce Optimization Pack. Hosted and scalable." />
          <meta name="keywords" content="ecommerce automation, Shopify workflows, AI product assets, order fulfillment automation, DossX, no-code ecommerce" />
          <meta property="og:title" content="E-commerce Automation Pack | DossX" />
          <meta property="og:description" content="Automate Shopify fulfillment, product content, marketing assets, and notifications with the DossX E-commerce Optimization Pack." />
          <meta property="og:type" content="website" />
        </Head>

        <section className="pb-14 pt-32 md:pb-16 md:pt-36 lg:pb-[88px] lg:pt-[200px] xl:pb-[100px]">
          <div className="container">
            {/* Hero */}
            <div className="mb-14 md:mb-[60px] lg:mb-[100px] text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                E-commerce Optimization Pack
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-colorText md:text-xl">
                Speed up fulfillment, automate product marketing, and eliminate tedious Shopify tasks. The DossX E-commerce Optimization Pack helps your store run itself—so you can scale what works.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-2">
              {/* Details */}
              <div>
                <div className="mb-10">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">What’s Included</h2>
                  <ul className="space-y-3 text-lg text-colorText">
                    <li>• Shopify webhook listeners that trigger fulfillment updates, customer tags, and Slack alerts.</li>
                    <li>• Automated generation of product visuals, thumbnails, and branded promotional graphics using AI.</li>
                    <li>• Content stored and categorized in Google Drive, Sheets, or Airtable for easy team access.</li>
                    <li>• Option to integrate review management or upsell automation tools.</li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">Why It Works</h2>
                  <p className="text-lg text-colorText">
                    Manual content creation and order tracking don’t scale. This bundle frees your team to focus on CX, sales, and growth—while automation handles fulfillment, asset generation, and asset organization.
                  </p>
                  <p className="mt-4 text-lg text-colorText">
                    You get instant ROI, faster product drops, and smoother campaign coordination.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">Pricing</h2>
                  <ul className="space-y-2 text-lg text-colorText">
                    <li>• <strong>Starter License: $600/year</strong> — Includes install template, full webhook coverage, and AI asset prompts.</li>
                    <li>• <strong>Managed: $1,500/month</strong> — End-to-end automation, optimization, and visual asset creation service.</li>
                  </ul>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-6 rounded-lg bg-white p-8 shadow-md dark:bg-secondary">
                <h2 className="text-2xl font-bold md:text-3xl">Turn Orders Into Automated Growth</h2>
                <p className="text-lg text-colorText">
                  Build a modern, scalable store with AI + automation—no extra headcount required.
                </p>
                <Link
                  href="/stripe/checkout/ecommerce-quickstart"
                  className="rv-button rv-button-primary block text-center"
                >
                  Get Starter License ($600/year)
                </Link>
                <Link
                  href="/stripe/checkout/ecommerce-managed"
                  className="rv-button rv-button-secondary block text-center"
                >
                  Launch Managed ($1,500/mo)
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    </LayoutOne>
  )
}