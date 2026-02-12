import SectionWrapper from '../ui/SectionWrapper'
import RevealOnScroll from '../ui/RevealOnScroll'

const steps = [
  {
    title: 'Crawl',
    description:
      'Point it at any URL. The engine maps every page, stylesheet, script, image, and font — following links with BFS or depth-first traversal.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Download',
    description:
      'Concurrent connections pull everything in parallel. Per-host fairness, retry logic, and respect for robots.txt keep things clean.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
  {
    title: 'Browse',
    description:
      'Links are rewritten to work from your filesystem. Open index.html in any browser — the whole site works offline.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
      </svg>
    ),
  },
]

export default function WhatItDoes() {
  return (
    <SectionWrapper id="features">
      <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">Three steps to offline</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, i) => (
          <RevealOnScroll key={step.title} delay={i * 100}>
            <div className="text-center md:text-left">
              <div className="mb-4 inline-flex text-accent-cyan">{step.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{step.description}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  )
}
