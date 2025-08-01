import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'
import HeroGradientAnimationV2 from '../shared/HeroGradientAnimationV2'

const HeroV17 = () => {
  return (
    <section className="relative overflow-hidden pb-20 pt-[137px] md:pb-[100px] md:pt-[160px] xl:pt-[180px]">
      <HeroGradientAnimation />
      <RevealWrapper className="container">
        <div className="text-center">
          {/*<div className="rv-badge mb-3">
            <span className="rv-badge-text">Where Innovation Meets Execution</span>
          </div> */}
          <h1 className="mb-3 lg:leading-[1.08]">Accelerate Your Business with AI-Powered Automation</h1>

          
         
          <p className="mx-auto mb-8 max-w-xl md:mb-14 lg:max-w-[750px] xl:mb-[76px]">
  At DossX, we turn your repetitive tasks and complex processes into intelligent, self-running systems—so you can spend less time on busywork and more on growth. From seamless AI-powered agents to enterprise-grade automation, our solutions get you live in hours, not months.
</p>
          <ul className="flex list-none items-center justify-center gap-4 md:gap-6">
            <li className="mx-auto block w-[90%] md:inline-block md:w-auto">
              <Link href="/contact" className="rv-button rv-button-primary block md:inline-block">
                <div className="rv-button-top">
                  <span>Launch Your Workflow</span>
                </div>
                <div className="rv-button-bottom">
                  <span className="text-nowrap">Launch Your Workflow</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default HeroV17
