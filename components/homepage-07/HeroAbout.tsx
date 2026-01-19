'use client'

import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'

interface PropsTypes {
  spacingTop?: string
}

const HeroAbout = ({ spacingTop }: PropsTypes) => {
  const { revealRef } = useReveal()

  return spacingTop ? (
    <RevealWrapper className={`${spacingTop} container`}>
      <div className="max-w-4xl space-y-8">
        <h3
          ref={revealRef}
          className="reveal-text-2 text-secondary dark:text-backgroundBody text-xl md:text-2xl leading-relaxed"
        >
          <strong>Built for Businesses That Expect More From Technology</strong>
          <br /><br />
          DossX was created to help companies move beyond slow development, rigid platforms, and disconnected systems. By combining custom website development, a proprietary CMS, intelligent automation, and AI-powered SaaS, DossX builds digital ecosystems that operate smarter, scale faster, and deliver measurable business impact.
        </h3>

        <div className="grid gap-8 md:grid-cols-2 pt-8">
          <div className="border-l-4 border-primary pl-6">
            <h4 className="text-lg font-bold mb-2 text-secondary dark:text-white">Mission</h4>
            <p className="text-base text-gray-600 dark:text-gray-300">
              To empower businesses with intelligent digital systems that automate operations and accelerate growth.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-6">
            <h4 className="text-lg font-bold mb-2 text-secondary dark:text-white">Vision</h4>
            <p className="text-base text-gray-600 dark:text-gray-300">
              A future where companies run on smart platforms designed to work continuously and scale effortlessly.
            </p>
          </div>
        </div>

        <div className="pt-8">
          <h4 className="text-lg font-bold mb-4 text-secondary dark:text-white">Why DossX</h4>
          <ul className="grid gap-3 md:grid-cols-2 text-base text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              Full control over your digital infrastructure
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              Systems built for performance and scalability
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              Automation embedded from day one
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              AI workflows that reduce manual effort
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              One unified partner for design, development, and hosting
            </li>
          </ul>
        </div>
      </div>
    </RevealWrapper>
  ) : (
    <RevealWrapper as="section" className="container">
      <h3
        ref={revealRef}
        className="text-xl md:text-2xl leading-relaxed max-w-3xl text-gray-800 dark:text-gray-200"
      >
        We build intelligent digital ecosystems that automate operations and accelerate growth — combining custom websites, proprietary CMS, AI workflows, and AI-powered SaaS solutions.
      </h3>
    </RevealWrapper>
  )
}

export default HeroAbout
