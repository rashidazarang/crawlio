interface FeatureCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  className?: string
}

export default function FeatureCard({ title, description, icon, className = '' }: FeatureCardProps) {
  return (
    <div className={`rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md ${className}`}>
      {icon && <div className="mb-4 text-accent-cyan">{icon}</div>}
      <h3 className="mb-2 text-lg font-semibold text-text-primary">{title}</h3>
      <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
    </div>
  )
}
