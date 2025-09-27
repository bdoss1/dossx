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
  title: 'DossX | Future-Ready Apps & Automation',
}



const homepage17 = () => {
  return (
    <LayoutTwo>
   
      <HeroV17 />
      <SocialProof />
     {/* <MarqueeV3 /> */}
      {/*< <ClientSuccessStories /> */}
      <ServicesV15 />
      {/*<DawnloadOurApp /> */}
      <WhyChooseUsV6 />
      <FaqV2 titleChange />
      <CTA buttonText="Launch Now">
       Launch Your AI Workflow in Minutes.
      </CTA>
      <VoiceAgent />



    </LayoutTwo>
  )
}

export default homepage17
