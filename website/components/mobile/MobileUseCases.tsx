"use client";

import SectionHeading from "../SectionHeading";
import ScrollReveal from "../ScrollReveal";

const useCases = [
  "Archive on commute",
  "Research on iPad",
  "Save for offline reading",
  "Capture before takedown",
  "Browse cached sites",
  "Share with team",
  "AI-ready downloads",
  "Field research",
];

export default function MobileUseCases() {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Use it everywhere."
          subtitle="Crawlio goes where you go."
        />

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3">
            {useCases.map((useCase) => (
              <span
                key={useCase}
                className="glass-card px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] hover:shadow-md transition-shadow cursor-default"
                style={{ borderRadius: "9999px" }}
              >
                {useCase}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
