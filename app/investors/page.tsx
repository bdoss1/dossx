import ContactForm from '@/components/contactpage/ContactForm'
import LayoutOne from '@/components/shared/LayoutOne'

export default function InvestorsPage() {
  return (
    <LayoutOne>
      <section className="pb-14 pt-32 md:pb-16 md:pt-36 lg:pb-[88px] lg:pt-[200px] xl:pb-[100px]">
        <div className="container">
          <div className="mb-14 md:mb-[60px] lg:mb-[100px]">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Invest in the Future of Technology</h1>
            <p className="text-lg text-colorText md:text-xl">Join us in shaping the future of software development and automation</p>
          </div>
          
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-10">
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">Why Invest in DossX?</h2>
                <ul className="space-y-4 text-lg text-colorText">
                  <li>• Industry-leading automation and AI solutions</li>
                  <li>• Strong market position in enterprise software</li>
                  <li>• Proven track record of innovation</li>
                  <li>• Experienced leadership team</li>
                  <li>• Sustainable growth strategy</li>
                </ul>
              </div>
              
              <div className="mb-10">
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">Our Growth Metrics</h2>
                <ul className="space-y-4 text-lg text-colorText">
                  <li>• Consistent revenue growth</li>
                  <li>• Expanding client base</li>
                  <li>• High client retention rate</li>
                  <li>• Strong profit margins</li>
                </ul>
              </div>
            </div>
            
            <div className="rounded-lg bg-white p-8 dark:bg-secondary">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">Contact Investor Relations</h2>
              <ContactForm/>
            </div>
          </div>
        </div>
      </section>
    </LayoutOne>
  )
}