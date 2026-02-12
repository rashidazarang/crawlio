'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Line } from '@react-three/drei'
import * as THREE from 'three'
import useScrollProgress from '@/hooks/useScrollProgress'

// Shield shape: pointed at bottom, curved at top
const shieldPoints: [number, number, number][] = [
  [0, -1.2, 0],
  [-0.6, -0.4, 0],
  [-0.8, 0.2, 0],
  [-0.7, 0.7, 0],
  [-0.4, 1.0, 0],
  [0, 1.1, 0],
  [0.4, 1.0, 0],
  [0.7, 0.7, 0],
  [0.8, 0.2, 0],
  [0.6, -0.4, 0],
  [0, -1.2, 0],
]

export default function ShieldMotif() {
  const groupRef = useRef<THREE.Group>(null)
  const scroll = useScrollProgress()
  const scrollRef = useRef(0)
  scrollRef.current = scroll

  useFrame((_, delta) => {
    if (!groupRef.current) return

    const s = scrollRef.current

    // Only visible in section 7 (0.75-0.87)
    const visibility = s >= 0.72 && s <= 0.90
      ? THREE.MathUtils.clamp((s - 0.72) / 0.05, 0, 1) * THREE.MathUtils.clamp((0.90 - s) / 0.05, 0, 1)
      : 0

    groupRef.current.visible = visibility > 0.01
    groupRef.current.scale.setScalar(visibility * 0.8)
    groupRef.current.rotation.y += delta * 0.3
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Line
        points={shieldPoints}
        color="#a5f3fc"
        lineWidth={2}
        transparent
        opacity={0.6}
      />
    </group>
  )
}
