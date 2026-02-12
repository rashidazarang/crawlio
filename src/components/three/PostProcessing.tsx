'use client'

import { Bloom, EffectComposer, Noise } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

export default function PostProcessing() {
  return (
    <EffectComposer>
      <Bloom
        luminanceThreshold={0.8}
        intensity={0.06}
        radius={0.4}
        mipmapBlur
      />
      <Noise
        blendFunction={BlendFunction.SOFT_LIGHT}
        opacity={0.04}
      />
    </EffectComposer>
  )
}
