"use client";

import SectionHeading from "../SectionHeading";
import ScrollReveal from "../ScrollReveal";

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 280 560" className="w-full max-w-[280px] mx-auto h-auto" role="img">
      {/* Phone body */}
      <rect x="2" y="2" width="276" height="556" rx="40" fill="#fafafa" stroke="#e0e0e0" strokeWidth="1.5" />
      {/* Dynamic Island */}
      <rect x="108" y="12" width="64" height="24" rx="12" fill="#1a1a1a" />
      {/* Status bar */}
      <text x="28" y="28" fontSize="11" fill="#333" fontFamily="system-ui" fontWeight="600">9:41</text>
      {/* Signal dots */}
      <circle cx="228" cy="24" r="2" fill="#333" />
      <circle cx="235" cy="24" r="2" fill="#333" />
      <circle cx="242" cy="24" r="2" fill="#999" />
      {/* Battery */}
      <rect x="250" y="20" width="16" height="8" rx="2" fill="none" stroke="#333" strokeWidth="1" />
      <rect x="251.5" y="21.5" width="10" height="5" rx="1" fill="#333" />
      <rect x="266" y="22.5" width="1.5" height="3" rx="0.5" fill="#333" />
      {/* Content area */}
      {children}
      {/* Home indicator */}
      <rect x="110" y="538" width="60" height="4" rx="2" fill="#ccc" />
    </svg>
  );
}

