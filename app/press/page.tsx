import LayoutOne from '@/components/shared/LayoutOne';
import PageHero from '@/components/shared/PageHero';
import RevealWrapper from '@/components/animation/RevealWrapper';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Press & Media Kit — DossX',
  description:
    'Logos, product shots, brand guidelines, fast facts, and press contacts for DossX — makers of Voxia (AI Voice), QuotaX (AI Sales), and Synapse (Workflow Intelligence).',
};

const PressPage = () => {
  return (
    <LayoutOne>
      {/* Hero */}
      <PageHero
        title="Press &"
        italicTitle="Media Kit"
        badgeTitle="Press"
        description="Everything you need to tell the DossX story—logos, product shots, brand guidelines, boilerplate, and fast facts."
        scale
      />

      {/* Main content */}
      <section className="relative overflow-hidden pb-14 pt-14 md:pb-20 md:pt-20 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
        <div className="container">

          {/* Fast Facts */}
          <RevealWrapper as="div" className="mb-16">
            <h2 className="mb-6 text-3xl font-medium">Fast Facts</h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <li><strong>Founded:</strong> 2025 · Dallas, Texas</li>
              <li><strong>Founder & CEO:</strong> Baron Doss</li>
              <li><strong>Flagship Products:</strong> Voxia (AI Voice) · QuotaX (AI Sales) · Synapse (Workflow Intelligence)</li>
              <li><strong>Customers:</strong> SMB & Mid-Market across services, healthcare, legal, real estate</li>
              <li><strong>Mission:</strong> Make AI practical—measurable business outcomes in days, not months.</li>
              <li><strong>Tagline:</strong> Build with AI. Win in real life.</li>
            </ul>
          </RevealWrapper>

          {/* Brand Boilerplate */}
          <RevealWrapper as="div" className="mb-16">
            <h2 className="mb-3 text-3xl font-medium">Company Boilerplate</h2>
            <p className="text-colorText">
              DossX builds practical AI for real businesses. Our product suite includes{' '}
              <b>Voxia</b>, a 24/7 AI voice concierge; <b>QuotaX</b>, an AI-powered sales engine; and{' '}
              <b>Synapse</b>, a workflow intelligence hub that connects data and automates decisions across
              the stack. Founded by technologist and builder <b>Baron Doss</b>, DossX helps teams deploy
              production-grade AI in days—not months—integrating with the systems they already use. The result:
              faster response times, higher conversion, and operations that scale without headcount.
            </p>
          </RevealWrapper>

          {/* Product One-liners */}
          <RevealWrapper as="div" className="mb-16">
            <h2 className="mb-6 text-3xl font-medium">Products at a Glance</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 dark:bg-secondary">
                <h3 className="mb-2 text-xl font-semibold">Voxia — AI Voice Concierge</h3>
                <p className="text-colorText">
                  Natural-sounding voice on phone and web that answers questions, books appointments,
                  checks orders, and hands off to humans in Slack/Teams. Powered by OpenAI + ElevenLabs.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 dark:bg-secondary">
                <h3 className="mb-2 text-xl font-semibold">QuotaX — AI Sales Engine</h3>
                <p className="text-colorText">
                  Captures and qualifies leads, runs adaptive sequences, syncs with CRMs, and books meetings automatically.
                  Designed to lift conversion without adding headcount.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 dark:bg-secondary">
                <h3 className="mb-2 text-xl font-semibold">Synapse — Workflow Intelligence</h3>
                <p className="text-colorText">
                  Connects data across apps, triggers actions, and surfaces insights—turning disconnected tools
                  into one intelligent system of record for decisions.
                </p>
              </div>
            </div>
          </RevealWrapper>

          {/* Brand Assets */}
          <RevealWrapper as="div" className="mb-16">
            <h2 className="mb-6 text-3xl font-medium">Brand Assets</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Logos */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 dark:bg-secondary">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/dossx_logo.png"
                    alt="DossX logo"
                    width={320}
                    height={80}
                    className="h-auto w-auto"
                    priority
                  />
                </div>
                <p className="mt-3 text-sm text-white/70">
                  Horizontal logo (dark/light), symbol mark, and safe-use rules.
                </p>
                <Link
                  href={process.env.NEXT_PUBLIC_PRESS_LOGO_PACK || '/files/dossx-logo-pack.zip'}
                  className="rv-button rv-button-secondary mt-4 inline-block"
                  download
                >
                  <div className="rv-button-top"><span>Download Logo Pack</span></div>
                  <div className="rv-button-bottom"><span>Download Logo Pack</span></div>
                </Link>
              </div>

              {/* Product Shots */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 dark:bg-secondary">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/brand/voxia-shot.png"
                    alt="Voxia product screenshot"
                    width={320}
                    height={200}
                    className="h-auto w-auto"
                  />
                </div>
                <p className="mt-3 text-sm text-white/70">
                  Voxia, QuotaX, and Synapse UI screens for editorial use.
                </p>
                <Link
                  href={process.env.NEXT_PUBLIC_PRESS_PRODUCT_SHOTS || '/files/dossx-product-images.zip'}
                  className="rv-button rv-button-secondary mt-4 inline-block"
                  download
                >
                  <div className="rv-button-top"><span>Download Product Images</span></div>
                  <div className="rv-button-bottom"><span>Download Product Images</span></div>
                </Link>
              </div>

              {/* Brand Guide */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 dark:bg-secondary">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/brand/brand-guidelines.png"
                    alt="DossX brand guidelines cover"
                    width={320}
                    height={200}
                    className="h-auto w-auto"
                  />
                </div>
                <p className="mt-3 text-sm text-white/70">
                  Usage rules, typography, color, spacing, and voice.
                </p>
                <Link
                  href={process.env.NEXT_PUBLIC_PRESS_BRAND_GUIDE || '/files/dossx-brand-guidelines.pdf'}
                  className="rv-button rv-button-secondary mt-4 inline-block"
                  download
                >
                  <div className="rv-button-top"><span>Download Brand Guidelines (PDF)</span></div>
                  <div className="rv-button-bottom"><span>Download Brand Guidelines (PDF)</span></div>
                </Link>
              </div>
            </div>
          </RevealWrapper>

          {/* Founder & Team Media (optional section) */}
          <RevealWrapper as="div" className="mb-16">
            <h2 className="mb-6 text-3xl font-medium">Founder & Team Media</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 dark:bg-secondary">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/brand/founder-headshot.jpg"
                    alt="Baron “Swift” Doss headshot"
                    width={320}
                    height={320}
                    className="h-auto w-auto rounded-xl object-cover"
                  />
                </div>
                <p className="mt-3 text-sm text-white/70">
                  Founder & CEO headshot and short bio.
                </p>
                <Link
                  href={process.env.NEXT_PUBLIC_PRESS_HEADSHOTS || '/files/dossx-headshots.zip'}
                  className="rv-button rv-button-secondary mt-4 inline-block"
                  download
                >
                  <div className="rv-button-top"><span>Download Headshots</span></div>
                  <div className="rv-button-bottom"><span>Download Headshots</span></div>
                </Link>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 dark:bg-secondary">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/brand/press-collage.png"
                    alt="DossX product collage"
                    width={320}
                    height={200}
                    className="h-auto w-auto"
                  />
                </div>
                <p className="mt-3 text-sm text-white/70">
                  Lifestyle and product collage for articles and features.
                </p>
                <Link
                  href={process.env.NEXT_PUBLIC_PRESS_MEDIA_KIT || '/files/dossx-press-kit.zip'}
                  className="rv-button rv-button-secondary mt-4 inline-block"
                  download
                >
                  <div className="rv-button-top"><span>Download Full Press Kit</span></div>
                  <div className="rv-button-bottom"><span>Download Full Press Kit</span></div>
                </Link>
              </div>
            </div>
          </RevealWrapper>

          {/* Press Contact */}
          <RevealWrapper as="div" className="mb-4">
            <h2 className="mb-6 text-3xl font-medium">Press Contact</h2>
            <p>For interviews, quotes, speaking requests, or additional assets, please contact our media team.</p>
            <p className="mt-2">
              <strong>Email:</strong>{' '}
              <Link href="mailto:press@dossx.com" className="underline hover:text-primary">
                press@dossx.com
              </Link>
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <Link href="tel:+14695632601" className="underline hover:text-primary">
                +1&nbsp;(469)&nbsp;563-2601
              </Link>
            </p>
          </RevealWrapper>
        </div>
      </section>
    </LayoutOne>
  );
};

export default PressPage;