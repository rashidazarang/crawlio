"use client";

import SectionHeading from "./SectionHeading";
import GlassCard from "./GlassCard";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    color: "var(--accent-red)",
    title: "Crawl anything",
    description:
      "HTML, CSS, images, video, PDFs, fonts — Crawlio finds every resource on every page, automatically.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636a9 9 0 11-12.728 0M12 3v9" />
      </svg>
    ),
    color: "var(--accent-purple)",
    title: "Browse offline",
    description:
      "Every link rewritten to work locally. Open index.html and navigate the entire site like you're still online.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    color: "var(--accent-blue)",
    title: "Export anywhere",
    description:
      "Folder, ZIP, single HTML file, or WARC archive. Share it, host it, preserve it — your choice.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "var(--accent-green)",
    title: "Respect by default",
    description:
      "Follows robots.txt. Enforces crawl delays. Pauses when you lose connection. Power without recklessness.",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Four reasons to download everything." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.1}>
              <GlassCard hover className="p-8 h-full">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${f.color}15`,
                    color: f.color,
                  }}
                >
                  {f.icon}
                </div>
                <h3 className="text-xl font-medium text-[var(--text-primary)] mb-2">
                  {f.title}
                </h3>
                <p className="text-[var(--text-body)] leading-relaxed">
                  {f.description}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
