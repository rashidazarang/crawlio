interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full border border-border-hover bg-white/5 px-3 py-1 text-xs font-medium text-text-secondary ${className}`}>
      {children}
    </span>
  )
}
