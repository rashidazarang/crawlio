import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileHero from '@/components/sections/mobile/MobileHero'
import MobileFeatures from '@/components/sections/mobile/MobileFeatures'
import MobileUseCases from '@/components/sections/mobile/MobileUseCases'
import MobileCTA from '@/components/sections/mobile/MobileCTA'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Crawlio Mobile — Download Websites on iPhone & iPad',
  description:
    'Download entire websites from your iPhone or iPad. Same powerful CrawlioCore engine, native iOS experience with Liquid Glass design.',
  openGraph: {
    title: 'Crawlio Mobile — The Web, In Your Pocket',
    description:
      'Download entire websites from your iPhone or iPad. Native iOS app with Liquid Glass design.',
    type: 'website',
  },
}

export default function MobilePage() {
  return (
    <>
      <Nav />
      <main className="relative z-10">
        <MobileHero />
        <div className="mx-auto h-px max-w-[800px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
        <MobileFeatures />
        <div className="mx-auto h-px max-w-[800px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
        <MobileUseCases />
        <div className="mx-auto h-px max-w-[800px] bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent" />
        <MobileCTA />
      </main>
      <Footer />
    </>
  )
}
