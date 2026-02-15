"use client";

import SectionHeading from "./SectionHeading";
import GlassCard from "./GlassCard";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "1",
    color: "var(--accent-red)",
    title: "Paste a URL",
    description: "Type or paste any URL. Crawlio validates it instantly.",
    mockup: (
      <div className="mt-4 rounded-xl bg-[var(--bg-base)] border border-black/5 p-3 font-mono text-sm text-[var(--text-muted)]">
        <div className="flex items-center gap-2">
          <span className="text-[var(--text-dim)]">https://</span>
          <span className="text-[var(--text-primary)]">docs.stripe.com</span>
          <span className="ml-auto w-2 h-4 bg-[var(--accent-purple)] rounded-sm animate-pulse" />
        </div>
      </div>
    ),
  },
  {
    number: "2",
    color: "var(--accent-purple)",
    title: "Watch it crawl",
    description:
      "See every request in the network waterfall. Filter by status. Sort by size. Pause anytime.",
    mockup: (
      <div className="mt-4 rounded-xl bg-[var(--bg-base)] border border-black/5 p-3 space-y-1.5">
        {[
          { path: "/index.html", w: "85%", status: "200" },
          { path: "/styles.css", w: "60%", status: "200" },
          { path: "/hero.png", w: "92%", status: "200" },
          { path: "/api/data.json", w: "40%", status: "200" },
        ].map((r) => (
          <div key={r.path} className="flex items-center gap-2 text-xs">
            <span className="text-[var(--accent-green)] font-mono w-8">
              {r.status}
            </span>
            <span className="text-[var(--text-muted)] font-mono truncate w-28">
              {r.path}
            </span>
            <div className="flex-1 h-1.5 bg-black/5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-blue)]"
                style={{ width: r.w }}
              />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: "3",
    color: "var(--accent-blue)",
    title: "Browse offline",
    description:
      "Choose your export format. Open index.html. The entire site works offline — every link, every image, every page.",
    mockup: (
      <div className="mt-4 rounded-xl bg-[var(--bg-base)] border border-black/5 p-3 font-mono text-xs text-[var(--text-muted)] space-y-1">
        <div className="flex items-center gap-1.5">
          <span className="text-[var(--accent-blue)]">📁</span> docs.stripe.com/
        </div>
        <div className="flex items-center gap-1.5 pl-4">
          <span className="text-[var(--accent-green)]">📄</span> index.html
        </div>
        <div className="flex items-center gap-1.5 pl-4">
          <span className="text-[var(--accent-purple)]">📁</span> css/
        </div>
        <div className="flex items-center gap-1.5 pl-4">
          <span className="text-[var(--accent-red)]">📁</span> images/
        </div>
        <div className="flex items-center gap-1.5 pl-4">
          <span className="text-[var(--accent-blue)]">📄</span> api/data.json
        </div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-[var(--bg-glass-dark)]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Three steps. That's it." />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-20 left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-[var(--accent-red)]/20 via-[var(--accent-purple)]/20 to-[var(--accent-blue)]/20" />

          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.15}>
              <GlassCard className="p-8 h-full relative">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm mb-5"
                  style={{ background: step.color }}
                >
                  {step.number}
                </div>
                <h3 className="text-xl font-medium text-[var(--text-primary)] mb-2">
                  {step.title}
                </h3>
                <p className="text-[var(--text-body)] leading-relaxed">
                  {step.description}
                </p>
                {step.mockup}
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
