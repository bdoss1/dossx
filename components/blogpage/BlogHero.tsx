import RevealWrapper from '@/components/animation/RevealWrapper'

type BlogHeroProps = {
  title?: string
  subtitle?: string
}

export default function BlogHero({
  title = 'The DossX Growth Lab',
  subtitle = 'Insights, strategies, and stories on how AI is reshaping business — from automation to revenue growth.',
}: BlogHeroProps) {
  return (
    <section className="pb-14 pt-28 md:pb-20 md:pt-40 lg:pb-[88px] lg:pt-[160px]">
      <RevealWrapper className="container text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-white/80">
          {subtitle}
        </p>
      </RevealWrapper>
    </section>
  )
}