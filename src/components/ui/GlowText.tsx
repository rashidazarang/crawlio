interface GlowTextProps {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'span'
  className?: string
}

export default function GlowText({ children, as: Tag = 'h1', className = '' }: GlowTextProps) {
  return (
    <Tag
      className={`text-text-primary ${className}`}
      style={{ textShadow: '0 0 40px rgba(165, 243, 252, 0.15), 0 0 80px rgba(165, 243, 252, 0.05)' }}
    >
      {children}
    </Tag>
  )
}
