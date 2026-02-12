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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-bg text-text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
