'use client';

import getMarkDownData from '@/utils/GetMarkDownData';
import Link from 'next/link';
import RevealWrapper from '../animation/RevealWrapper';
import TextAppearAnimation02 from '../animation/TextAppearAnimation02';

type ServicesType = {
  slug: string;
  content: string;
  title?: string;
  description?: string;
  feature?: string[];
};

// ✅ Pull markdown from the correct directory
const loadedData = getMarkDownData('data/app-development') as ServicesType[];

const hrefFor = (slug: string) => `/services/${slug}`;

const ServicesV14 = () => {
  const hasServices = Array.isArray(loadedData) && loadedData.length > 0;

  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-20 md:flex-row md:items-center lg:justify-start">
          <div className="md:w-[60%]">
            <RevealWrapper className="rv-badge mb-3 md:mb-4">
              <span className="rv-badge-text">Solutions</span>
            </RevealWrapper>
            <TextAppearAnimation02>
              <h2>
                From Idea to Impact: AI Systems That Drive
                <br />
                <i className="font-instrument"> Real-World Results</i>
              </h2>
            </TextAppearAnimation02>
          </div>

          <div className="max-md:w-full md:w-[40%]">
            <p className="text-appear text-appear-2 max-w-lg max-md:text-justify md:place-self-end md:text-right">
              At DossX, we fuse cutting-edge AI with strategic execution to turn complex workflows into seamless growth — helping your business operate smarter, respond faster, and engage deeper.
            </p>
            <RevealWrapper as="ul" className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/services" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>Explore Our Solutions</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>Explore Our Solutions</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>
      </div>

      {/* === Services Grid (max 3 per row) === */}
      <div
        className="
          mx-auto grid gap-5 px-5
          sm:grid-cols-2
          xl:grid-cols-3
          [&>*]:border-y dark:[&>*]:border-y-dark
          xl:[&>*:not(:nth-child(3n))]:border-r
          dark:xl:[&>*:not(:nth-child(3n))]:border-r-dark
        "
      >
        {hasServices ? (
          loadedData.map((service) => {
            const title = service.title ?? service.slug.replace(/-/g, ' ');
            const desc =
              service.description ??
              'Discover how this DossX solution can streamline operations and drive measurable outcomes.';
            const features = Array.isArray(service.feature) ? service.feature : [];

            return (
              <RevealWrapper key={service.slug} className="group relative h-[500px] w-full overflow-hidden">
                {/* Front Face */}
                <div className="absolute flex h-full w-full translate-y-0 items-center justify-start opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
                  <h4 className="pl-7 max-sm:text-xl">{title}</h4>
                </div>

                {/* Hover Face */}
                <div className="absolute z-10 h-full w-full translate-y-full border-t border-primary bg-secondary p-8 transition-all duration-700 group-hover:inset-0 group-hover:translate-y-0 dark:bg-secondary">
                  <Link href={hrefFor(service.slug)}>
                    <div className="mb-[55px] flex items-center justify-between gap-1">
                      <h4 className="translate-y-5 text-primary opacity-0 transition-all delay-[240ms] duration-[800ms] group-hover:translate-y-0 group-hover:opacity-100 dark:text-backgroundBody max-sm:text-xl">
                        {title}
                      </h4>
                      <span className="translate-x-20 transition-all duration-1000 group-hover:translate-x-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                          <path d="M5 16H27" className="stroke-primary dark:stroke-backgroundBody" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M18 7L27 16L18 25" className="stroke-primary dark:stroke-backgroundBody" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>

                    <p className="translate-y-4 text-backgroundBody/70 opacity-0 transition-all delay-[340ms] duration-[800ms] group-hover:translate-y-0 group-hover:opacity-100 dark:text-backgroundBody/70">
                      {desc}
                    </p>

                    {features.length > 0 && (
                      <ul className="mt-6 translate-y-3 pl-4 opacity-0 transition-all delay-[440ms] duration-[800ms] group-hover:translate-y-0 group-hover:opacity-100">
                        {features.map((f) => (
                          <li key={f} className="list-disc text-base leading-relaxed text-backgroundBody/70 dark:text-backgroundBody/70">
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Link>
                </div>
              </RevealWrapper>
            );
          })
        ) : (
          <div className="col-span-full rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-sm text-white/70 dark:bg-secondary">
            No services found yet. Add markdown files to <code className="mx-1 rounded bg-black/30 px-1 py-0.5">/data/app-development</code> to populate this section.
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesV14;