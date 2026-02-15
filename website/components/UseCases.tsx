"use client";

import SectionHeading from "./SectionHeading";
import GlassCard from "./GlassCard";
import ScrollReveal from "./ScrollReveal";

const cases = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Archive documentation",
    description:
      "API docs, framework guides, changelogs — download the version you're using and keep it forever.",
    color: "var(--accent-red)",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    title: "Build local datasets",
    description:
      "Training data, research corpora, competitor analysis. Download once, process offline, no rate limits.",
    color: "var(--accent-purple)",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Preserve communities",
    description:
      "Forums, wikis, knowledge bases — sites run by volunteers disappear without warning. Download them while they exist.",
    color: "var(--accent-blue)",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636a9 9 0 11-12.728 0M12 3v9" />
      </svg>
    ),
    title: "Work without internet",
    description:
      "Flights, trains, cafes with bad wifi. Your downloaded sites work the same as the originals.",
    color: "var(--accent-green)",
  },
];

export default function UseCases() {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="More things you can do." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cases.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.08}>
              <GlassCard hover className="p-6 h-full">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: `${c.color}12`,
                    color: c.color,
                  }}
                >
                  {c.icon}
                </div>
                <h3 className="text-base font-medium text-[var(--text-primary)] mb-1.5">
                  {c.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {c.description}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
