'use client';
import Link from 'next/link';
import { useState } from 'react';

import useRevealAnimation from '@/hooks/useRevealAnimation';
import RevealWrapper from '../animation/RevealWrapper';
import RevealWrapperV2 from '../animation/RevealWrapperV2';
import TextAppearAnimation from '../animation/TextAppearAnimation';

/* ——— DossX Plans ——— */
const starterFeatures = [
  { list: '1 DossX product license', feature: true },
  { list: '2,500 automated runs / mo', feature: true },
  { list: 'Email support', feature: true },
  { list: 'AI usage billed at cost', feature: true },
  { list: 'Dedicated Slack channel', feature: false },
  { list: 'Live strategy sessions', feature: false },
];

const growthFeatures = [
  { list: 'Up to 3 product licenses', feature: true },
  { list: '20,000 automated runs / mo', feature: true },
  { list: 'Priority chat + email support', feature: true },
  { list: 'Dedicated Slack channel', feature: true },
  { list: '1 hr live support / mo', feature: true },
  { list: 'Quarterly strategy session', feature: true },
  { list: 'Fractional-CTO advisory hours', feature: false },
];

const scaleFeatures = [
  { list: 'Unlimited products & runs', feature: true },
  { list: '24/7 premium support', feature: true },
  { list: 'Dedicated Slack + Zoom war-room', feature: true },
  { list: 'Fractional-CTO advisory hours', feature: true },
  { list: 'Custom AI fine-tuning & hosting', feature: true },
  { list: 'Annual security review (SOC 2-ready)', feature: true },
];

interface PricingProps {
  showHeader?: boolean;
}

const PricingCard = ({ showHeader = false }: PricingProps) => {
  const [monthly, setMonthly] = useState(true);
  const elementRef = useRevealAnimation();

  /* helpers */
  const price = (m: number, y: number) => (monthly ? `$${m} / mo` : `$${y} / yr`);
  const renderList = (arr: typeof starterFeatures) =>
    arr.map((item, i) => (
      <li
        key={i}
        className="flex gap-2 text-[17px] leading-[1.5] text-secondary/70 dark:text-backgroundBody/70"
      >
        {item.feature ? '✔' : '—'} {item.list}
      </li>
    ));

  return (
    <section
      className={`${
        !showHeader
          ? 'pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]'
          : 'pb-14 pt-28 md:pb-20 md:pt-48 lg:pb-[100px] lg:pt-[200px]'
      }`}
    >
      <div className="container">
        {/* header */}
        {showHeader && (
          <div className="text-center">
            <div ref={elementRef} className="rv-badge mb-3.5 md:mb-8">
              <span className="rv-badge-text">Pricing</span>
            </div>
            <TextAppearAnimation>
              <h2 className="text-appear mx-auto mb-5 max-w-3xl md:mb-8">
                One subscription, two superpowers: a finished SaaS product <br />+ the automations to run it.
              </h2>
            </TextAppearAnimation>
          </div>
        )}

        {/* billing toggle */}
        <RevealWrapper className="flex flex-col items-center gap-6 md:flex-row">
          <div className="rounded-full border-4 border-primary/20 p-[2px]">
            <div
              onClick={() => setMonthly(!monthly)}
              className={`relative h-12 w-[177px] cursor-pointer rounded-full bg-primary p-[3px] ${
                monthly ? '' : 'yearly'
              }`}
            >
              <div className="toggle-slider absolute h-[calc(97%-4px)] w-[calc(50%-1px)] rounded-full bg-black" />
              <div className="relative flex h-full">
                <div className={`flex flex-1 items-center justify-center text-sm font-medium text-secondary ${monthly && 'active'}`}>
                  Monthly
                </div>
                <div className={`flex flex-1 items-center justify-center text-sm font-medium text-secondary ${!monthly && 'active'}`}>
                  Yearly
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>

        {/* cards */}
        <div className="mt-10 grid justify-center gap-10 md:mt-20 lg:grid-cols-3">
          {/* Starter */}
          <RevealWrapperV2 className="relative border border-secondary px-8 pb-10 pt-8 dark:border-backgroundBody">
            <h6 className="mb-4 text-2xl">Starter</h6>
            <p className="text-base">
              Perfect for founders launching their first automated product workflow.
            </p>
            <div className="py-8">
              <p className="text-6xl text-secondary dark:text-backgroundBody">
                {price(39, 429)}
              </p>
              <p className="text-sm">Cancel anytime.</p>
            </div>
            <Link href="/contact" className="rv-button rv-button-secondary w-full text-center">
              GET STARTED
            </Link>
            <ul className="mt-8 space-y-2 pl-3">{renderList(starterFeatures)}</ul>
          </RevealWrapperV2>

          {/* Growth */}
          <RevealWrapperV2 className="relative border border-primary px-8 pb-10 pt-8">
            <h6 className="mb-4 text-2xl">Growth</h6>
            <p className="text-base">
              For teams scaling multiple products and needing live monthly support.
            </p>
            <div className="py-8">
              <p className="text-6xl text-secondary dark:text-backgroundBody">
                {price(149, 1599)}
              </p>
              <p className="text-sm">Cancel anytime.</p>
            </div>
            <Link href="/contact" className="rv-button rv-button-white w-full text-center">
              UPGRADE NOW
            </Link>
            <ul className="mt-8 space-y-2 pl-3">{renderList(growthFeatures)}</ul>
          </RevealWrapperV2>

          {/* Scale */}
          <RevealWrapper className="relative border px-8 pb-10 pt-8 dark:border-dark">
            <h6 className="mb-4 text-2xl">Scale</h6>
            <p className="text-base">
              Enterprise-grade capacity, custom AI hosting, and Fractional CTO hours.
            </p>
            <div className="py-8">
              <p className="text-6xl text-secondary dark:text-backgroundBody">Custom</p>
              <p className="text-sm">Billed annually · Tailored SLA</p>
            </div>
            <Link href="/contact" className="rv-button rv-button-secondary w-full text-center">
              BOOK DISCOVERY CALL
            </Link>
            <ul className="mt-8 space-y-2 pl-3">{renderList(scaleFeatures)}</ul>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
};

export default PricingCard;