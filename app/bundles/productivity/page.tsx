// app/bundles/productivity/page.tsx
import LayoutOne from '@/components/shared/LayoutOne'
import Link from 'next/link'
import Head from 'next/head'

export default function ProductivityToolkitPage() {
  return (
    <LayoutOne>
      <>
        <Head>
          <title>Productivity & Scheduling Toolkit | DossX</title>
          <meta name="description" content="Sync calendars, automate internal announcements, and remove cross-platform friction with DossX’s hosted Productivity & Scheduling Toolkit." />
          <meta name="keywords" content="calendar sync automation, Google Outlook integration, team updates, internal announcements, DossX productivity tools" />
          <meta property="og:title" content="Productivity & Scheduling Toolkit | DossX" />
          <meta property="og:description" content="Sync calendars, automate internal announcements, and remove cross-platform friction with DossX’s hosted Productivity & Scheduling Toolkit." />
          <meta property="og:type" content="website" />
        </Head>

        <section className="pb-14 pt-32 md:pb-16 md:pt-36 lg:pb-[88px] lg:pt-[200px] xl:pb-[100px]">
          <div className="container">
            {/* Hero */}
            <div className="mb-14 md:mb-[60px] lg:mb-[100px] text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                Productivity &amp; Scheduling Toolkit
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-colorText md:text-xl">
                Automate internal alignment and calendar sync across your org. This toolkit eliminates scheduling chaos and keeps your team informed—without switching tools or apps.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-2">
              {/* Details */}
              <div>
                <div className="mb-10">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">What It Does</h2>
                  <ul className="space-y-3 text-lg text-colorText">
                    <li>• Two-way sync between Google Calendar and Microsoft Outlook across users and rooms.</li>
                    <li>• Triggered internal comms: announce wins, policies, or shoutouts to Slack, Teams, or email.</li>
                    <li>• Optional logic for “priority overrides” or multi-timezone awareness.</li>
                    <li>• Set-it-and-forget-it structure: no manual edits or duplicated entries.</li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">Why It Saves Time</h2>
                  <p className="text-lg text-colorText">
                    Calendar chaos kills momentum. This toolkit restores it by removing friction between platforms and keeping everyone on the same page—automatically.
                  </p>
                  <p className="mt-4 text-lg text-colorText">
                    No more “Which link is right?” or “Did you see that update?”—it’s all handled in the background.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">Pricing</h2>
                  <ul className="space-y-2 text-lg text-colorText">
                    <li>• <strong>Starter License: $400/year</strong> — Google/Outlook sync installer, update triggers, and comms templates.</li>
                    <li>• <strong>Managed: $1,200/month</strong> — Full install, timezone logic, auto-messaging, support, and monitoring.</li>
                  </ul>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-6 rounded-lg bg-white p-8 shadow-md dark:bg-secondary">
                <h2 className="text-2xl font-bold md:text-3xl">Automate Your Team’s Day-to-Day</h2>
                <p className="text-lg text-colorText">
                  Clean calendar sync, aligned team updates, and no more comms chaos—with DossX.
                </p>
                <Link
                  href="/stripe/checkout/productivity-quickstart"
                  className="rv-button rv-button-primary block text-center"
                >
                  Get Starter License ($400/year)
                </Link>
                <Link
                  href="/stripe/checkout/productivity-managed"
                  className="rv-button rv-button-secondary block text-center"
                >
                  Launch Managed ($1,200/mo)
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    </LayoutOne>
  )
}