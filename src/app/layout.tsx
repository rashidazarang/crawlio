import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Crawlio — Download any website. Browse it offline.',
  description:
    'Crawlio is a modern macOS website downloader. Crawl, download, and package entire websites for offline browsing. Built with Swift 6 and SwiftUI.',
  openGraph: {
    title: 'Crawlio — Download any website. Browse it offline.',
    description:
      'A modern macOS website downloader. Crawl, download, and package entire websites for offline browsing.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crawlio — Download any website. Browse it offline.',
    description:
      'A modern macOS website downloader. Crawl, download, and package entire websites for offline browsing.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Crawlio',
  operatingSystem: 'macOS 14+',
  applicationCategory: 'UtilitiesApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description:
    'A modern macOS website downloader. Crawl, download, and package entire websites for offline browsing.',
  softwareVersion: '1.0.0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-bg text-text-primary antialiased`}
      >
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-accent-cyan focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
