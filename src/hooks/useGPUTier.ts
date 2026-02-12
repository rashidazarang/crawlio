'use client'

import { useEffect, useState } from 'react'
import { type GPUTier, detectGPUTier } from '@/lib/gpu-detect'

export default function useGPUTier(): GPUTier {
  const [tier, setTier] = useState<GPUTier>('low')

  useEffect(() => {
    setTier(detectGPUTier())
  }, [])

  return tier
}
