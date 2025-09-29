import RevealWrapperV2 from '../animation/RevealWrapperV2'

const SocialProof = () => {
  return (
    <section className="-z-0">
      <RevealWrapperV2 className="container">
        <div className="relative">
          <div className="z-50 flex items-center justify-center">
            <img
              src="/images/assets/dossx_main_header.png"
              alt="social-proof"
              className="hidden dark:inline-block"
            />
          </div>
        </div>
      </RevealWrapperV2>
    </section>
  )
}

export default SocialProof
