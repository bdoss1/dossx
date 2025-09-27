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
      <h3
        ref={revealRef}
        className="reveal-text-2 text-secondary dark:text-backgroundBody text-xl md:text-2xl leading-relaxed max-w-4xl"
      >
        <strong>DossX: Engineering the Future of Intelligent Business</strong>
        <br />
        We empower ambitious brands — from disruptive startups to global enterprises — to reimagine how they operate,
        automate, and grow. By fusing AI, automation, and creative engineering, we build digital systems that think,
        adapt, and scale — giving you the unfair advantage in an AI-driven world.
      </h3>
    </RevealWrapper>
  ) : (
    <RevealWrapper as="section" className="container">
      <h3
        ref={revealRef}
        className="text-xl md:text-2xl leading-relaxed max-w-3xl text-gray-800 dark:text-gray-200"
      >
        We design next-generation software and automation systems that seamlessly merge innovation and intelligence —
        transforming bold ideas into business-ready solutions.
      </h3>
    </RevealWrapper>
  )
}

export default HeroAbout