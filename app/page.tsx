import ClientSuccessStories from '@/components/homepage-17/ClientSuccessStories'
import DawnloadOurApp from '@/components/homepage-17/DawnloadOurApp'
import HeroV17 from '@/components/homepage-17/HeroV17'
import MarqueeV3 from '@/components/homepage-17/MarqueeV3'
import ServicesV15 from '@/components/homepage-17/ServicesV15'
import SocialProof from '@/components/homepage-17/SocialProof'
import WhyChooseUsV6 from '@/components/homepage-17/WhyChooseUsV6'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import FaqV2 from '@/components/shared/FaqV2'
import LayoutTwo from '@/components/shared/LayoutTwo'
import Agent from '@/components/agent/VoiceAgent'
import VoiceAgent from '@/components/agent/VoiceAgent'

export const metadata = {
  title: 'DossX | Custom Websites, AI Workflows & AI-Powered SaaS Solutions',
  description: 'DossX builds intelligent digital platforms: custom websites, proprietary CMS, managed hosting, AI workflows, and AI-powered SaaS solutions engineered for growth.',
}

const homepage17 = () => {
  return (
    <LayoutTwo>
      <HeroV17 />
      <SocialProof />
      <ServicesV15 />
      <WhyChooseUsV6 />
      <FaqV2 titleChange />
      <CTA buttonText="Start Your Project">
        Your business deserves more than a website. It deserves intelligence.
      </CTA>



    </LayoutTwo>
  )
}

export default homepage17
