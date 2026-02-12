import SectionWrapper from '../ui/SectionWrapper'
import FeatureCard from '../ui/FeatureCard'
import RevealOnScroll from '../ui/RevealOnScroll'

const parsers = [
  {
    title: 'HTML',
    description:
      'Custom scanner. 18 tags, srcset, style blocks, data-* attributes. Encoding detection across 9 charsets.',
  },
  {
    title: 'CSS',
    description:
      '@import chains, url() references, comment stripping. Quoted and unquoted paths.',
  },
  {
    title: 'PDF',
    description:
      'PDFKit integration. Link annotations and in-text URL pattern matching.',
  },
  {
    title: 'Sitemap',
    description:
      'XML urlset and sitemapindex. Transparent gzip decompression.',
  },
  {
    title: 'Robots.txt',
    description:
      'User-agent matching, wildcards, end anchors, crawl-delay, sitemap directives.',
  },
]

export default function Parsers() {
  return (
    <SectionWrapper id="parsers" band>
      <RevealOnScroll>
        <h2 className="mb-16 text-3xl tracking-tight font-bold md:text-5xl">Five parsers. Every link found.</h2>
      </RevealOnScroll>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {parsers.map((parser, i) => (
          <RevealOnScroll key={parser.title} delay={i * 80}>
            <FeatureCard title={parser.title} description={parser.description} />
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  )
}
