export function createParticleData(count: number) {
  const positions = new Float32Array(count * 3)
  const sizes = new Float32Array(count)
  const opacities = new Float32Array(count)

  for (let i = 0; i < count; i++) {
    // Random position in sphere of radius 6
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const r = Math.cbrt(Math.random()) * 6

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = r * Math.cos(phi)

    sizes[i] = Math.random() * 1.0 + 0.3
    opacities[i] = Math.random() * 0.08 + 0.01
  }

  return { positions, sizes, opacities }
}
