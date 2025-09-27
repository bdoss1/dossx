import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'
// import HeroGradientAnimationV2 from '../shared/HeroGradientAnimationV2'

const HeroV17 = () => {
  return (
    <section className="relative overflow-hidden pb-20 pt-[137px] md:pb-[100px] md:pt-[160px] xl:pt-[180px]">
      { /* <HeroGradientAnimation /> */}
      <RevealWrapper className="container">
        <div className="text-center">
          {/* Badge */}
          <div className="rv-badge mb-4 inline-flex items-center justify-center">
            <span className="rv-badge-text">AI SaaS + Consulting</span>
          </div>

          {/* Headline */}
          <h1 className="mb-3 lg:leading-[1.08]">
            Build, Automate, and Scale with DossX AI
          </h1>

          {/* Subhead */}
          <p className="mx-auto mb-8 max-w-xl md:mb-14 lg:max-w-[750px] xl:mb-[76px]">
            We ship AI-powered products and hands-on consulting to turn busywork into growth. 
            Launch a 24/7 <strong>VoiceAgent</strong>, automate your funnel with <strong>SalesAgent</strong>, 
            and keep data clean with <strong>DataAgent</strong>—all backed by strategic guidance from the DossX team.
          </p>

          {/* CTAs */}
          <ul className="flex list-none items-center justify-center gap-4 md:gap-6">
            <li className="mx-auto block w-[90%] md:inline-block md:w-auto">
              <Link href="/pricing" className="rv-button rv-button-primary block md:inline-block">
                <div className="rv-button-top">
                  <span>Try the VoiceAgent</span>
                </div>
                <div className="rv-button-bottom">
                  <span className="text-nowrap">Try the VoiceAgent</span>
                </div>
              </Link>
            </li>

            <li className="mx-auto block w-[90%] md:inline-block md:w-auto">
              <Link href="/contact" className="rv-button rv-button-secondary block md:inline-block">
                <div className="rv-button-top">
                  <span>Book an AI Audit</span>
                </div>
                <div className="rv-button-bottom">
                  <span className="text-nowrap">Book an AI Audit</span>
                </div>
              </Link>
            </li>
          </ul>

          {/* Micro copy */}
          <p className="mt-6 text-sm text-neutral-400">
            Powered by OpenAI. Secure, SOC-2 aligned. Live in days, not months.
          </p>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default HeroV17