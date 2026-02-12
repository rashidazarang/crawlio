'use client'

import { useEffect, useRef, useState } from 'react'

const nodes = [
  { x: 200, y: 150, color: '#60a5fa', label: 'HTML' },
  { x: 100, y: 250, color: '#c084fc', label: 'CSS' },
  { x: 300, y: 250, color: '#fbbf24', label: 'JS' },
  { x: 60, y: 350, color: '#6ee7b7', label: 'IMG' },
  { x: 200, y: 350, color: '#f87171', label: 'PDF' },
  { x: 340, y: 350, color: '#60a5fa', label: 'HTML' },
]

const edges = [
  [0, 1], [0, 2], [1, 3], [2, 4], [2, 5],
]

export default function FallbackGraph() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex justify-center py-8" aria-hidden="true">
      <svg
        width="400"
        height="420"
        viewBox="0 0 400 420"
        className={`transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Edges */}
        {edges.map(([from, to], i) => (
          <line
            key={`edge-${i}`}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            stroke="#a5f3fc"
            strokeWidth={1}
            strokeOpacity={0.3}
            strokeDasharray="4 4"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="8"
              dur="2s"
              repeatCount="indefinite"
            />
          </line>
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={`node-${i}`}>
            <circle
              cx={node.x}
              cy={node.y}
              r={12}
              fill={node.color}
              fillOpacity={0.3}
              stroke={node.color}
              strokeWidth={1}
              strokeOpacity={0.6}
            />
            <text
              x={node.x}
              y={node.y + 28}
              textAnchor="middle"
              fill="#a3a3a3"
              fontSize={10}
              fontFamily="var(--font-mono)"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
