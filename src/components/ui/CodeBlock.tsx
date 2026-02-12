interface CodeBlockProps {
  children: string
  filename?: string
  language?: string
}

export default function CodeBlock({ children, filename }: CodeBlockProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      {filename && (
        <div className="border-b border-border px-5 py-2.5 text-xs text-text-secondary font-mono">
          {filename}
        </div>
      )}
      <pre className="overflow-x-auto p-5 text-sm leading-relaxed">
        <code className="font-mono text-text-primary/90">{children}</code>
      </pre>
    </div>
  )
}
