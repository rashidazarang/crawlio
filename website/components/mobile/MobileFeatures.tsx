"use client";

import SectionHeading from "../SectionHeading";
import GlassCard from "../GlassCard";
import ScrollReveal from "../ScrollReveal";

const features = [
  {
    title: "Crawl Anywhere",
    description:
      "Full website downloads from your phone or tablet. Enter a URL, tap start, and Crawlio downloads every page, image, stylesheet, and script — just like the macOS app.",
    color: "var(--accent-purple)",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Liquid Glass UI",
    description:
      "Built for iOS 26 with Apple's Liquid Glass design language. Translucent surfaces, adaptive layouts for iPhone and iPad, and haptic feedback on every action.",
    color: "var(--accent-blue)",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Seamless Sync",
    description:
      "Same CrawlioCore engine powers both macOS and iOS. Your crawl settings, file formats, and download logic are identical across platforms.",
    color: "var(--accent-green)",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
];

export default function MobileFeatures() {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Everything you need, in your pocket."
          subtitle="The same download engine that powers Crawlio on macOS, redesigned for touch."
        />

        <div className="space-y-16 md:space-y-24">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={0.1}>
              <div
                className={`flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-12 items-center`}
              >
                <div className="flex-1 space-y-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${feature.color}12`,
                      color: feature.color,
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-medium text-[var(--text-primary)]">
                    {feature.title}
                  </h3>
                  <p className="text-base text-[var(--text-muted)] leading-relaxed max-w-lg">
                    {feature.description}
                  </p>
                </div>

                <div className="flex-1 w-full max-w-md">
                  <GlassCard className="p-6 aspect-[4/3] flex items-center justify-center">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `${feature.color}15`,
                        color: feature.color,
                      }}
                    >
                      {feature.icon}
                    </div>
                  </GlassCard>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
