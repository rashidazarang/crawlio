import SectionWrapper from '../../ui/SectionWrapper'
import GlowText from '../../ui/GlowText'
import Button from '../../ui/Button'
import Badge from '../../ui/Badge'

export default function MobileHero() {
  return (
    <SectionWrapper id="mobile-hero" className="flex min-h-screen flex-col items-center justify-center text-center">
      <Badge className="mb-6">Coming soon — iOS 26+</Badge>

      <GlowText as="h1" className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
        Crawlio on iPhone
        <br />
        <span className="text-accent-cyan">&amp; iPad</span>
      </GlowText>

      <p className="mb-12 max-w-lg text-xl text-text-secondary md:text-2xl">
        Download websites on the go. Same powerful engine, native iOS experience.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button href="#">
          <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Download on the App Store
        </Button>
        <Button href="/" variant="secondary">
          Back to macOS
        </Button>
      </div>

      {/* Phone mockup */}
      <div className="mt-16 w-full max-w-xs md:mt-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-2 shadow-[0_0_60px_rgba(165,243,252,0.08)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />
          <img
            src="/mobile-hero.png"
            alt="CrawlioMobile — iOS website downloader"
            className="w-full rounded-[1.5rem]"
          />
        </div>
      </div>
    </SectionWrapper>
  )
}
