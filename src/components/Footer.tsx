export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="text-sm font-medium text-text-primary">Crawlio</div>
        <div className="text-xs text-text-secondary">
          Built with Swift 6 + SwiftUI
        </div>
        <a
          href="https://github.com"
          className="text-xs text-text-secondary transition-colors hover:text-text-primary"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}
