'use client'

import useReveal from '@/hooks/useReveal'
import React from 'react'

interface SpacePropsType {
  littleSpace?: boolean
}

const AboutV5: React.FC<SpacePropsType> = ({ littleSpace }) => {
  const { revealRef } = useReveal()

  return !littleSpace ? (
    <section className="overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <h3
          ref={revealRef}
          className="overflow-hidden text-2xl font-semibold leading-relaxed text-gray-800 dark:text-gray-100 md:text-3xl lg:text-4xl"
        >
          DossX is where next-generation AI meets real-world business impact. 
          We design, build, and deploy intelligent systems that automate the busywork, 
          amplify human potential, and scale companies faster than ever before. 
          From 24/7 voice agents and sales automation engines to data orchestration platforms, 
          DossX gives ambitious brands the tools to move smarter, grow faster, and stay ahead of change.
        </h3>
      </div>
    </section>
  ) : (
    <section className="overflow-hidden pb-14 pt-6 md:pb-16 lg:pb-[88px] lg:pt-11 xl:pb-[100px]">
      <div className="container">
        <h3
          ref={revealRef}
          className="overflow-hidden text-2xl font-semibold leading-relaxed text-gray-800 dark:text-gray-100 md:text-3xl lg:text-4xl"
        >
          At DossX, innovation isn’t a buzzword — it’s the blueprint. 
          We fuse AI intelligence with strategic execution to help businesses automate processes, 
          accelerate growth, and unlock new opportunities. 
          Whether you’re building your first AI workflow or scaling enterprise-grade automation, 
          DossX is the partner that gets you there.
        </h3>
      </div>
    </section>
  )
}

export default AboutV5