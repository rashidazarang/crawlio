import Image from "next/image";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Download", href: "/download" },
      { label: "Docs", href: "/docs" },
      { label: "Mobile App", href: "/mobile" },
      { label: "Changelog", href: "/blog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="section-padding border-t border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.png" alt="Crawlio" width={24} height={24} />
              <span className="font-semibold text-[var(--text-primary)]">
                Crawlio
              </span>
            </div>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-xs">
              Download entire websites. Browse offline. Build with AI.
            </p>
            <p className="text-xs text-[var(--text-dim)] mt-3">
              Built with Swift. No Electron. No cloud.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-medium text-[var(--text-dim)] uppercase tracking-wider mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-dim)]">
            &copy; {new Date().getFullYear()} Crawlio. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-dim)]">
            Native macOS app. One-time purchase.
          </p>
        </div>
      </div>
    </footer>
  );
}
