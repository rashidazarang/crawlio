'use client'

import { useMemo } from 'react'

export default function FallbackParticles() {
  const dots = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }))
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full bg-accent-cyan/20"
          style={{
            left: dot.left,
            top: dot.top,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            animation: `fallback-pulse ${dot.duration}s ease-in-out ${dot.delay}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes fallback-pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}
