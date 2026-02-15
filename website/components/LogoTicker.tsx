"use client";

import ScrollReveal from "./ScrollReveal";

const tools = [
  { name: "Claude Code", icon: "C" },
  { name: "ChatGPT", icon: "G" },
  { name: "Cursor", icon: "Cu" },
  { name: "VS Code", icon: "VS" },
  { name: "Any MCP Client", icon: "M" },
];

function ToolBadge({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-black/5 bg-white/60 whitespace-nowrap">
      <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-[var(--accent-purple)]/10 to-[var(--accent-blue)]/10 flex items-center justify-center text-xs font-semibold text-[var(--accent-purple)]">
        {icon}
      </span>
      <span className="text-sm text-[var(--text-muted)] font-medium">
        {name}
      </span>
    </div>
  );
}

export default function LogoTicker() {
  const doubled = [...tools, ...tools];

  return (
    <section className="section-padding pb-0">
      <ScrollReveal>
        <p className="text-center text-sm text-[var(--text-dim)] uppercase tracking-wider font-medium mb-8">
          Works with
        </p>
      </ScrollReveal>
      <div className="relative overflow-hidden max-w-4xl mx-auto">
        {/* Gradient edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--bg-base)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--bg-base)] to-transparent z-10" />

        <div className="flex gap-6 animate-marquee w-max">
          {doubled.map((tool, i) => (
            <ToolBadge key={`${tool.name}-${i}`} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
