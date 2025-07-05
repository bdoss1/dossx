import ServicesV14 from '@/components/homepage-16/ServicesV14'
import Process from '@/components/services-page/Process'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'

export const metadata = {
  title: 'Services ',
}

const ServicesPage = () => {
  return (
    <LayoutOne>
      <ServicesV14 />
      <Process />
      {/*
      <CTA>
        Chat
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/11.png' },
            { id: '2', img: '/images/agent/16.png' },
            { id: '3', img: '/images/agent/17.png' },
          ]}
        />
        with us.

      </CTA>{' '} */}
    </LayoutOne>
  )
}

export default ServicesPage
