import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'

const HeroV17 = () => {
  return (
    <section className="relative overflow-hidden pb-20 pt-[137px] md:pb-[100px] md:pt-[160px] xl:pt-[180px]">
      {/* <HeroGradientAnimation /> */}
      <RevealWrapper className="container">
        <div className="text-center">
          {/* Badge */}
          <div className="rv-badge mb-4 inline-flex items-center justify-center">
            <span className="rv-badge-text">AI Workflows + SaaS</span>
          </div>

          {/* Headline */}
          <h1 className="mb-3 lg:leading-[1.08]">
            AI-Powered Growth.
          </h1>

          {/* Subhead */}
          <p className="mx-auto mb-8 max-w-xl md:mb-14 lg:max-w-[800px] xl:mb-[76px]">
            DossX delivers intelligent automation, AI voice technology, and scalable SaaS solutions designed to power modern business growth.<br /><br />
            <span className="text-white/70">AI workflows, and scalable SaaS solutions — engineered for companies that refuse to move slow.</span>
          </p>

          {/* CTAs */}
          <ul className="flex list-none items-center justify-center gap-4 md:gap-6">
            <li className="mx-auto block w-[90%] md:inline-block md:w-auto">
              <Link href="/contact" className="rv-button rv-button-primary block md:inline-block">
                <div className="rv-button-top">
                  <span>Request a Consultation</span>
                </div>
                <div className="rv-button-bottom">
                  <span className="text-nowrap">Request a Consultation</span>
                </div>
              </Link>
            </li>

            <li className="mx-auto block w-[90%] md:inline-block md:w-auto">
              <Link href="/services" className="rv-button rv-button-secondary block md:inline-block">
                <div className="rv-button-top">
                  <span>Explore Solutions</span>
                </div>
                <div className="rv-button-bottom">
                  <span className="text-nowrap">Explore Solutions</span>
                </div>
              </Link>
            </li>
          </ul>

          {/* Micro copy */}
          <p className="mt-6 text-sm text-neutral-400">
            Performance-first builds. Secure infrastructure. Live in days, not months.
          </p>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default HeroV17
