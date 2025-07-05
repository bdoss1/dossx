import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';

import { TermsDataType } from '@/app/terms/page';
import RevealWrapper from '../animation/RevealWrapper';

interface PropsTypes {
  policyData: TermsDataType[];
}

const EthicsPolicyBody: FC<PropsTypes> = ({ policyData }) => {
  return (
    <section className="relative overflow-hidden pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        {/* Intro heading */}
        <RevealWrapper>
          <h2 className="mb-5 text-[25px] md:mb-10 md:text-4xl md:leading-[1.5]">
            At DossX, ethical use of data and artificial intelligence is foundational to every
            product we build. This Data & AI Ethics policy explains the principles that guide our
            model selection, data handling, and human-in-the-loop oversight.
          </h2>
        </RevealWrapper>

        {/* Markdown body */}
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

export default EthicsPolicyBody;