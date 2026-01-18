import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'

export const metadata = {
  title: 'Partner With DossX — Delivery Partner Program',
  description:
    'DossX collaborates with agencies and consultants who want to deliver high-performance digital platforms and AI-powered solutions to their clients without managing complex builds internally.',
}

export default function PartnerProgramPage() {
  return (
    <LayoutOne>
      {/* Hero Section */}
      <PageHero
        title="Partner With"
        italicTitle="DossX"
        badgeTitle="Partners"
        description="DossX collaborates with agencies and consultants who want to deliver high-performance digital platforms and AI-powered solutions to their clients without managing complex builds internally."
        scale
      />

      {/* Intro */}
      <section className="pb-20 pt-20">
        <div className="container max-w-5xl">
          <h2 className="mb-6 text-4xl font-bold">Deliver More. Build Less.</h2>
          <p className="text-lg text-colorText leading-relaxed mb-10">
            The DossX Partner Program is designed for agencies, consultants, and creative professionals who want to expand their service offerings without the overhead of managing complex development and hosting infrastructure.
          </p>
          <p className="text-lg text-colorText leading-relaxed">
            As a delivery partner, you bring the client relationships and strategy — we handle the technical execution. From custom websites and proprietary CMS to AI workflows and AI-powered SaaS solutions, DossX becomes your backend engine for scalable digital delivery.
          </p>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-muted py-20">
        <div className="container max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold text-center">Who This Program Is For</h2>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="rounded-xl bg-white dark:bg-secondary p-8 shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">Agencies</h3>
              <p className="text-colorText">
                Digital agencies, marketing agencies, and creative shops looking to offer web development, automation, and SaaS solutions without building internal dev teams.
              </p>
            </div>

            <div className="rounded-xl bg-white dark:bg-secondary p-8 shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">Consultants</h3>
              <p className="text-colorText">
                Business consultants, technology advisors, and fractional CTOs who need a reliable technical partner to execute on client recommendations.
              </p>
            </div>

            <div className="rounded-xl bg-white dark:bg-secondary p-8 shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">Creatives</h3>
              <p className="text-colorText">
                Designers, brand strategists, and content creators who want to expand into full-service digital delivery with a trusted development partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container max-w-5xl">
          <h2 className="mb-10 text-3xl font-bold text-center">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-5xl font-bold text-primary">01</div>
              <h3 className="text-xl font-semibold mb-2">Scope the Project</h3>
              <p className="text-colorText">
                You bring the client and requirements. We help you scope and propose the right solution — website, CMS, automation, or SaaS.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-5xl font-bold text-primary">02</div>
              <h3 className="text-xl font-semibold mb-2">We Build It</h3>
              <p className="text-colorText">
                DossX handles design, development, CMS setup, automation workflows, and hosting. White-label delivery under your brand if preferred.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-5xl font-bold text-primary">03</div>
              <h3 className="text-xl font-semibold mb-2">You Deliver It</h3>
              <p className="text-colorText">
                Present the finished platform to your client. Ongoing hosting and support managed by DossX, billed through your partnership agreement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-muted py-20">
        <div className="container max-w-6xl text-center">
          <h2 className="mb-10 text-3xl font-bold">Partner Benefits</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-lg bg-white dark:bg-secondary">
              <h3 className="text-xl font-semibold mb-2">White-Label Delivery</h3>
              <p className="text-colorText">Website and SaaS builds delivered under your brand, with DossX working behind the scenes.</p>
            </div>
            <div className="p-6 rounded-lg bg-white dark:bg-secondary">
              <h3 className="text-xl font-semibold mb-2">CMS & Automation Included</h3>
              <p className="text-colorText">Every project includes our proprietary CMS and AI workflow capabilities at no extra complexity to you.</p>
            </div>
            <div className="p-6 rounded-lg bg-white dark:bg-secondary">
              <h3 className="text-xl font-semibold mb-2">Hosting Fully Managed</h3>
              <p className="text-colorText">We handle all hosting, security, maintenance, and updates — your clients get enterprise-grade infrastructure.</p>
            </div>
            <div className="p-6 rounded-lg bg-white dark:bg-secondary">
              <h3 className="text-xl font-semibold mb-2">Scalable Delivery</h3>
              <p className="text-colorText">Take on more projects without hiring. DossX scales with your pipeline and delivery needs.</p>
            </div>
            <div className="p-6 rounded-lg bg-white dark:bg-secondary">
              <h3 className="text-xl font-semibold mb-2">Healthy Margins</h3>
              <p className="text-colorText">Partner pricing allows you to maintain profitable margins while delivering premium solutions.</p>
            </div>
            <div className="p-6 rounded-lg bg-white dark:bg-secondary">
              <h3 className="text-xl font-semibold mb-2">One Technical Partner</h3>
              <p className="text-colorText">Stop juggling multiple vendors. DossX handles design, development, CMS, automation, and hosting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-20">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Expand Your Offerings?</h2>
          <p className="text-lg mb-10">
            Whether you need white-label web development, co-delivery on automation projects, or a full technical backend partner — DossX is ready to scale with you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-muted transition"
          >
            Become a Partner
          </Link>
        </div>
      </section>
    </LayoutOne>
  )
}
