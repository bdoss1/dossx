import CTA from '@/components/shared/CTA';
import CtaImageSlider from '@/components/shared/CtaImageSlider';
import LayoutOne from '@/components/shared/LayoutOne';
import PageHero from '@/components/shared/PageHero';
import SecurityPolicyBody from '@/components/shared/SecurityPolicyBody';
import getMarkDownData from '@/utils/GetMarkDownData';

export const metadata = { title: 'Security & Compliance — DossX' };

export interface TermsDataType {
  slug: string;
  content: string;
  [key: string]: any;
}

/* pull markdown from /data/security folder */
const securityData: TermsDataType[] = getMarkDownData('data/security');

const SecurityPage = () => (
  <LayoutOne>
    <PageHero
      title="Security &"
      italicTitle="Compliance"
      badgeTitle="Security"
      scale
    />
    <SecurityPolicyBody policyData={securityData} />

    {/* CTA section (unchanged) */}
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
);

export default SecurityPage;