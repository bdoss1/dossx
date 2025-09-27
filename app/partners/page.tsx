import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'

export const metadata = {
  title: 'Partner Program — DossX',
  description:
    'Join the DossX Partner Program and bring next-gen AI solutions to your clients. Resell, integrate, or co-create our flagship products — Voxia, QuotaX, and Synapse — and grow recurring revenue with us.',
}

export default function PartnerProgramPage() {
  return (
    <LayoutOne>
      {/* Hero Section */}
      <PageHero
        title="DossX"
        italicTitle="Partner Program"
        badgeTitle="Partners"
        description="Grow your business, expand your offerings, and deliver cutting-edge AI to your clients — all while building recurring revenue with DossX."
        scale
      />

      {/* Intro */}
      <section className="pb-20 pt-20">
        <div className="container max-w-5xl">
          <h2 className="mb-6 text-4xl font-bold">Let’s Build the Future — Together</h2>
          <p className="text-lg text-colorText leading-relaxed mb-10">
            The DossX Partner Program is built for agencies, consultants, IT providers, and innovators who want to lead the AI revolution — without reinventing the wheel.
            As a partner, you’ll gain access to our full product suite, exclusive resources, and co-marketing support to help you build and scale powerful AI solutions for your clients.
          </p>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="bg-muted py-20">
        <div className="container max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold text-center">Choose Your Partnership Path</h2>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="rounded-xl bg-white dark:bg-secondary p-8 shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">🤝 Referral Partner</h3>
              <p className="text-colorText mb-6">
                Introduce clients to DossX and earn generous commissions for every deal closed. Perfect for consultants, advisors, and creators with trusted client networks.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-colorText">
                <li>20% recurring commission</li>
                <li>Instant payouts and transparent tracking</li>
                <li>No technical lift required</li>
              </ul>
            </div>

            <div className="rounded-xl bg-white dark:bg-secondary p-8 shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">🚀 Reseller Partner</h3>
              <p className="text-colorText mb-6">
                White-label DossX solutions under your brand. Control pricing, bundle services, and deliver AI products directly to your clients with full support from our team.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-colorText">
                <li>Private-label Voxia, QuotaX, and Synapse</li>
                <li>Volume discounts and tiered pricing</li>
                <li>Co-branded marketing materials</li>
              </ul>
            </div>

            <div className="rounded-xl bg-white dark:bg-secondary p-8 shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">🧠 Strategic Partner</h3>
              <p className="text-colorText mb-6">
                Work side-by-side with us to co-create new solutions and enterprise integrations. Designed for agencies and tech companies ready to shape the future of AI with us.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-colorText">
                <li>Joint GTM campaigns</li>
                <li>Early access to new products</li>
                <li>Dedicated partner success manager</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container max-w-6xl text-center">
          <h2 className="mb-10 text-3xl font-bold">Why Partner With DossX?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-lg bg-muted/50">
              <h3 className="text-xl font-semibold mb-2">💼 Expand Your Revenue</h3>
              <p>Earn recurring income from cutting-edge AI tools without the cost of development or infrastructure.</p>
            </div>
            <div className="p-6 rounded-lg bg-muted/50">
              <h3 className="text-xl font-semibold mb-2">⚙️ Enterprise-Ready Products</h3>
              <p>Offer production-grade tools like <strong>Voxia</strong>, <strong>QuotaX</strong>, and <strong>Synapse</strong> built for real business impact.</p>
            </div>
            <div className="p-6 rounded-lg bg-muted/50">
              <h3 className="text-xl font-semibold mb-2">📈 Co-Marketing Support</h3>
              <p>Access marketing kits, launch materials, and joint campaigns to accelerate your growth.</p>
            </div>
            <div className="p-6 rounded-lg bg-muted/50">
              <h3 className="text-xl font-semibold mb-2">🧠 Training & Certification</h3>
              <p>Receive hands-on enablement and partner certification so your team is AI-ready from day one.</p>
            </div>
            <div className="p-6 rounded-lg bg-muted/50">
              <h3 className="text-xl font-semibold mb-2">🤝 Exclusive Partner Community</h3>
              <p>Join a network of innovators building the next generation of automation and AI businesses.</p>
            </div>
            <div className="p-6 rounded-lg bg-muted/50">
              <h3 className="text-xl font-semibold mb-2">🔗 Seamless Integrations</h3>
              <p>Deliver results fast with ready-made integrations for CRMs, databases, calendars, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-20">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Let’s Scale — Together</h2>
          <p className="text-lg mb-10">
            Whether you want to refer clients, resell our products, or co-create next-gen solutions — the DossX Partner Program is your gateway to growth in the AI era.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-muted transition"
          >
            Apply to Become a Partner
          </Link>
        </div>
      </section>
    </LayoutOne>
  )
}