'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import useScrollProgress from '@/hooks/useScrollProgress'

export default function ExportCollapse() {
  const groupRef = useRef<THREE.Group>(null)
  const scroll = useScrollProgress()
  const scrollRef = useRef(0)
  scrollRef.current = scroll

  const pulseIntensity = useRef(0)

  // Small particles that rush toward center during export section
  const particles = useMemo(() => {
    const count = 60
    const data: { start: THREE.Vector3; end: THREE.Vector3 }[] = []
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2 + Math.random() * 2
      data.push({
        start: new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        ),
        end: new THREE.Vector3(
          (Math.random() - 0.5) * 0.3,
          (Math.random() - 0.5) * 0.8,
          (Math.random() - 0.5) * 0.3
        ),
      })
    }
    return data
  }, [])

  useFrame(() => {
    if (!groupRef.current) return
    const s = scrollRef.current

    // Only active during export section (0.62-0.75)
    const isActive = s >= 0.58 && s <= 0.78
    groupRef.current.visible = isActive

    if (!isActive) return

    const t = THREE.MathUtils.clamp((s - 0.62) / 0.13, 0, 1)

    // Emissive pulse when sealed
    if (t > 0.9) {
      pulseIntensity.current = THREE.MathUtils.lerp(pulseIntensity.current, 0.3, 0.05)
    } else {
      pulseIntensity.current = THREE.MathUtils.lerp(pulseIntensity.current, 0, 0.05)
    }

    // Update particle positions
    const children = groupRef.current.children
    particles.forEach((p, i) => {
      if (i < children.length) {
        const mesh = children[i] as THREE.Mesh
        mesh.position.lerpVectors(p.start, p.end, t)
        const scale = THREE.MathUtils.lerp(0.04, 0.01, t)
        mesh.scale.setScalar(scale)
      }
    })
  })

  return (
    <group ref={groupRef}>
      {particles.map((_, i) => (
        <mesh key={i}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshStandardMaterial
            color="#a5f3fc"
            emissive="#a5f3fc"
            emissiveIntensity={0.3}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  )
}
