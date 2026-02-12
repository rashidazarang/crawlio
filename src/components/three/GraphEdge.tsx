'use client'

import { useMemo } from 'react'
import { Line } from '@react-three/drei'
import { type NodeData, type EdgeData } from '@/lib/graph-data'

interface GraphEdgeProps {
  nodes: NodeData[]
  edges: EdgeData[]
  scrollProgress: number
}

export default function GraphEdge({ nodes, edges, scrollProgress }: GraphEdgeProps) {
  const nodeMap = useMemo(() => {
    const map = new Map<string, NodeData>()
    nodes.forEach((n) => map.set(n.id, n))
    return map
  }, [nodes])

  return (
    <group>
      {edges.map((edge) => {
        const source = nodeMap.get(edge.source)
        const target = nodeMap.get(edge.target)
        if (!source || !target) return null

        const maxDepth = Math.max(source.depth, target.depth)
        const depthThreshold = 0.12 + maxDepth * 0.12
        const visibility = Math.max(0, Math.min(1, (scrollProgress - depthThreshold) / 0.1))

        if (visibility <= 0) return null

        return (
          <Line
            key={`${edge.source}-${edge.target}`}
            points={[source.position, target.position]}
            color="#a5f3fc"
            lineWidth={1}
            opacity={visibility * 0.2}
            transparent
          />
        )
      })}
    </group>
  )
}
