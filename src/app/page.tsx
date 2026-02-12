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

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <WhatItDoes />
        <Engine />
        <Parsers />
        <Localization />
        <Export />
        <Security />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  )
}
