import ScrollReveal from "./ScrollReveal";

export default function FinalCTA() {
  return (
    <section className="section-padding mesh-gradient grain relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="gradient-text text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4">
            Download Crawlio.
          </h2>
          <p className="text-lg md:text-xl text-[var(--text-muted)] mb-10">
            Start archiving websites today.
          </p>
          <a
            href="/download"
            className="btn-primary text-base px-8 py-3.5 inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download for Mac
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
