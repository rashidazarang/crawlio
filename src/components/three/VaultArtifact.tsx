'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import useScrollProgress from '@/hooks/useScrollProgress'

export default function VaultArtifact() {
  const groupRef = useRef<THREE.Group>(null)
  const scroll = useScrollProgress()
  const scrollRef = useRef(0)
  scrollRef.current = scroll

  useFrame((_, delta) => {
    if (!groupRef.current) return

    const s = scrollRef.current

    // Slow rotation
    groupRef.current.rotation.y += delta * 0.2

    // Visibility logic:
    // Hero (0-0.12): visible, centered
    // Sections 2-5 (0.12-0.62): fade out
    // Section 6 (0.62-0.75): reappear
    // Section 7+ (0.75-1.0): visible then fade
    let scale = 1
    let opacity = 1

    if (s < 0.12) {
      scale = 1
      opacity = 1
    } else if (s < 0.62) {
      const t = (s - 0.12) / 0.5
      scale = THREE.MathUtils.lerp(1, 0.3, t)
      opacity = THREE.MathUtils.lerp(1, 0, t)
    } else if (s < 0.75) {
      const t = (s - 0.62) / 0.13
      scale = THREE.MathUtils.lerp(0.3, 1.2, t)
      opacity = THREE.MathUtils.lerp(0, 1, t)
    } else if (s < 0.87) {
      scale = 1.2
      opacity = 1
    } else {
      const t = (s - 0.87) / 0.13
      scale = THREE.MathUtils.lerp(1.2, 0.8, t)
      opacity = THREE.MathUtils.lerp(1, 0.3, t)
    }

    groupRef.current.scale.setScalar(scale)
    groupRef.current.visible = opacity > 0.01
  })

  return (
    <group ref={groupRef}>
      {/* Outer capsule */}
      <mesh>
        <capsuleGeometry args={[0.4, 1.2, 16, 32]} />
        <meshPhysicalMaterial
          transmission={0.92}
          roughness={0.05}
          clearcoat={1}
          ior={1.5}
          color="#a5f3fc"
          thickness={0.5}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Inner glow sphere */}
      <mesh>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          color="#a5f3fc"
          emissive="#a5f3fc"
          emissiveIntensity={0.4}
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  )
}
