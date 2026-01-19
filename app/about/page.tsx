import AboutHero from '@/components/aboutpage-02/AboutHero'
import HeroAbout from '@/components/homepage-07/HeroAbout'
import CTA from '@/components/shared/CTA'
import LayoutOne from '@/components/shared/LayoutOne'
import SkewMarquee from '@/components/shared/SkewMarquee'
import Video from '@/components/shared/Video'

export const metadata = {
  title: 'About DossX | Intelligent Digital Ecosystems',
  description: 'DossX builds intelligent digital ecosystems combining custom websites, proprietary CMS, AI workflows, and AI-powered SaaS solutions for businesses that expect more from technology.',
}

const AboutPage = () => {
  return (
    <LayoutOne>
      <AboutHero />
      <Video />
      <HeroAbout spacingTop="pt-10 sm:pt-16 md:pt-[100px] mb-10 lg:mb-20" />
      <SkewMarquee />
      <CTA buttonText="Request a Consultation">
        Ready to build your intelligent digital ecosystem?
      </CTA>
    </LayoutOne>
  )
}

export default AboutPage
