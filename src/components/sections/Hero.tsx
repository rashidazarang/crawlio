import SectionWrapper from '../ui/SectionWrapper'
import GlowText from '../ui/GlowText'
import Button from '../ui/Button'
import Badge from '../ui/Badge'

export default function Hero() {
  return (
    <SectionWrapper id="hero" className="flex min-h-screen flex-col items-center justify-center text-center">
      <Badge className="mb-6">v1.0.0 — Free and open source</Badge>

      <GlowText as="h1" className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
        Crawlio
      </GlowText>

      <p className="mb-10 max-w-lg text-lg text-text-secondary md:text-xl">
        Download any website. Browse it offline.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button href="#download">Download for macOS</Button>
        <Button href="https://github.com" variant="secondary">
          View on GitHub
        </Button>
      </div>
    </SectionWrapper>
  )
}
