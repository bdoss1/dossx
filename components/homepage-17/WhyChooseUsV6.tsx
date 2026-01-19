'use client';

import Link from 'next/link';
import RevealWrapper from '../animation/RevealWrapper';
import TextAppearAnimation from '../animation/TextAppearAnimation';

const WhyChooseUsV6 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        {/* ─── Header Copy ─── */}
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-24 lg:justify-between">
          <div className="md:w-[60%] md:self-start">
            <RevealWrapper className="rv-badge mb-2">
              <span className="rv-badge-text">Powered by Intelligence</span>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear lg:leading-[1.1]">
                Digital platforms that&nbsp;<i className="font-instrument">work</i>&nbsp;while you sleep
              </h2>
            </TextAppearAnimation>
          </div>

          <div className="w-full md:w-[40%] md:max-w-72 md:self-end lg:max-w-[470px]">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg md:place-self-end md:text-right">
                DossX integrates automation and AI directly into your digital foundation, creating systems that operate continuously behind the scenes to save time, reduce manual work, and increase efficiency.
              </p>
            </TextAppearAnimation>

            <RevealWrapper className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/contact" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>Start Your Project</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>Start Your Project</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>

        {/* ─── Core Service Cards ─── */}
        <article>
          <RevealWrapper className="mb-[30px] flex flex-col gap-[30px] max-lg:flex-wrap md:flex-row">
            {/* Web Design & Development */}
            <RevealWrapper className="flex-1 border px-[30px] py-20 dark:border-dark">
              <h5 className="mb-2.5 mt-5 lg:text-[35px]">Web Design & Development</h5>
              <p className="text-base leading-[1.6]">
                High-performance digital experiences designed to engage users and convert traffic into revenue. Custom UI/UX, mobile-first development, and SEO-optimized structure.
              </p>
              <div className="mt-5">
                <Link href="/services" className="underline hover:text-primary">
                  Explore Web Services →
                </Link>
              </div>
            </RevealWrapper>

            {/* Proprietary CMS */}
            <RevealWrapper className="flex-1 border px-[30px] py-20 dark:border-dark">
              <h5 className="mb-2.5 mt-5 lg:text-[35px]">Proprietary CMS Platform</h5>
              <p className="text-base leading-[1.6]">
                A flexible publishing engine created by DossX to give businesses full control without the limits of traditional builders. Modular content, scalable architecture, and fast performance.
              </p>
              <div className="mt-5">
                <Link href="/services#cms" className="underline hover:text-primary">
                  Explore CMS →
                </Link>
              </div>
            </RevealWrapper>

            {/* AI Workflows */}
            <RevealWrapper className="flex-1 border px-[30px] py-20 dark:border-dark">
              <h5 className="mb-2.5 mt-5 lg:text-[35px]">AI Workflows & Automation</h5>
              <p className="text-base leading-[1.6]">
                Intelligent backend workflows that eliminate repetitive tasks and streamline operations. Automated lead capture, internal notifications, and workflow-driven system integration.
              </p>
              <div className="mt-5">
                <Link href="/services#ai-workflows" className="underline hover:text-primary">
                  Explore AI Workflows →
                </Link>
              </div>
            </RevealWrapper>
          </RevealWrapper>

          {/* ─── Platform Advantages ─── */}
          <RevealWrapper className="flex flex-col gap-[30px] md:flex-row">
            {/* AI-Powered SaaS */}
            <RevealWrapper className="min-h-[322px] flex-1 border px-[30px] py-20 dark:border-dark">
              <h5 className="mb-2.5 mt-5 lg:text-[35px]">AI-Powered SaaS Solutions</h5>
              <p className="text-base leading-[1.6]">
                Custom software products designed to automate services, centralize operations, and scale business performance. Workflow-driven platforms, AI-assisted tools, and operational dashboards.
              </p>
            </RevealWrapper>

            {/* Managed Hosting */}
            <RevealWrapper className="min-h-[322px] flex-1 border px-[30px] py-20 dark:border-dark">
              <h5 className="mb-2.5 mt-5 lg:text-[35px]">Managed Hosting & Support</h5>
              <p className="text-base leading-[1.6]">
                Secure, high-performance environments ensuring your platform stays fast, protected, and optimized. Uptime monitoring, security management, and ongoing support.
              </p>
            </RevealWrapper>

            {/* Performance-First */}
            <RevealWrapper className="min-h-[322px] flex-1 border px-[30px] py-20 dark:border-dark">
              <h5 className="mb-2.5 mt-5 lg:text-[35px]">Performance-First Delivery</h5>
              <p className="text-base leading-[1.6]">
                Core Web Vitals optimized builds that load fast and convert better. Lightning-fast performance across devices with scalable architecture for growth.
              </p>
            </RevealWrapper>
          </RevealWrapper>
        </article>
      </div>
    </section>
  );
};

export default WhyChooseUsV6;
