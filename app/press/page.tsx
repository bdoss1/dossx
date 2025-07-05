

import LayoutOne from '@/components/shared/LayoutOne';
import PageHero from '@/components/shared/PageHero';
import RevealWrapper from '@/components/animation/RevealWrapper';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Press & Media Kit — DossX',
};

const PressPage = () => {
  return (
    <LayoutOne>
      {/* Hero */}
      <PageHero
        title="Press &"
        italicTitle="Media Kit"
        badgeTitle="Press"
        description="Everything you need to tell the DossX story—logos, product shots, brand guidelines, and fast facts."
        scale
      />

      {/* Main content */}
      <section className="relative overflow-hidden pb-14 pt-14 md:pb-20 md:pt-20 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
        <div className="container">

          {/* Quick Facts */}
          <RevealWrapper as="div" className="mb-16">
            <h2 className="mb-6 text-3xl font-medium">Fast Facts</h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <li><strong>Founded:</strong> 2025, Dallas, TX</li>
              <li><strong>Founder & CEO:</strong> Baron “Swift” Doss</li>
              <li><strong>Flagship Products:</strong> SwiftInvoice · SwiftBuild · SwiftWatch · AI Chatbot Integration</li>
              <li><strong>Funding:</strong> Bootstrapped (Seed round planned 2025-Q4)</li>
              <li><strong>Mission:</strong> Automate the busywork so humans can create.</li>
              <li><strong>Tagline:</strong> Code, Automate, Scale.</li>
            </ul>
          </RevealWrapper>

          {/* Brand Assets */}
          <RevealWrapper as="div" className="mb-16">
            <h2 className="mb-6 text-3xl font-medium">Brand Assets</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Logo */}
              <div className="border p-6">
                <Image src="/images/dossx_logo.png" alt="DossX logo" width={320} height={80} />
                <Link
                  href="/files/dossx-logo-pack.zip"
                  className="rv-button rv-button-secondary mt-4 inline-block"
                  download
                >
                  Download Logo Pack
                </Link>
              </div>

              {/* Product Shots */}
              <div className="border p-6">
                <Image src="/images/brand/swiftinvoice-screenshot.png" alt="SwiftInvoice screenshot" width={320} height={200} />
                <Link
                  href="/files/dossx-product-images.zip"
                  className="rv-button rv-button-secondary mt-4 inline-block"
                  download
                >
                  Product Images
                </Link>
              </div>

              {/* Brand Guide */}
              <div className="border p-6">
                <Image src="/images/brand/brand-guidelines.png" alt="Brand Guidelines" width={320} height={200} />
                <Link
                  href="/files/dossx-brand-guidelines.pdf"
                  className="rv-button rv-button-secondary mt-4 inline-block"
                  download
                >
                  Brand Guidelines (PDF)
                </Link>
              </div>
            </div>
          </RevealWrapper>

          {/* Press Contact */}
          <RevealWrapper as="div" className="mb-4">
            <h2 className="mb-6 text-3xl font-medium">Press Contact</h2>
            <p>
              For interviews, quotes, or additional assets, please reach out to our media team.
            </p>
            <p className="mt-2">
              <strong>Email:</strong>{' '}
              <Link href="mailto:press@dossx.com" className="underline hover:text-primary">
                press@dossx.com
              </Link>
            </p>
            <p>
              <strong>Phone:</strong>{' '}
                <a href="tel:+12145550170" className="underline hover:text-primary">
                  +1&nbsp;(214)&nbsp;555-0170
                </a>
            </p>
            <p>
              <strong>Address:</strong> 1919 McKinney Ave, Suite 1000, Dallas, TX 75201
            </p>
          </RevealWrapper>
        </div>
      </section>
    </LayoutOne>
  );
};

export default PressPage;