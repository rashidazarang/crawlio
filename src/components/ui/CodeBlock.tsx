interface CodeBlockProps {
  children: string
  filename?: string
  language?: string
}

export default function CodeBlock({ children, filename }: CodeBlockProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-card">
      {filename && (
        <div className="border-b border-white/10 px-4 py-2 text-xs text-text-secondary font-mono">
          {filename}
        </div>
      )}
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code className="font-mono text-text-primary/90">{children}</code>
      </pre>
    </div>
  )
}
