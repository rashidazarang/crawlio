'use client'

import { Canvas } from '@react-three/fiber'
import ParticleField from './ParticleField'
import SiteGraph from './SiteGraph'
import VaultArtifact from './VaultArtifact'
import ExportCollapse from './ExportCollapse'

export default function SceneRoot() {
  return (
    <Canvas
      gl={{ antialias: true, powerPreference: 'high-performance', alpha: true }}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 8], fov: 45 }}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.15} />
      <directionalLight intensity={0.4} position={[5, 5, 5]} />
      <pointLight color="#a5f3fc" intensity={0.3} position={[0, 2, 4]} />
      <ParticleField />
      <SiteGraph />
      <VaultArtifact />
      <ExportCollapse />
    </Canvas>
  )
}
