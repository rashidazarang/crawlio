'use client'

import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import useScrollProgress from '@/hooks/useScrollProgress'

const waypoints: { range: [number, number]; position: [number, number, number]; lookAt: [number, number, number] }[] = [
  { range: [0.00, 0.12], position: [0, 0, 8], lookAt: [0, 0, 0] },
  { range: [0.12, 0.25], position: [0, 0.5, 7], lookAt: [0, 0, 0] },
  { range: [0.25, 0.37], position: [1, 0.5, 6], lookAt: [0, 0, 0] },
  { range: [0.37, 0.50], position: [0, 1, 5.5], lookAt: [0, 0, 0] },
  { range: [0.50, 0.62], position: [-1, 0, 6], lookAt: [0, 0, 0] },
  { range: [0.62, 0.75], position: [0, 0, 5], lookAt: [0, 0, 0] },
  { range: [0.75, 0.87], position: [0.5, -0.5, 6], lookAt: [0, 0, 0] },
  { range: [0.87, 1.00], position: [0, 0, 8], lookAt: [0, 0, 0] },
]

export default function CameraRig() {
  const { camera } = useThree()
  const scroll = useScrollProgress()
  const scrollRef = useRef(0)
  scrollRef.current = scroll

  const targetPos = useRef(new THREE.Vector3(0, 0, 8))
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0))

  useFrame(() => {
    const s = scrollRef.current

    // Find current and next waypoint
    let from = waypoints[0]
    let to = waypoints[0]
    let t = 0

    for (let i = 0; i < waypoints.length; i++) {
      const wp = waypoints[i]
      if (s >= wp.range[0] && s <= wp.range[1]) {
        from = wp
        to = waypoints[Math.min(i + 1, waypoints.length - 1)]
        t = (s - wp.range[0]) / (wp.range[1] - wp.range[0])
        break
      }
    }

    // Interpolate target
    targetPos.current.set(
      THREE.MathUtils.lerp(from.position[0], to.position[0], t),
      THREE.MathUtils.lerp(from.position[1], to.position[1], t),
      THREE.MathUtils.lerp(from.position[2], to.position[2], t)
    )

    targetLookAt.current.set(
      THREE.MathUtils.lerp(from.lookAt[0], to.lookAt[0], t),
      THREE.MathUtils.lerp(from.lookAt[1], to.lookAt[1], t),
      THREE.MathUtils.lerp(from.lookAt[2], to.lookAt[2], t)
    )

    // Damped follow
    camera.position.lerp(targetPos.current, 0.05)
    const currentLookAt = new THREE.Vector3()
    camera.getWorldDirection(currentLookAt)
    camera.lookAt(targetLookAt.current)
  })

  return null
}
