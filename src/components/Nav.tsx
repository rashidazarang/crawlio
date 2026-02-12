'use client'

import { useEffect, useState, useCallback } from 'react'
import Button from './ui/Button'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Engine', href: '#engine' },
  { label: 'Parsers', href: '#parsers' },
  { label: 'Export', href: '#export' },
  { label: 'Security', href: '#security' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-bg/90 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.06)]' : ''
        }`}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 sm:px-8 py-4 md:px-12">
          <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight text-text-primary">
            <svg width="24" height="24" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <path d="M48 12a28 28 0 1 0 0 40" stroke="#a5f3fc" strokeWidth="4" strokeLinecap="round" fill="none"/>
              <circle cx="20" cy="24" r="3" fill="#a5f3fc"/>
              <circle cx="32" cy="16" r="2.5" fill="#a5f3fc" opacity="0.7"/>
              <circle cx="20" cy="40" r="2.5" fill="#a5f3fc" opacity="0.7"/>
              <line x1="20" y1="24" x2="32" y2="16" stroke="#a5f3fc" strokeWidth="1.5" opacity="0.4"/>
              <line x1="20" y1="24" x2="20" y2="40" stroke="#a5f3fc" strokeWidth="1.5" opacity="0.4"/>
              <line x1="20" y1="40" x2="32" y2="48" stroke="#a5f3fc" strokeWidth="1.5" opacity="0.4"/>
              <circle cx="26" cy="32" r="4" fill="#a5f3fc" opacity="0.9"/>
            </svg>
            Crawlio
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button href="#download" className="text-xs">
              Download
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary transition-colors hover:text-text-primary md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className={`flex h-full flex-col items-center justify-center gap-8 transition-transform duration-300 ${
          mobileOpen ? 'translate-y-0' : '-translate-y-4'
        }`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="text-2xl font-semibold text-text-primary transition-colors hover:text-accent-cyan"
            >
              {link.label}
            </a>
          ))}
          <Button href="#download" className="mt-4">
            Download
          </Button>
        </div>
      </div>
    </>
  )
}
