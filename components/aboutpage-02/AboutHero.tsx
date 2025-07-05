import React from 'react'
import RevealWrapper from '../animation/RevealWrapper'

const AboutHero = () => {
  return (
    <section className="pb-14 pt-28 md:pb-20 md:pt-48 lg:pb-[100px] lg:pt-[200px]">
      <RevealWrapper className="container">
        <div className="flex flex-col items-center justify-end gap-x-20 gap-y-5 sm:flex-row md:gap-y-10">
          <h1 className="font-instrument text-5xl font-normal italic md:text-6xl lg:text-9xl xl:text-[156px] xl:leading-[1.1]">
            About
          </h1>

          <p className="max-w-[470px]">
          DossX is a forward-thinking software studio founded by Baron Doss—a technologist with a flair for scalable systems, 
          elegant design, and real-world impact. We exist to crack tough problems with smarter code, mixing engineering precision 
          with a spark of imagination. From startups that need to ship yesterday to enterprises craving rock-solid infrastructure, 
          we bring sharp product strategy and bulletproof engineering together under one roof—always guided by intention, integrity, 
          and a little bit of swagger.
          </p>
        </div>

        <h2 className="mb-5 text-6xl sm:text-7xl md:text-8xl lg:text-[156px] xl:text-[236px] xl:leading-[1.1]">
          DossX
        </h2>
      </RevealWrapper>
    </section>
  )
}

export default AboutHero
