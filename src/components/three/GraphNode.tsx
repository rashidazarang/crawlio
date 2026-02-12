'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { type NodeData, getTypeColor } from '@/lib/graph-data'

interface GraphNodeProps {
  nodes: NodeData[]
  scrollProgress: number
}

export default function GraphNode({ nodes, scrollProgress }: GraphNodeProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const colorArray = useMemo(() => {
    const arr = new Float32Array(nodes.length * 3)
    nodes.forEach((node, i) => {
      const color = new THREE.Color(getTypeColor(node.type))
      arr[i * 3] = color.r
      arr[i * 3 + 1] = color.g
      arr[i * 3 + 2] = color.b
    })
    return arr
  }, [nodes])

  useFrame(() => {
    if (!meshRef.current) return

    nodes.forEach((node, i) => {
      // Nodes appear progressively based on depth and scroll
      const depthThreshold = 0.12 + node.depth * 0.12
      const visibility = THREE.MathUtils.clamp((scrollProgress - depthThreshold) / 0.1, 0, 1)

      const scale = visibility * (node.depth === 0 ? 0.12 : 0.08)
      dummy.position.set(...node.position)
      dummy.scale.setScalar(scale)
      dummy.updateMatrix()
      meshRef.current!.setMatrixAt(i, dummy.matrix)
    })

    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, nodes.length]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial roughness={0.8} metalness={0.1} />
      <instancedBufferAttribute attach="instanceColor" args={[colorArray, 3]} />
    </instancedMesh>
  )
}
