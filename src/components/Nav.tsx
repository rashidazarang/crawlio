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
        <a href="#" className="text-lg font-bold tracking-tight text-text-primary">
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
