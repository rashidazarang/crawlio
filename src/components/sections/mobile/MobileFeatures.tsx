import SectionWrapper from '../../ui/SectionWrapper'
import RevealOnScroll from '../../ui/RevealOnScroll'

const features = [
  {
    title: 'Crawl Anywhere',
    description:
      'Full website downloads from your phone or tablet. Enter a URL, tap start, and Crawlio downloads every page, image, stylesheet, and script — just like the macOS app.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Liquid Glass UI',
    description:
      "Built for iOS 26 with Apple's Liquid Glass design language. Translucent surfaces, adaptive layouts for iPhone and iPad, and haptic feedback on every action.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Same Engine',
    description:
      'CrawlioCore powers both macOS and iOS. Your crawl settings, file formats, and download logic are identical across platforms. No compromises.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
]

export default function MobileFeatures() {
  return (
    <SectionWrapper band>
      <h2 className="mb-16 text-center text-3xl font-bold tracking-tight md:text-5xl">
        Everything you need, in your pocket.
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature, i) => (
          <RevealOnScroll key={feature.title} delay={i * 100}>
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-border-hover hover:bg-card-hover hover:shadow-[0_0_40px_rgba(165,243,252,0.06)]">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/25 to-transparent" />
              <div className="mb-4 inline-flex rounded-lg bg-accent-cyan/10 p-2.5 text-accent-cyan">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{feature.description}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  )
}