function FeatureDownload() {
  return (
    <PhoneFrame>
      {/* URL bar */}
      <rect x="20" y="50" width="240" height="36" rx="10" fill="#f0f0f5" />
      <text x="32" y="73" fontSize="10" fill="#999" fontFamily="system-ui">https://docs.example.com</text>
      <circle cx="244" cy="68" r="8" fill="var(--accent-purple)" opacity="0.15" />
      <path d="M241 66l3 4 3-4" stroke="var(--accent-purple)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Progress bar */}
      <rect x="20" y="98" width="240" height="6" rx="3" fill="#f0f0f5" />
      <defs>
        <linearGradient id="prog-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-purple)" />
          <stop offset="100%" stopColor="var(--accent-blue)" />
        </linearGradient>
      </defs>
      <rect x="20" y="98" width="156" height="6" rx="3" fill="url(#prog-grad)" />
      <text x="20" y="120" fontSize="9" fill="#999" fontFamily="system-ui">65% complete — 42 of 64 files</text>

      {/* File list */}
      {[
        { name: "index.html", size: "24 KB", color: "var(--accent-purple)", done: true },
        { name: "styles.css", size: "8 KB", color: "var(--accent-blue)", done: true },
        { name: "logo.png", size: "52 KB", color: "var(--accent-green)", done: true },
        { name: "app.js", size: "31 KB", color: "var(--accent-purple)", done: false },
      ].map((file, i) => {
        const y = 140 + i * 52;
        return (
          <g key={file.name}>
            <rect x="20" y={y} width="240" height="42" rx="8" fill="white" stroke="#f0f0f5" strokeWidth="1" />
            {/* File type indicator */}
            <rect x="30" y={y + 10} width="24" height="22" rx="5" fill={file.color} opacity="0.12" />
            <text x="37" y={y + 25} fontSize="8" fill={file.color} fontFamily="system-ui" fontWeight="600">
              {file.name.split(".")[1].toUpperCase()}
            </text>
            {/* File name & size */}
            <text x="62" y={y + 20} fontSize="11" fill="#263043" fontFamily="system-ui" fontWeight="500">{file.name}</text>
            <text x="62" y={y + 32} fontSize="9" fill="#adb2bc" fontFamily="system-ui">{file.size}</text>
            {/* Status */}
            {file.done ? (
              <circle cx="244" cy={y + 21} r="8" fill="var(--accent-green)" opacity="0.15">
              </circle>
            ) : (
              <circle cx="244" cy={y + 21} r="8" fill="var(--accent-blue)" opacity="0.15" />
            )}
            {file.done ? (
              <path d={`M240 ${y + 21}l3 3 5-6`} stroke="var(--accent-green)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <g>
                <circle cx="244" cy={y + 21} r="6" fill="none" stroke="var(--accent-blue)" strokeWidth="1.5" strokeDasharray="12 25" />
              </g>
            )}
          </g>
        );
      })}

      {/* Stats row */}
      <rect x="20" y="360" width="240" height="48" rx="10" fill="#f8f8fc" />
      <text x="40" y="382" fontSize="9" fill="#999" fontFamily="system-ui">Speed</text>
      <text x="40" y="396" fontSize="11" fill="#263043" fontFamily="system-ui" fontWeight="600">2.4 MB/s</text>
      <text x="130" y="382" fontSize="9" fill="#999" fontFamily="system-ui">Files</text>
      <text x="130" y="396" fontSize="11" fill="#263043" fontFamily="system-ui" fontWeight="600">42 / 64</text>
      <text x="210" y="382" fontSize="9" fill="#999" fontFamily="system-ui">ETA</text>
      <text x="210" y="396" fontSize="11" fill="#263043" fontFamily="system-ui" fontWeight="600">0:34</text>

      {/* Bottom tab bar */}
      <rect x="0" y="420" width="280" height="1" fill="#f0f0f5" />
      <rect x="20" y="425" width="240" height="50" rx="0" fill="transparent" />
      {/* Tab icons */}
      {[
        { icon: "M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5", label: "Downloads", active: true },
        { icon: "M4 6h16M4 12h16M4 18h16", label: "Queue", active: false },
        { icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", label: "Browse", active: false },
        { icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35", label: "Settings", active: false },
      ].map((tab, i) => {
        const x = 40 + i * 56;
        return (
          <g key={tab.label}>
            <circle cx={x} cy="438" r="12" fill={tab.active ? "var(--accent-purple)" : "transparent"} opacity="0.1" />
            <text x={x} y="442" fontSize="12" fill={tab.active ? "var(--accent-purple)" : "#bbb"} fontFamily="system-ui" textAnchor="middle">
              {tab.active ? "\u25CF" : "\u25CB"}
            </text>
            <text x={x} y="460" fontSize="8" fill={tab.active ? "var(--accent-purple)" : "#bbb"} fontFamily="system-ui" textAnchor="middle">{tab.label}</text>
          </g>
        );
      })}
    </PhoneFrame>
  );
}

function FeatureLiquidGlass() {
  return (
    <PhoneFrame>
      {/* Glass navigation bar */}
      <rect x="16" y="46" width="248" height="44" rx="14" fill="white" fillOpacity="0.65" stroke="white" strokeOpacity="0.5" strokeWidth="1" />
      <text x="32" y="73" fontSize="14" fill="#263043" fontFamily="system-ui" fontWeight="600">Settings</text>
      <circle cx="248" cy="68" r="10" fill="var(--accent-purple)" opacity="0.1" />
      <text x="248" y="72" fontSize="12" fill="var(--accent-purple)" fontFamily="system-ui" textAnchor="middle">+</text>

      {/* Glass cards with settings */}
      {/* Card 1 - Download settings */}
      <rect x="16" y="104" width="248" height="140" rx="16" fill="white" fillOpacity="0.55" stroke="white" strokeOpacity="0.5" strokeWidth="1" />
      <text x="32" y="128" fontSize="10" fill="#999" fontFamily="system-ui" fontWeight="500" letterSpacing="0.5">DOWNLOAD</text>

      {[
        { label: "Max Concurrent", value: "8 files", y: 148 },
        { label: "Follow Redirects", toggle: true, on: true, y: 178 },
        { label: "Respect robots.txt", toggle: true, on: true, y: 208 },
      ].map((item) => (
        <g key={item.label}>
          <text x="32" y={item.y} fontSize="12" fill="#263043" fontFamily="system-ui">{item.label}</text>
          {item.toggle ? (
            <g>
              <rect x={item.on ? "214" : "214"} y={item.y - 10} width="38" height="20" rx="10" fill={item.on ? "var(--accent-purple)" : "#ddd"} />
              <circle cx={item.on ? "242" : "224"} cy={item.y} r="8" fill="white" />
            </g>
          ) : (
            <text x="248" y={item.y} fontSize="11" fill="#999" fontFamily="system-ui" textAnchor="end">{item.value}</text>
          )}
          {item.y < 208 && <line x1="32" y1={item.y + 13} x2="248" y2={item.y + 13} stroke="#f0f0f5" strokeWidth="0.5" />}
        </g>
      ))}

      {/* Card 2 - File types */}
      <rect x="16" y="260" width="248" height="110" rx="16" fill="white" fillOpacity="0.55" stroke="white" strokeOpacity="0.5" strokeWidth="1" />
      <text x="32" y="284" fontSize="10" fill="#999" fontFamily="system-ui" fontWeight="500" letterSpacing="0.5">FILE TYPES</text>

      {[
        { label: "HTML", on: true },
        { label: "CSS", on: true },
        { label: "Images", on: true },
        { label: "JavaScript", on: false },
      ].map((type, i) => {
        const x = 28 + (i % 2) * 124;
        const y = 300 + Math.floor(i / 2) * 32;
        return (
          <g key={type.label}>
            <rect x={x} y={y} width="112" height="24" rx="12" fill={type.on ? "var(--accent-purple)" : "#f0f0f5"} opacity={type.on ? 0.12 : 1} />
            <text x={x + 56} y={y + 16} fontSize="10" fill={type.on ? "var(--accent-purple)" : "#999"} fontFamily="system-ui" textAnchor="middle" fontWeight="500">{type.label}</text>
          </g>
        );
      })}

      {/* Card 3 - Storage */}
      <rect x="16" y="386" width="248" height="80" rx="16" fill="white" fillOpacity="0.55" stroke="white" strokeOpacity="0.5" strokeWidth="1" />
      <text x="32" y="410" fontSize="10" fill="#999" fontFamily="system-ui" fontWeight="500" letterSpacing="0.5">STORAGE</text>
      <rect x="32" y="422" width="216" height="6" rx="3" fill="#f0f0f5" />
      <rect x="32" y="422" width="86" height="6" rx="3" fill="var(--accent-purple)" opacity="0.7" />
      <rect x="118" y="422" width="42" height="6" rx="3" fill="var(--accent-blue)" opacity="0.5" />
      <text x="32" y="448" fontSize="10" fill="#263043" fontFamily="system-ui">2.4 GB used</text>
      <text x="248" y="448" fontSize="10" fill="#999" fontFamily="system-ui" textAnchor="end">of 8 GB</text>

      {/* Glass toolbar at bottom */}
      <rect x="16" y="480" width="248" height="44" rx="14" fill="white" fillOpacity="0.65" stroke="white" strokeOpacity="0.5" strokeWidth="1" />
      {["General", "Download", "Advanced"].map((tab, i) => {
        const active = i === 1;
        const x = 60 + i * 76;
        return (
          <text key={tab} x={x} y="506" fontSize="11" fill={active ? "var(--accent-purple)" : "#999"} fontFamily="system-ui" textAnchor="middle" fontWeight={active ? "600" : "400"}>{tab}</text>
        );
      })}
    </PhoneFrame>
  );
}

function FeatureCrossPlatform() {
  return (
    <svg viewBox="0 0 520 360" className="w-full max-w-[520px] mx-auto h-auto" role="img">
      {/* iPhone */}
      <g transform="translate(20, 30)">
        <rect x="0" y="0" width="160" height="300" rx="24" fill="#fafafa" stroke="#e0e0e0" strokeWidth="1.5" />
        <rect x="56" y="8" width="48" height="16" rx="8" fill="#1a1a1a" />
        {/* Status bar */}
        <text x="16" y="20" fontSize="8" fill="#333" fontFamily="system-ui" fontWeight="600">9:41</text>
        {/* Content */}
        <text x="16" y="48" fontSize="10" fill="#263043" fontFamily="system-ui" fontWeight="600">Crawl Dashboard</text>

        {/* Progress ring */}
        <circle cx="80" cy="110" r="36" fill="none" stroke="#f0f0f5" strokeWidth="5" />
        <circle cx="80" cy="110" r="36" fill="none" stroke="url(#cross-prog)" strokeWidth="5" strokeDasharray="165 226" strokeLinecap="round" transform="rotate(-90 80 110)" />
        <text x="80" y="108" fontSize="16" fill="#263043" fontFamily="system-ui" fontWeight="700" textAnchor="middle">73%</text>
        <text x="80" y="122" fontSize="8" fill="#999" fontFamily="system-ui" textAnchor="middle">complete</text>

        {/* Stats */}
        <rect x="12" y="160" width="136" height="36" rx="8" fill="#f8f8fc" />
        <text x="22" y="178" fontSize="8" fill="#999" fontFamily="system-ui">Files</text>
        <text x="22" y="190" fontSize="10" fill="#263043" fontFamily="system-ui" fontWeight="600">147</text>
        <text x="80" y="178" fontSize="8" fill="#999" fontFamily="system-ui">Speed</text>
        <text x="80" y="190" fontSize="10" fill="#263043" fontFamily="system-ui" fontWeight="600">3.2 MB/s</text>

        <rect x="12" y="206" width="136" height="36" rx="8" fill="#f8f8fc" />
        <text x="22" y="224" fontSize="8" fill="#999" fontFamily="system-ui">Size</text>
        <text x="22" y="236" fontSize="10" fill="#263043" fontFamily="system-ui" fontWeight="600">24.8 MB</text>
        <text x="80" y="224" fontSize="8" fill="#999" fontFamily="system-ui">ETA</text>
        <text x="80" y="236" fontSize="10" fill="#263043" fontFamily="system-ui" fontWeight="600">1:12</text>

        {/* Home indicator */}
        <rect x="55" y="284" width="50" height="3" rx="1.5" fill="#ccc" />
      </g>

      {/* Connection line */}
      <defs>
        <linearGradient id="cross-prog" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-purple)" />
          <stop offset="100%" stopColor="var(--accent-blue)" />
        </linearGradient>
      </defs>
      {/* Sync arrows */}
      <g transform="translate(200, 150)">
        <line x1="0" y1="0" x2="120" y2="0" stroke="var(--accent-purple)" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
        <line x1="0" y1="20" x2="120" y2="20" stroke="var(--accent-blue)" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
        {/* Arrow right */}
        <polygon points="120,0 114,-4 114,4" fill="var(--accent-purple)" opacity="0.5" />
        {/* Arrow left */}
        <polygon points="0,20 6,16 6,24" fill="var(--accent-blue)" opacity="0.5" />
        <text x="60" y="-8" fontSize="9" fill="var(--accent-purple)" fontFamily="system-ui" textAnchor="middle" fontWeight="500" opacity="0.7">sync</text>
      </g>

      {/* MacBook */}
      <g transform="translate(330, 20)">
        {/* Screen */}
        <rect x="0" y="0" width="180" height="120" rx="8" fill="#fafafa" stroke="#e0e0e0" strokeWidth="1.5" />
        {/* Notch / Camera */}
        <circle cx="90" cy="8" r="2" fill="#ccc" />
        {/* Content */}
        <text x="12" y="28" fontSize="9" fill="#263043" fontFamily="system-ui" fontWeight="600">Crawl Dashboard</text>

        {/* Progress ring */}
        <circle cx="90" cy="68" r="24" fill="none" stroke="#f0f0f5" strokeWidth="4" />
        <circle cx="90" cy="68" r="24" fill="none" stroke="url(#cross-prog)" strokeWidth="4" strokeDasharray="110 151" strokeLinecap="round" transform="rotate(-90 90 68)" />
        <text x="90" y="66" fontSize="12" fill="#263043" fontFamily="system-ui" fontWeight="700" textAnchor="middle">73%</text>
        <text x="90" y="78" fontSize="7" fill="#999" fontFamily="system-ui" textAnchor="middle">complete</text>

        {/* Stats row */}
        <text x="12" y="106" fontSize="7" fill="#999" fontFamily="system-ui">147 files</text>
        <text x="70" y="106" fontSize="7" fill="#999" fontFamily="system-ui">3.2 MB/s</text>
        <text x="130" y="106" fontSize="7" fill="#999" fontFamily="system-ui">24.8 MB</text>

        {/* MacBook base */}
        <path d="M-10 120 L190 120 L195 135 Q195 140 190 140 L-10 140 Q-15 140 -15 135 Z" fill="#e8e8e8" stroke="#d0d0d0" strokeWidth="0.5" />
        {/* Trackpad indent */}
        <rect x="55" y="126" width="70" height="8" rx="3" fill="#ddd" opacity="0.5" />
        {/* Keyboard area hint */}
        <rect x="15" y="122" width="150" height="2" rx="1" fill="#ddd" opacity="0.3" />
      </g>
    </svg>
  );
}

const features = [
  {
    title: "Download Websites Anywhere",
    description:
      "Enter a URL, tap start, and Crawlio downloads every page, image, and script. Track progress in real time with a beautiful file-by-file breakdown.",
    illustration: <FeatureDownload />,
  },
  {
    title: "Built for iOS 26",
    description:
      "Native Liquid Glass design with translucent surfaces, glass cards, and adaptive layouts. Feels right at home on iPhone and iPad.",
    illustration: <FeatureLiquidGlass />,
  },
  {
    title: "Same Engine, Every Platform",
    description:
      "The same CrawlioCore engine powers macOS and iOS. Your crawl settings, file formats, and download logic are identical across devices.",
    illustration: <FeatureCrossPlatform />,
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

        <div className="space-y-24 md:space-y-32">
          {features.map((feature) => (
            <ScrollReveal key={feature.title} delay={0.1}>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl md:text-3xl font-medium text-[var(--text-primary)] mb-4">
                  {feature.title}
                </h3>
                <p className="text-base text-[var(--text-muted)] leading-relaxed max-w-lg mb-10">
                  {feature.description}
                </p>
                <div className="w-full max-w-sm">
                  {feature.illustration}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
