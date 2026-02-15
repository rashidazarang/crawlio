"use client";

import SectionHeading from "./SectionHeading";
import GlassCard from "./GlassCard";
import ScrollReveal from "./ScrollReveal";

const workflowSteps = [
  {
    number: "1",
    title: "Download a reference site with Crawlio",
    description: "You get a folder: HTML, CSS, images, fonts, everything.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Open the folder in your IDE",
    description:
      "It's just files. Cursor, VS Code, terminal — whatever you use.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Point your AI at it",
    description:
      "Claude, ChatGPT, or any MCP-compatible AI reads the actual HTML and CSS. Not a screenshot. Real files.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const prompts = [
  "Rebuild this hero section in React.",
  "What color system does this site use?",
  "Create a new page following this layout pattern.",
];

export default function AIWorkflow() {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Download a website. Open it in your IDE. Let AI do the rest." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Workflow Steps */}
          <ScrollReveal>
            <div className="space-y-5">
              {workflowSteps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-purple)]/10 to-[var(--accent-blue)]/10 flex items-center justify-center text-[var(--accent-purple)] shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-[var(--text-primary)] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Prompts examples */}
              <div className="mt-6 space-y-2">
                {prompts.map((p) => (
                  <div
                    key={p}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-glass-dark)] border border-black/5 text-sm"
                  >
                    <span className="text-[var(--accent-purple)] font-mono text-xs">
                      &gt;
                    </span>
                    <span className="text-[var(--text-body)] italic">{`"${p}"`}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Conversation Mock */}
          <ScrollReveal delay={0.2}>
            <GlassCard className="p-6 overflow-hidden">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-black/5">
                <div className="w-3 h-3 rounded-full bg-[var(--accent-red)]" />
                <div className="w-3 h-3 rounded-full bg-[var(--accent-green)]" />
                <div className="w-3 h-3 rounded-full bg-[var(--accent-blue)]" />
                <span className="ml-2 text-xs text-[var(--text-dim)] font-mono">
                  Claude Code
                </span>
              </div>
              <div className="space-y-4 text-sm font-mono">
                {/* User */}
                <div className="flex gap-3">
                  <span className="text-[var(--accent-blue)] shrink-0">you</span>
                  <span className="text-[var(--text-body)]">
                    Download the Stripe docs site.
                  </span>
                </div>
                {/* AI response */}
                <div className="flex gap-3">
                  <span className="text-[var(--accent-purple)] shrink-0">ai&nbsp;</span>
                  <div className="text-[var(--text-muted)] space-y-2">
                    <p>Starting crawl of docs.stripe.com...</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-black/5 rounded-full overflow-hidden">
                        <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-blue)]" />
                      </div>
                      <span className="text-xs">847/1,203</span>
                    </div>
                    <p>
                      Downloaded. 1,203 pages saved to{" "}
                      <span className="text-[var(--accent-green)]">
                        ~/Downloads/docs.stripe.com
                      </span>
                    </p>
                  </div>
                </div>
                {/* User follow-up */}
                <div className="flex gap-3">
                  <span className="text-[var(--accent-blue)] shrink-0">you</span>
                  <span className="text-[var(--text-body)]">
                    What auth methods do they document?
                  </span>
                </div>
                {/* AI answer */}
                <div className="flex gap-3">
                  <span className="text-[var(--accent-purple)] shrink-0">ai&nbsp;</span>
                  <div className="text-[var(--text-muted)]">
                    <p>Based on the downloaded docs, Stripe supports 4 auth methods:</p>
                    <ol className="list-decimal ml-4 mt-1 space-y-0.5">
                      <li>API keys (secret + publishable)</li>
                      <li>OAuth 2.0 for Connect</li>
                      <li>Webhook signature verification</li>
                      <li>Restricted API keys</li>
                    </ol>
                  </div>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>

        {/* Works With badges */}
        <ScrollReveal delay={0.3} className="mt-12">
          <p className="text-center text-sm text-[var(--text-dim)] mb-4">
            Works with Claude &middot; ChatGPT &middot; Cursor &middot; Any MCP client
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
