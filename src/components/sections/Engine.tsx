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
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">Built for real-world crawling</h2>
        <p className="mb-12 max-w-2xl text-text-secondary">
          Swift actors handle all shared state. TaskGroups manage parallelism. No data races, no locks.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={100}>
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center">
              <div className="mb-1 text-2xl font-bold text-accent-cyan">{stat.value}</div>
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
