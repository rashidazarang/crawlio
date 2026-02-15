"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

interface DocLink {
  title: string;
  slug: string;
  category: string;
}

const docLinks: DocLink[] = [
  { title: "Getting Started", slug: "getting-started", category: "Getting Started" },
  { title: "MCP Overview", slug: "mcp-overview", category: "MCP Integration" },
  { title: "MCP Tools Reference", slug: "mcp-tools", category: "MCP Integration" },
  { title: "HTTP API", slug: "http-api", category: "Reference" },
  { title: "File Locations", slug: "file-locations", category: "Reference" },
];

function groupByCategory(links: DocLink[]): { category: string; links: DocLink[] }[] {
  const groups: { category: string; links: DocLink[] }[] = [];
  for (const link of links) {
    const existing = groups.find((g) => g.category === link.category);
    if (existing) {
      existing.links.push(link);
    } else {
      groups.push({ category: link.category, links: [link] });
    }
  }
  return groups;
}

export default function DocsSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const groups = groupByCategory(docLinks);

  const sidebar = (
    <nav className="space-y-6">
      {groups.map((group) => (
        <div key={group.category}>
          <h4 className="text-xs font-medium text-[var(--text-dim)] uppercase tracking-wider mb-2 px-3">
            {group.category}
          </h4>
          <ul className="space-y-0.5">
            {group.links.map((link) => {
              const href = `/docs/${link.slug}`;
              const isActive = pathname === href;
              return (
                <li key={link.slug}>
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive
                        ? "bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] font-medium"
                        : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-black/[0.02]"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="lg:hidden fixed bottom-6 right-6 z-50 btn-primary p-3 rounded-full shadow-lg"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle docs menu"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/20" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-64 bg-[var(--bg-base)] p-6 pt-24 shadow-xl overflow-y-auto">
            {sidebar}
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-56 shrink-0 sticky top-24 self-start">
        <div className="glass-card p-4">
          {sidebar}
        </div>
      </aside>
    </>
  );
}
