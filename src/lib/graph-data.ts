export interface NodeData {
  id: string
  label: string
  type: 'html' | 'css' | 'js' | 'image' | 'pdf'
  depth: number
  position: [number, number, number]
}

export interface EdgeData {
  source: string
  target: string
}

const typeColors: Record<NodeData['type'], string> = {
  html: '#60a5fa',
  css: '#c084fc',
  js: '#fbbf24',
  image: '#6ee7b7',
  pdf: '#f87171',
}

export function getTypeColor(type: NodeData['type']): string {
  return typeColors[type]
}

export function generateGraphData(): { nodes: NodeData[]; edges: EdgeData[] } {
  const nodes: NodeData[] = [
    { id: 'index', label: 'index.html', type: 'html', depth: 0, position: [0, 0, 0] },

    { id: 'about', label: 'about.html', type: 'html', depth: 1, position: [-1.5, 0.8, 0.5] },
    { id: 'style', label: 'style.css', type: 'css', depth: 1, position: [1.2, 1.0, -0.3] },
    { id: 'app', label: 'app.js', type: 'js', depth: 1, position: [0.5, -1.2, 0.4] },
    { id: 'logo', label: 'logo.png', type: 'image', depth: 1, position: [-0.8, -0.9, -0.6] },

    { id: 'contact', label: 'contact.html', type: 'html', depth: 2, position: [-2.2, 1.8, 0.2] },
    { id: 'blog', label: 'blog.html', type: 'html', depth: 2, position: [-2.5, 0.2, -0.5] },
    { id: 'theme', label: 'theme.css', type: 'css', depth: 2, position: [2.0, 1.8, 0.3] },
    { id: 'hero', label: 'hero.jpg', type: 'image', depth: 2, position: [1.8, -0.5, -0.8] },
    { id: 'utils', label: 'utils.js', type: 'js', depth: 2, position: [0.3, -2.3, 0.2] },

    { id: 'post1', label: 'post-1.html', type: 'html', depth: 3, position: [-3.0, 0.5, 0.8] },
    { id: 'post2', label: 'post-2.html', type: 'html', depth: 3, position: [-3.2, -0.5, -0.3] },
    { id: 'fonts', label: 'fonts.css', type: 'css', depth: 3, position: [2.8, 2.5, -0.2] },
    { id: 'gallery', label: 'gallery.jpg', type: 'image', depth: 3, position: [2.5, -1.5, 0.5] },
    { id: 'chart', label: 'chart.js', type: 'js', depth: 3, position: [-0.5, -3.0, -0.4] },
    { id: 'report', label: 'report.pdf', type: 'pdf', depth: 3, position: [0.8, 2.8, 0.6] },

    { id: 'post3', label: 'post-3.html', type: 'html', depth: 4, position: [-3.5, 1.5, -0.6] },
    { id: 'archive', label: 'archive.html', type: 'html', depth: 4, position: [-3.8, -1.2, 0.4] },
    { id: 'vendor', label: 'vendor.css', type: 'css', depth: 4, position: [3.5, 1.0, 0.7] },
    { id: 'thumb1', label: 'thumb1.png', type: 'image', depth: 4, position: [3.0, -2.5, -0.3] },
    { id: 'thumb2', label: 'thumb2.png', type: 'image', depth: 4, position: [1.5, -3.2, 0.8] },
    { id: 'data', label: 'data.js', type: 'js', depth: 4, position: [-1.5, -3.5, 0.3] },
    { id: 'invoice', label: 'invoice.pdf', type: 'pdf', depth: 4, position: [-0.2, 3.5, -0.5] },
    { id: 'icon', label: 'favicon.ico', type: 'image', depth: 4, position: [0, 3.2, 0.4] },
  ]

  const edges: EdgeData[] = [
    { source: 'index', target: 'about' },
    { source: 'index', target: 'style' },
    { source: 'index', target: 'app' },
    { source: 'index', target: 'logo' },
    { source: 'about', target: 'contact' },
    { source: 'about', target: 'blog' },
    { source: 'style', target: 'theme' },
    { source: 'app', target: 'hero' },
    { source: 'app', target: 'utils' },
    { source: 'blog', target: 'post1' },
    { source: 'blog', target: 'post2' },
    { source: 'theme', target: 'fonts' },
    { source: 'hero', target: 'gallery' },
    { source: 'utils', target: 'chart' },
    { source: 'about', target: 'report' },
    { source: 'post1', target: 'post3' },
    { source: 'post2', target: 'archive' },
    { source: 'fonts', target: 'vendor' },
    { source: 'gallery', target: 'thumb1' },
    { source: 'gallery', target: 'thumb2' },
    { source: 'chart', target: 'data' },
    { source: 'report', target: 'invoice' },
    { source: 'index', target: 'icon' },
    { source: 'contact', target: 'style' },
    { source: 'post1', target: 'hero' },
    { source: 'post2', target: 'gallery' },
    { source: 'post3', target: 'thumb1' },
    { source: 'archive', target: 'post1' },
  ]

  return { nodes, edges }
}
