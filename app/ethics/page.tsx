import CTA from '@/components/shared/CTA';
import CtaImageSlider from '@/components/shared/CtaImageSlider';
import LayoutOne from '@/components/shared/LayoutOne';
import PageHero from '@/components/shared/PageHero';
import EthicsPolicyBody from '@/components/shared/EthicsPolicyBody';
import getMarkDownData from '@/utils/GetMarkDownData';

export const metadata = { title: 'Data & AI Ethics — DossX' };

export interface TermsDataType {
  slug: string;
  content: string;
  [key: string]: any;
}

/* pull markdown from /data/ethics folder */
const ethicsData: TermsDataType[] = getMarkDownData('data/ethics');

const EthicsPage = () => (
  <LayoutOne>
    <PageHero
      title="Data & AI"
      italicTitle="Ethics"
      badgeTitle="Ethics"
      scale
    />
    <EthicsPolicyBody policyData={ethicsData} />

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

export default EthicsPage;