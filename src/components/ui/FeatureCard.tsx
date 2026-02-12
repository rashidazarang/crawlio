interface FeatureCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  className?: string
}

export default function FeatureCard({ title, description, icon, className = '' }: FeatureCardProps) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-border-hover hover:bg-card-hover hover:shadow-[0_0_40px_rgba(165,243,252,0.06)] ${className}`}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/25 to-transparent" />
      {icon && <div className="mb-4 text-accent-cyan">{icon}</div>}
      <h3 className="mb-2 text-lg font-semibold text-text-primary">{title}</h3>
      <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
    </div>
  )
}
