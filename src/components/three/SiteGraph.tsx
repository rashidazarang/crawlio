'use client'

import { useMemo } from 'react'
import { generateGraphData } from '@/lib/graph-data'
import GraphNode from './GraphNode'
import GraphEdge from './GraphEdge'
import useScrollProgress from '@/hooks/useScrollProgress'

export default function SiteGraph() {
  const scroll = useScrollProgress()
  const { nodes, edges } = useMemo(() => generateGraphData(), [])

  return (
    <group>
      <GraphNode nodes={nodes} scrollProgress={scroll} />
      <GraphEdge nodes={nodes} edges={edges} scrollProgress={scroll} />
    </group>
  )
}
