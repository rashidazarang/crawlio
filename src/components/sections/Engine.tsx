import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import RevealOnScroll from '../ui/RevealOnScroll'

const stats = [
  { value: '40', label: 'Concurrent connections' },
  { value: 'BFS + DFS', label: 'Traversal modes' },
  { value: 'Fair', label: 'Per-host queuing' },
]

const code = `actor CrawlEngine {
    func startCrawl(url: URL, destination: String) async throws {
        await withTaskGroup(of: DownloadResult?.self) { group in
            while let entry = frontier.dequeue() {
                group.addTask { await self.downloadAndParse(entry) }
            }
        }
    }
}`

export default function Engine() {
  return (
    <SectionWrapper id="engine">
      <RevealOnScroll>
        <h2 className="mb-6 text-3xl tracking-tight font-bold md:text-5xl">Built for real-world crawling</h2>
        <p className="mb-12 max-w-2xl text-text-secondary">
          Swift actors handle all shared state. TaskGroups manage parallelism. No data races, no locks.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={100}>
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-border-hover hover:bg-card-hover hover:shadow-[0_0_40px_rgba(165,243,252,0.06)]">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/25 to-transparent" />
              <div className="mb-1 text-3xl font-bold text-accent-cyan">{stat.value}</div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={200}>
        <CodeBlock filename="CrawlEngine.swift">{code}</CodeBlock>
      </RevealOnScroll>
    </SectionWrapper>
  )
}
