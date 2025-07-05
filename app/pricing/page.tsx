import PricingCard from '@/components/homepage-07/PricingCard'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'

export const metadata = {
  title: 'Pricing',
}

const PricingPage = () => {
  return (
    <LayoutOne>
      <PageHero
          title="Pricing"
          italicTitle="Plans"
          badgeTitle="Pricing"
          description="One subscription, two superpowers: a finished DossX product and the AI-powered automations that run it. Clear rates, zero long-term contracts—scale whenever growth demands."
          scale
      />
      <PricingCard />
      <CTA>
      Let’s build something extraordinary.
      <CtaImageSlider
        slides={[
          { id: '1', img: '/images/agent/14.png' },
          { id: '2', img: '/images/agent/16.png' },
          { id: '3', img: '/images/agent/19.png' },
        ]}
      />
      <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">
  Start the conversation today.
      </i>
    </CTA>
    </LayoutOne>
  )
}

export default PricingPage
