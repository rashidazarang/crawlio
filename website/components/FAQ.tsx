"use client";

import * as Accordion from "@radix-ui/react-accordion";
import SectionHeading from "./SectionHeading";
import GlassCard from "./GlassCard";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "How much does Crawlio cost?",
    a: "Crawlio is a one-time purchase. Pay once, own it forever. No subscriptions, no recurring fees.",
  },
  {
    q: "Does it handle JavaScript-heavy sites?",
    a: "Yes. Enable WebView mode and Crawlio renders JavaScript before downloading — just like a real browser.",
  },
  {
    q: "Will it get me blocked by websites?",
    a: "Crawlio respects robots.txt by default, enforces crawl delays between requests, and distributes load fairly across hosts. It's designed to be a good citizen.",
  },
  {
    q: "What Mac do I need?",
    a: "Any Mac running macOS 14 (Sonoma) or later.",
  },
  {
    q: "Can I use it for compliance or digital preservation?",
    a: "Yes. WARC export follows the ISO 28500 standard — the same format used by the Internet Archive's Wayback Machine.",
  },
  {
    q: "Does it collect any data?",
    a: "No. Zero telemetry. Zero analytics. No accounts. Everything runs locally on your Mac.",
  },
  {
    q: "How is this different from wget --mirror?",
    a: "Crawlio gives you a native macOS app with a visual waterfall, live preview, site map tree, command palette, four export formats, and proper link rewriting. It's wget --mirror if wget had a UI team.",
  },
  {
    q: "Can I use downloaded sites with AI tools?",
    a: "Yes — that's the whole point. Download a site, open the folder in your IDE, and point ChatGPT, Claude, or any MCP-compatible AI at the files. It reads actual HTML, CSS, and assets — not screenshots or descriptions.",
  },
  {
    q: "What is MCP?",
    a: "Model Context Protocol — an open standard that lets AI tools use apps directly. ChatGPT, Claude, Cursor, and others all support it. Crawlio's MCP server means any of them can start downloads, check progress, and read results without you touching the GUI.",
  },
  {
    q: "Does this work with ChatGPT?",
    a: "Yes. ChatGPT Desktop supports MCP. So does Claude Code, Claude Desktop, Cursor, and any other MCP-compatible client. Same tools, same experience.",
  },
  {
    q: "Do I need to configure anything for the AI integration?",
    a: "No. If Crawlio is running, your AI finds it automatically. The MCP server discovers the running app through a local port file. No API keys, no setup, no config files.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-[var(--bg-glass-dark)]">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Frequently asked questions." />

        <ScrollReveal>
          <GlassCard className="p-2 md:p-4">
            <Accordion.Root type="multiple" className="divide-y divide-black/5">
              {faqs.map((faq, i) => (
                <Accordion.Item key={i} value={`faq-${i}`}>
                  <Accordion.Trigger className="flex items-center justify-between w-full py-5 px-4 text-left group cursor-pointer">
                    <span className="text-[var(--text-primary)] font-medium text-sm md:text-base pr-4">
                      {faq.q}
                    </span>
                    <svg
                      className="accordion-chevron w-4 h-4 text-[var(--text-dim)] shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Accordion.Trigger>
                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-[slideDown_300ms_ease-out] data-[state=closed]:animate-[slideUp_300ms_ease-out]">
                    <div className="px-4 pb-5 text-sm text-[var(--text-muted)] leading-relaxed">
                      {faq.a}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
