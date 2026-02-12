import SectionWrapper from '../ui/SectionWrapper'
import FeatureCard from '../ui/FeatureCard'
import RevealOnScroll from '../ui/RevealOnScroll'

const formats = [
  {
    title: 'Folder',
    description: 'Complete directory tree. Open index.html in any browser.',
  },
  {
    title: 'ZIP',
    description: 'Compressed archive. Share, backup, transfer.',
  },
  {
    title: 'Single HTML',
    description: 'One self-contained file. All CSS, JS, and images inlined as data URIs.',
  },
  {
    title: 'WARC',
    description: 'ISO 28500 web archive. Compatible with Wayback Machine and warctools.',
  },
]

export default function Export() {
  return (
    <SectionWrapper id="export">
      <RevealOnScroll>
        <h2 className="mb-16 text-3xl tracking-tight font-bold md:text-5xl">Four ways out</h2>
      </RevealOnScroll>

      <div className="grid gap-6 sm:grid-cols-2">
        {formats.map((format, i) => (
          <RevealOnScroll key={format.title} delay={i * 80}>
            <FeatureCard title={format.title} description={format.description} />
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  )
}
