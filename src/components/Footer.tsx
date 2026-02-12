export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-12">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-6 sm:px-8 md:flex-row md:px-12">
        <div className="flex items-center gap-2 text-sm font-medium text-text-primary">
          <svg width="18" height="18" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <path d="M48 12a28 28 0 1 0 0 40" stroke="#a5f3fc" strokeWidth="4" strokeLinecap="round" fill="none"/>
            <circle cx="20" cy="24" r="3" fill="#a5f3fc"/>
            <circle cx="32" cy="16" r="2.5" fill="#a5f3fc" opacity="0.7"/>
            <circle cx="20" cy="40" r="2.5" fill="#a5f3fc" opacity="0.7"/>
            <line x1="20" y1="24" x2="32" y2="16" stroke="#a5f3fc" strokeWidth="1.5" opacity="0.4"/>
            <line x1="20" y1="24" x2="20" y2="40" stroke="#a5f3fc" strokeWidth="1.5" opacity="0.4"/>
            <circle cx="26" cy="32" r="4" fill="#a5f3fc" opacity="0.9"/>
          </svg>
          Crawlio
        </div>
        <div className="text-xs text-text-secondary">
          Built with Swift 6 + SwiftUI
        </div>
        <a
          href="https://github.com/rashidazarang/crawlio"
          className="text-xs text-text-secondary transition-colors hover:text-text-primary"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}
