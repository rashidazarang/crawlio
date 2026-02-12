'use client'

import dynamic from 'next/dynamic'
import useGPUTier from '@/hooks/useGPUTier'

const SceneRoot = dynamic(() => import('@/components/three/SceneRoot'), { ssr: false })

export default function Scene3D() {
  const tier = useGPUTier()

  if (tier === 'low') return null

  return <SceneRoot />
}
