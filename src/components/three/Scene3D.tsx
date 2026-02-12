'use client'

import dynamic from 'next/dynamic'
import useGPUTier from '@/hooks/useGPUTier'
import FallbackScene from '@/components/fallback/FallbackScene'

const SceneRoot = dynamic(() => import('@/components/three/SceneRoot'), { ssr: false })

export default function Scene3D() {
  const tier = useGPUTier()

  if (tier === 'low') return <FallbackScene />

  return <SceneRoot />
}
