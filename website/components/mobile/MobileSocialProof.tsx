"use client";

import ScrollReveal from "../ScrollReveal";

const badges = [
  "Website Archiving",
  "Offline Browsing",
  "AI-Ready Data",
  "macOS + iOS",
  "One-Time Purchase",
  "No Subscription",
];

function TrustBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-black/5 bg-white/60 whitespace-nowrap">
      <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-[var(--accent-purple)]/10 to-[var(--accent-blue)]/10 flex items-center justify-center">
        <svg className="w-3.5 h-3.5 text-[var(--accent-purple)]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </span>
      <span className="text-sm text-[var(--text-muted)] font-medium">
        {label}
      </span>
    </div>
  );
}

export default function MobileSocialProof() {
  const doubled = [...badges, ...badges];

  return (
    <section className="section-padding pb-0">
      <ScrollReveal>
        <p className="text-center text-sm text-[var(--text-dim)] uppercase tracking-wider font-medium mb-8">
          Trusted by developers &amp; researchers
        </p>
      </ScrollReveal>
      <div className="relative overflow-hidden max-w-4xl mx-auto">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--bg-base)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--bg-base)] to-transparent z-10" />

        <div className="flex gap-6 animate-marquee w-max">
          {doubled.map((badge, i) => (
            <TrustBadge key={`${badge}-${i}`} label={badge} />
          ))}
        </div>
      </div>
    </section>
  );
}
