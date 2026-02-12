import SectionWrapper from '../ui/SectionWrapper'
import RevealOnScroll from '../ui/RevealOnScroll'

const items = [
  {
    title: 'Authentication',
    description: 'HTTP Basic, Digest, SSL trust. Credentials stored in macOS Keychain.',
  },
  {
    title: 'Robots.txt',
    description: 'Respected by default. Wildcards, allow/disallow, crawl-delay.',
  },
  {
    title: 'Path traversal protection',
    description: 'Three-layer validation: PathMapper, DownloadController, ExportManager.',
  },
  {
    title: 'Tracking strip',
    description: 'UTM and analytics parameters removed before download.',
  },
]

export default function Security() {
  return (
    <SectionWrapper id="security">
      <RevealOnScroll>
        <h2 className="mb-16 text-3xl tracking-tight font-bold md:text-5xl">Secure by default</h2>
      </RevealOnScroll>

      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item, i) => (
          <RevealOnScroll key={item.title} delay={i * 80}>
            <div className="group relative flex gap-4 overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-border-hover hover:bg-card-hover hover:shadow-[0_0_40px_rgba(110,231,183,0.06)]">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-mint/25 to-transparent" />
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent-mint/30 bg-accent-mint/10">
                <svg className="h-5 w-5 text-accent-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-text-primary">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.description}</p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  )
}
