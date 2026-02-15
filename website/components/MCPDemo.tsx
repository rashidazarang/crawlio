"use client";

import SectionHeading from "./SectionHeading";
import GlassCard from "./GlassCard";
import ScrollReveal from "./ScrollReveal";

const chatGPTConvo = [
  {
    role: "user" as const,
    text: "Download the React docs site for me.",
  },
  {
    role: "ai" as const,
    text: "Starting crawl of react.dev...\nDownloading... 312 pages found so far.\nDone — 487 pages saved to ~/Downloads/Crawlio/react.dev",
  },
  {
    role: "user" as const,
    text: "How do they explain server components?",
  },
  {
    role: "ai" as const,
    text: "From the downloaded docs, React Server Components are explained across 3 pages. The key concept is that components can run on the server, accessing data directly without an API layer...",
  },
];

export default function MCPDemo() {
  return (
    <section className="section-padding bg-[var(--bg-glass-dark)]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Your AI controls the download."
          subtitle="Crawlio speaks MCP — the open protocol that lets AI tools use apps directly. Tell ChatGPT or Claude to download a site. It starts the crawl, watches the progress, and tells you when your files are ready."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* MCP Explanation */}
          <ScrollReveal>
            <GlassCard className="p-8 h-full">
              <h3 className="text-lg font-medium text-[var(--text-primary)] mb-4">
                The full loop in one conversation
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: "Tell your AI what to download",
                    detail: 'Say "Download docs.example.com" in natural language',
                    color: "var(--accent-red)",
                  },
                  {
                    step: "AI starts the crawl via MCP",
                    detail: "Calls start_crawl, monitors progress automatically",
                    color: "var(--accent-purple)",
                  },
                  {
                    step: "Files land on your disk",
                    detail: "Complete site: HTML, CSS, images, fonts, everything",
                    color: "var(--accent-blue)",
                  },
                  {
                    step: "AI reads and builds from the files",
                    detail: "Actual code, actual CSS, actual structure — not guesses",
                    color: "var(--accent-green)",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium shrink-0 mt-0.5"
                      style={{ background: item.color }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[var(--text-primary)]">
                        {item.step}
                      </p>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-[var(--bg-base)] border border-black/5">
                <p className="text-xs text-[var(--text-dim)] uppercase tracking-wider mb-2 font-medium">
                  10 MCP tools available
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "start_crawl",
                    "stop_crawl",
                    "pause_crawl",
                    "resume_crawl",
                    "get_status",
                    "get_logs",
                    "get_errors",
                    "get_downloads",
                    "get_failed",
                    "get_site_tree",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded-md bg-[var(--accent-purple)]/5 text-[var(--accent-purple)] text-xs font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* ChatGPT conversation */}
          <ScrollReveal delay={0.15}>
            <GlassCard className="p-6 overflow-hidden">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-black/5">
                <div className="w-3 h-3 rounded-full bg-[var(--accent-red)]" />
                <div className="w-3 h-3 rounded-full bg-[var(--accent-green)]" />
                <div className="w-3 h-3 rounded-full bg-[var(--accent-blue)]" />
                <span className="ml-2 text-xs text-[var(--text-dim)] font-mono">
                  ChatGPT Desktop
                </span>
              </div>
              <div className="space-y-4 text-sm">
                {chatGPTConvo.map((msg, i) => (
                  <div key={i} className="flex gap-3">
                    <span
                      className={`shrink-0 text-xs font-mono mt-0.5 ${
                        msg.role === "user"
                          ? "text-[var(--accent-blue)]"
                          : "text-[var(--accent-green)]"
                      }`}
                    >
                      {msg.role === "user" ? "you" : "gpt"}
                    </span>
                    <p className="text-[var(--text-muted)] whitespace-pre-line leading-relaxed">
                      {msg.text}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
