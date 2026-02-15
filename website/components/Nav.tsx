"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links: { label: string; href: string; badge?: string }[] = [
  { label: "Features", href: "#features" },
  { label: "Mobile", href: "/mobile", badge: "New" },
  { label: "Docs", href: "/docs" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8 h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Crawlio" width={28} height={28} />
          <span className="font-semibold text-[var(--text-primary)] text-lg">
            Crawlio
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-1.5"
            >
              {l.label}
              {l.badge && (
                <span className="text-[10px] font-semibold bg-[var(--accent-purple)] text-white px-1.5 py-0.5 rounded-full leading-none">
                  {l.badge}
                </span>
              )}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/download"
            className="btn-primary text-sm py-2 px-4"
          >
            Download for Mac
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-[var(--text-primary)] transition-transform duration-200 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-[var(--text-primary)] transition-opacity duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-[var(--text-primary)] transition-transform duration-200 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass-nav border-t border-white/20 px-4 pb-6 pt-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] flex items-center gap-1.5"
            >
              {l.label}
              {l.badge && (
                <span className="text-[10px] font-semibold bg-[var(--accent-purple)] text-white px-1.5 py-0.5 rounded-full leading-none">
                  {l.badge}
                </span>
              )}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="/download"
              className="btn-primary text-sm py-2 px-4 text-center"
            >
              Download for Mac
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
