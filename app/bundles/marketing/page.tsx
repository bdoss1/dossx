// app/bundles/marketing/page.tsx
import LayoutOne from '@/components/shared/LayoutOne'
import Link from 'next/link'
import Head from 'next/head'

export default function MarketingBundlePage() {
  return (
    <LayoutOne>
      <>
        <Head>
          <title>Marketing & Social Media Automation | DossX</title>
          <meta name="description" content="Automate social media and content marketing across all platforms with the DossX Marketing Suite. AI-powered, hosted, and ready to scale." />
          <meta name="keywords" content="social media automation, AI marketing tools, content repurposing, marketing automation, DossX, n8n workflows" />
          <meta property="og:title" content="Marketing & Social Media Automation | DossX" />
          <meta property="og:description" content="Automate social media and content marketing across all platforms with the DossX Marketing Suite." />
          <meta property="og:type" content="website" />
        </Head>

        <section className="pb-14 pt-32 md:pb-16 md:pt-36 lg:pb-[88px] lg:pt-[200px] xl:pb-[100px]">
          <div className="container">
            {/* Hero */}
            <div className="mb-14 md:mb-[60px] lg:mb-[100px] text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                Marketing &amp; Social Media Suite
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-colorText md:text-xl">
                Flood your channels with fresh, on-brand posts—effortlessly. Let AI ideate, create, schedule, and
                repurpose your content across LinkedIn, X, Instagram, TikTok &amp; beyond—so you never miss a beat.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-2">
              {/* Details */}
              <div>
                <div className="mb-10">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">Why You Need This Bundle</h2>
                  <ul className="space-y-3 text-lg text-colorText">
                    <li>• Consistent posting drives 3× more engagement—without hiring more staff.</li>
                    <li>• AI-powered repurposing turns one video into 10 social clips in seconds.</li>
                    <li>• Beat the algorithm with optimized scheduling and trending hashtags.</li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">Instant Impact</h2>
                  <p className="text-lg text-colorText">
                    Deploy in under an hour. Watch your social calendar fill itself, freeing your team to focus on
                    strategy, creative direction, and conversion.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">Pricing</h2>
                  <ul className="space-y-2 text-lg text-colorText">
                    <li>• Quick-Start: <strong>$750 one-time</strong> (DIY import + step-by-step guide)</li>
                    <li>• Managed: <strong>$2,000/mo</strong> (we host, monitor, optimize, support)</li>
                  </ul>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-6 rounded-lg bg-white p-8 shadow-md dark:bg-secondary">
                <h2 className="text-2xl font-bold md:text-3xl">Ready to Amplify Your Reach?</h2>
                <Link
                  href="/stripe/checkout/marketing-quickstart"
                  className="rv-button rv-button-primary block text-center"
                >
                  Get Quick-Start ($750)
                </Link>
                <Link
                  href="/stripe/checkout/marketing-managed"
                  className="rv-button rv-button-secondary block text-center"
                >
                  Launch Managed ($2,000/mo)
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    </LayoutOne>
  )
}