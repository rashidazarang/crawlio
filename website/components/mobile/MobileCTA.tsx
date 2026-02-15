"use client";

import ScrollReveal from "../ScrollReveal";

function QRCodeSVG() {
  return (
    <svg viewBox="0 0 120 120" className="w-28 h-28" aria-hidden="true">
      <defs>
        <linearGradient id="qr-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent-purple)" />
          <stop offset="100%" stopColor="var(--accent-blue)" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="12" fill="white" stroke="var(--accent-purple)" strokeWidth="1" opacity="0.15" />
      {/* Top-left finder */}
      <rect x="10" y="10" width="28" height="28" rx="4" fill="url(#qr-grad)" opacity="0.9" />
      <rect x="15" y="15" width="18" height="18" rx="2" fill="white" />
      <rect x="19" y="19" width="10" height="10" rx="1" fill="url(#qr-grad)" />
      {/* Top-right finder */}
      <rect x="82" y="10" width="28" height="28" rx="4" fill="url(#qr-grad)" opacity="0.9" />
      <rect x="87" y="15" width="18" height="18" rx="2" fill="white" />
      <rect x="91" y="19" width="10" height="10" rx="1" fill="url(#qr-grad)" />
      {/* Bottom-left finder */}
      <rect x="10" y="82" width="28" height="28" rx="4" fill="url(#qr-grad)" opacity="0.9" />
      <rect x="15" y="87" width="18" height="18" rx="2" fill="white" />
      <rect x="19" y="91" width="10" height="10" rx="1" fill="url(#qr-grad)" />
      {/* Data modules */}
      {[
        [44, 12], [52, 12], [60, 12], [68, 12],
        [44, 20], [60, 20], [68, 20],
        [44, 28], [52, 28], [68, 28],
        [12, 44], [20, 44], [28, 44], [44, 44], [52, 44], [60, 44], [76, 44], [92, 44], [100, 44],
        [12, 52], [36, 52], [52, 52], [68, 52], [84, 52], [100, 52],
        [20, 60], [28, 60], [44, 60], [60, 60], [76, 60], [92, 60],
        [12, 68], [36, 68], [52, 68], [68, 68], [84, 68], [100, 68],
        [44, 76], [52, 76], [60, 76], [76, 76], [92, 76], [100, 76],
        [44, 84], [68, 84], [76, 84], [84, 84],
        [44, 92], [52, 92], [60, 92], [76, 92], [100, 92],
        [44, 100], [68, 100], [84, 100], [92, 100], [100, 100],
      ].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="6" height="6" rx="1" fill="url(#qr-grad)" opacity={0.5 + (i % 3) * 0.2} />
      ))}
    </svg>
  );
}

export default function MobileCTA() {
  return (
    <section className="section-padding mesh-gradient grain relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="gradient-text text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4">
            Take the web with you.
          </h2>
          <p className="text-lg md:text-xl text-[var(--text-muted)] mb-10">
            Download Crawlio for iPhone and iPad.
          </p>

          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <a
                href="#"
                className="btn-primary text-base px-8 py-3.5 inline-flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on the App Store
              </a>

              <QRCodeSVG />
            </div>

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 bg-white/60 text-sm font-medium text-[var(--text-muted)]">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-green)]" />
              Free to download
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
