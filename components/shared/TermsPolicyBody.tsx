import { TermsDataType } from '@/app/terms/page'
import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import RevealWrapper from '../animation/RevealWrapper'

interface PropsTypes {
  termsData: TermsDataType[]
  heading?: boolean
}
const TermsPolicyBody: FC<PropsTypes> = ({ termsData, heading = false }) => {
  return (
    <section className="relative overflow-hidden pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        {!heading ? (
          <RevealWrapper>
            <h2 className="mb-5 text-xl sm:text-[25px] md:mb-10 md:text-4xl md:leading-[1.5]">
              The exact scope of any Terms & Conditions depends on the service in question. 
              For DossX’s subscription-based, AI-powered software and automation suite, 
              the agreement typically covers the following core elements:
            </h2>
          </RevealWrapper>
        ) : (
          <RevealWrapper>
            <h2 className="mb-5 text-[25px] md:mb-10 md:text-4xl md:leading-[1.5]">
              Your privacy matters at DossX. This Privacy Policy explains how DossX LLC collects, uses, shares, 
              and safeguards your information when you engage with our AI-powered products, automation workflows, 
              and related services. Please review it carefully to understand how—and why—we handle your personal data.
            </h2>
          </RevealWrapper>
        )}

        <div className="blog-details-body">
          {termsData.map((terms) => (
            <RevealWrapper key={terms.slug}>
              <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{terms.content}</ReactMarkdown>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TermsPolicyBody
