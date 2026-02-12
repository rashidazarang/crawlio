interface ButtonProps {
  href?: string
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
}

export default function Button({ href, variant = 'primary', children, className = '' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200'
  const variants = {
    primary: 'bg-accent-cyan text-bg hover:bg-accent-cyan/90 shadow-[0_0_20px_rgba(165,243,252,0.15)] hover:shadow-[0_0_30px_rgba(165,243,252,0.25)]',
    secondary: 'border border-border-hover text-text-primary hover:border-white/30 hover:bg-white/5',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return <button className={classes}>{children}</button>
}
