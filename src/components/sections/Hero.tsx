import SectionWrapper from '../ui/SectionWrapper'
import GlowText from '../ui/GlowText'
import Button from '../ui/Button'
import Badge from '../ui/Badge'

export default function Hero() {
  return (
    <SectionWrapper id="hero" className="flex min-h-screen flex-col items-center justify-center text-center">
      <Badge className="mb-6">v1.0.0 — Free and open source</Badge>

      <div className="mb-6 flex items-center justify-center">
        <svg width="56" height="56" viewBox="0 0 64 64" fill="none" aria-hidden="true" className="mr-4 opacity-90">
          <path d="M48 12a28 28 0 1 0 0 40" stroke="#a5f3fc" strokeWidth="4" strokeLinecap="round" fill="none"/>
          <circle cx="20" cy="24" r="3" fill="#a5f3fc"/>
          <circle cx="32" cy="16" r="2.5" fill="#a5f3fc" opacity="0.7"/>
          <circle cx="20" cy="40" r="2.5" fill="#a5f3fc" opacity="0.7"/>
          <circle cx="32" cy="48" r="2" fill="#a5f3fc" opacity="0.5"/>
          <line x1="20" y1="24" x2="32" y2="16" stroke="#a5f3fc" strokeWidth="1.5" opacity="0.4"/>
          <line x1="20" y1="24" x2="20" y2="40" stroke="#a5f3fc" strokeWidth="1.5" opacity="0.4"/>
          <line x1="20" y1="40" x2="32" y2="48" stroke="#a5f3fc" strokeWidth="1.5" opacity="0.4"/>
          <line x1="32" y1="16" x2="32" y2="48" stroke="#a5f3fc" strokeWidth="1" opacity="0.2"/>
          <circle cx="26" cy="32" r="4" fill="#a5f3fc" opacity="0.9"/>
        </svg>
        <GlowText as="h1" className="text-5xl font-bold tracking-tight md:text-7xl">
          Crawlio
        </GlowText>
      </div>

      <p className="mb-10 max-w-lg text-lg text-text-secondary md:text-xl">
        Download any website. Browse it offline.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button href="#download">Download for macOS</Button>
        <Button href="https://github.com/rashidazarang/crawlio" variant="secondary">
          View on GitHub
        </Button>
      </div>
    </SectionWrapper>
  )
}
