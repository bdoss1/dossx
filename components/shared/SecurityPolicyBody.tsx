import { TermsDataType } from '@/app/terms/page'; // same shape you already use
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import RevealWrapper from '../animation/RevealWrapper';
import { FC } from 'react';

interface PropsTypes {
  policyData: TermsDataType[];
}

const SecurityPolicyBody: FC<PropsTypes> = ({ policyData }) => {
  return (
    <section className="relative overflow-hidden pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        {/* Intro */}
        <RevealWrapper>
          <h2 className="mb-5 text-[25px] md:mb-10 md:text-4xl md:leading-[1.5]">
            Protecting customer data is mission-critical at DossX. This Security & Compliance
            statement details the technical and organizational measures we take to keep your
            information safe and to meet relevant regulations.
          </h2>
        </RevealWrapper>

        {/* Markdown Body */}
        <div className="blog-details-body">
          {policyData.map((section) => (
            <RevealWrapper key={section.slug}>
              <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{section.content}</ReactMarkdown>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityPolicyBody;