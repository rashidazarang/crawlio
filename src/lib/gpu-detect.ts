export type GPUTier = 'high' | 'medium' | 'low'

export function detectGPUTier(): GPUTier {
  if (typeof window === 'undefined') return 'low'

  // Check reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 'low'

  // Check viewport size (mobile = low)
  if (window.innerWidth < 768) return 'low'

  // Check for WebGL2
  const canvas = document.createElement('canvas')
  const gl = canvas.getContext('webgl2')
  if (!gl) return 'low'

  // Try to get GPU renderer info
  const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
  if (debugInfo) {
    const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL).toLowerCase()

    // Apple Silicon or discrete GPUs = high
    const isHighEnd =
      renderer.includes('apple') ||
      renderer.includes('nvidia') ||
      renderer.includes('amd') ||
      renderer.includes('radeon')

    const dpr = window.devicePixelRatio || 1

    if (isHighEnd && dpr <= 2) return 'high'
    if (isHighEnd) return 'medium'
  }

  return 'medium'
}
