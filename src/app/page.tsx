import Nav from '@/components/Nav'
import Hero from '@/components/sections/Hero'
import WhatItDoes from '@/components/sections/WhatItDoes'
import Engine from '@/components/sections/Engine'
import Parsers from '@/components/sections/Parsers'
import Localization from '@/components/sections/Localization'
import Export from '@/components/sections/Export'
import Security from '@/components/sections/Security'
import DownloadCTA from '@/components/sections/DownloadCTA'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import Scene3D from '@/components/three/Scene3D'

export default function Home() {
  return (
    <>
      <Scene3D />
      {/* Vignette overlay to dim 3D edges */}
      <div
        className="pointer-events-none fixed inset-0 z-[5]"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, #09090b 85%)',
        }}
        aria-hidden="true"
      />
      <ScrollProgress />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <div className="mx-auto h-px max-w-[800px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
        <WhatItDoes />
        <div className="mx-auto h-px max-w-[800px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
        <Engine />
        <div className="mx-auto h-px max-w-[800px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
        <Parsers />
        <div className="mx-auto h-px max-w-[800px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
        <Localization />
        <div className="mx-auto h-px max-w-[800px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
        <Export />
        <div className="mx-auto h-px max-w-[800px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
        <Security />
        <div className="mx-auto h-px max-w-[800px] bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent" />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  )
}
