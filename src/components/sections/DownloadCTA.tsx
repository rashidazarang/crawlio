import SectionWrapper from '../ui/SectionWrapper'
import GlowText from '../ui/GlowText'
import Button from '../ui/Button'

export default function DownloadCTA() {
  return (
    <SectionWrapper id="download" className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <GlowText as="h2" className="mb-4 text-4xl font-bold md:text-5xl">
        Download Crawlio
      </GlowText>

      <p className="mb-8 text-text-secondary">
        macOS 14+. Free and open source.
      </p>

      <Button href="#" className="px-10 py-4 text-base">
        Download v1.0.0
      </Button>

      <p className="mt-4 text-xs text-text-secondary">
        Direct download — no App Store required
      </p>
    </SectionWrapper>
  )
}
