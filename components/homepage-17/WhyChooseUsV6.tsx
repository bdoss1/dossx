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
              <span className="rv-badge-text">Why Choose DossX</span>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear lg:leading-[1.1]">
                Smart, scalable&nbsp;
                <i className="font-instrument">AI</i>
                &nbsp;solutions
              </h2>
            </TextAppearAnimation>
          </div>

          <div className="w-full md:w-[40%] md:max-w-72 md:self-end lg:max-w-[470px]">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg md:place-self-end md:text-right">
                From instant-value products to enterprise-grade security, DossX delivers everything you need to automate, analyze, and scale—fast.
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

        {/* ─── Solution Cards ─── */}
        <article>
          <RevealWrapper className="mb-[30px] flex flex-col gap-[30px] max-lg:flex-wrap md:flex-row">
            {/* Plug-and-Play Products */}
            <RevealWrapper className="flex-1 border px-[30px] py-20 dark:border-dark">
              <h5 className="mb-2.5 mt-5 lg:text-[35px]">Plug-and-Play Products</h5>
              <p className="text-base leading-[1.6]">
                Out-of-the-box apps—SwiftInvoice, SwiftBuild, SwiftWatch—that deliver value on Day 1 without heavy dev lift.
              </p>
            </RevealWrapper>

            {/* AI-Powered Automations */}
            <RevealWrapper className="flex-1 border px-[30px] py-20 dark:border-dark">
              <h5 className="mb-2.5 mt-5 lg:text-[35px]">AI-Powered Automations</h5>
              <p className="text-base leading-[1.6]">
                AI-driven workflows and multi-agent orchestration that erase busywork and keep operations running 24 / 7.
              </p>
            </RevealWrapper>

            {/* Real-Time Data Insights */}
            <RevealWrapper className="flex-1 border px-[30px] py-20 dark:border-dark">
              <h5 className="mb-2.5 mt-5 lg:text-[35px]">Real-Time Data Insights</h5>
              <p className="text-base leading-[1.6]">
                Built-in dashboards and predictive analytics that surface trends, churn risks, and bottlenecks before they bite.
              </p>
            </RevealWrapper>
          </RevealWrapper>

          <RevealWrapper className="flex flex-col gap-[30px] md:flex-row">
            {/* Enterprise-Grade Security */}
            <RevealWrapper className="min-h-[322px] flex-1 border px-[30px] py-20 dark:border-dark">
              <h5 className="mb-2.5 mt-5 lg:text-[35px]">Enterprise-Grade Security</h5>
              <p className="text-base leading-[1.6]">
                SOC 2–ready controls, end-to-end encryption, and role-based access—so compliance teams sleep soundly.
              </p>
            </RevealWrapper>

            {/* Launch in Days, Not Months */}
            <RevealWrapper className="min-h-[322px] flex-1 border px-[30px] py-20 dark:border-dark">
              <h5 className="mb-2.5 mt-5 lg:text-[35px]">Launch in Days, Not Months</h5>
              <p className="text-base leading-[1.6]">
                Pre-wired integrations and no-code configuration let you ship new workflows—or entire products—in a single sprint.
              </p>
            </RevealWrapper>
          </RevealWrapper>
        </article>
      </div>
    </section>
  );
};

export default WhyChooseUsV6;