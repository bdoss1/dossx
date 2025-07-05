/* /app/docs/page.tsx */

import LayoutOne from '@/components/shared/LayoutOne';
import PageHero from '@/components/shared/PageHero';
import RevealWrapper from '@/components/animation/RevealWrapper';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Developer Documentation — DossX',
};

const DocsHome = () => {
  return (
    <LayoutOne>
      {/* ────────────────── HERO ────────────────── */}
      <PageHero
        title="Developer"
        italicTitle="Documentation"
        badgeTitle="Docs"
        description="Everything you need to build, automate, and scale with DossX—quick-start guides, API reference, SDKs, and best-practice playbooks."
        scale
      />

      {/* ────────────────── QUICK START ────────────────── */}
      <section className="pb-20 pt-14 md:pb-24 md:pt-20 lg:pb-[100px] lg:pt-[88px]">
        <div className="container">
          <RevealWrapper as="h2" className="mb-6 text-3xl font-medium">
            Quick Start
          </RevealWrapper>

          <RevealWrapper as="pre" className="rounded bg-[#0d0d0d] p-6 text-sm text-[#d7d7d7] overflow-auto">
{`curl -X POST https://api.dossx.com/v1/workflows/run \\
  -H "Authorization: Bearer <YOUR_API_KEY>" \\
  -H "Content-Type: application/json" \\
  -d '{"workflow_id":"swiftinvoice-send","data":{"customer_id":"cus_123"}}'`}
          </RevealWrapper>

          <p className="mt-6">
            New here? Follow the <Link href="/docs/getting-started" className="underline hover:text-primary">5-minute guide</Link>{' '}
            to generate an API key, run your first workflow, and inspect the results in your DossX dashboard.
          </p>
        </div>
      </section>

      {/* ────────────────── GUIDES GRID ────────────────── */}
      <section className="pb-20 md:pb-24 lg:pb-[100px]">
        <div className="container">
          <RevealWrapper as="h2" className="mb-10 text-3xl font-medium">
            Dive Deeper
          </RevealWrapper>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Core Concepts */}
            <RevealWrapper as="div" className="border p-6">
              <Image src="/images/docs/concepts.png" alt="Core Concepts" width={64} height={64} />
              <h3 className="mb-2 mt-4 text-xl font-medium">Core Concepts</h3>
              <p className="mb-4 text-sm text-secondary/80">
                Workflows, product licenses, run counts, AI token usage—the mental model behind DossX.
              </p>
              <Link href="/docs/concepts" className="underline hover:text-primary">
                Read →{' '}
              </Link>
            </RevealWrapper>

            {/* Product Guides */}
            <RevealWrapper as="div" className="border p-6">
              <Image src="/images/docs/guides.png" alt="Product Guides" width={64} height={64} />
              <h3 className="mb-2 mt-4 text-xl font-medium">Product Guides</h3>
              <p className="mb-4 text-sm text-secondary/80">
                Step-by-step tutorials for SwiftInvoice, SwiftBuild, SwiftWatch, and Chatbot Integration.
              </p>
              <Link href="/docs/guides" className="underline hover:text-primary">
                Explore →{' '}
              </Link>
            </RevealWrapper>

            {/* API Reference */}
            <RevealWrapper as="div" className="border p-6">
              <Image src="/images/docs/api.png" alt="API Reference" width={64} height={64} />
              <h3 className="mb-2 mt-4 text-xl font-medium">API Reference</h3>
              <p className="mb-4 text-sm text-secondary/80">
                Auto-generated, versioned OpenAPI specs with live examples.
              </p>
              <Link href="/docs/api" className="underline hover:text-primary">
                View API →{' '}
              </Link>
            </RevealWrapper>

            {/* SDKs & Samples */}
            <RevealWrapper as="div" className="border p-6">
              <Image src="/images/docs/sdk.png" alt="SDKs" width={64} height={64} />
              <h3 className="mb-2 mt-4 text-xl font-medium">SDKs & Samples</h3>
              <p className="mb-4 text-sm text-secondary/80">
                Copy-paste starter kits in Node, Python, and PHP, plus Postman collections.
              </p>
              <Link href="https://github.com/dossx/examples" target="_blank" className="underline hover:text-primary">
                GitHub →{' '}
              </Link>
            </RevealWrapper>

            {/* Security & Compliance */}
            <RevealWrapper as="div" className="border p-6">
              <Image src="/images/docs/security.png" alt="Security" width={64} height={64} />
              <h3 className="mb-2 mt-4 text-xl font-medium">Security & Compliance</h3>
              <p className="mb-4 text-sm text-secondary/80">
                Encryption, SOC 2 roadmap, data-residency options, and incident response.
              </p>
              <Link href="/security" className="underline hover:text-primary">
                Learn more →{' '}
              </Link>
            </RevealWrapper>

            {/* Changelog */}
            <RevealWrapper as="div" className="border p-6">
              <Image src="/images/docs/changelog.png" alt="Changelog" width={64} height={64} />
              <h3 className="mb-2 mt-4 text-xl font-medium">Changelog</h3>
              <p className="mb-4 text-sm text-secondary/80">
                Track new endpoints, breaking changes, and feature drops—updated weekly.
              </p>
              <Link href="/changelog" className="underline hover:text-primary">
                Changelog →{' '}
              </Link>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ────────────────── NEED HELP CTA ────────────────── */}
      <section className="bg-secondary py-16 text-center text-backgroundBody">
        <h2 className="mb-4 text-3xl font-medium">Need help or spot a typo?</h2>
        <p className="mb-8">
          Open an issue on&nbsp;
          <Link href="https://github.com/dossx/docs" target="_blank" className="underline">
            GitHub
          </Link>{' '}
          or ping us in the&nbsp;
          <Link href="/community" className="underline">
            community Slack
          </Link>
          .
        </p>
        <Link href="/contact" className="rv-button rv-button-white">
          <div className="rv-button-top">
            <span>Contact Support</span>
          </div>
          <div className="rv-button-bottom">
            <span>Contact Support</span>
          </div>
        </Link>
      </section>
    </LayoutOne>
  );
};

export default DocsHome;