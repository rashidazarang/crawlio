'use client'

import { useEffect, useState } from 'react'
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-white/5' : ''
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
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

        <Button href="#download" className="text-xs">
          Download
        </Button>
      </div>
    </nav>
  )
}
