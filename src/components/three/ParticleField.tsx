'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { createParticleData } from '@/lib/particle-system'
import useScrollProgress from '@/hooks/useScrollProgress'

import vertexShader from '@/shaders/particle.vert.glsl'
import fragmentShader from '@/shaders/particle.frag.glsl'

interface ParticleFieldProps {
  count?: number
}

export default function ParticleField({ count = 500 }: ParticleFieldProps) {
  const meshRef = useRef<THREE.Points>(null)
  const scroll = useScrollProgress()
  const scrollRef = useRef(0)
  scrollRef.current = scroll

  const { positions, sizes, opacities } = useMemo(() => createParticleData(count), [count])

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uScroll: { value: 0 },
    }),
    []
  )

  useFrame((_, delta) => {
    uniforms.uTime.value += delta
    uniforms.uScroll.value = THREE.MathUtils.lerp(uniforms.uScroll.value, scrollRef.current, 0.05)
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-aOpacity" args={[opacities, 1]} />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
