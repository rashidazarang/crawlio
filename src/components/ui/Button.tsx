interface ButtonProps {
  href?: string
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
}

export default function Button({ href, variant = 'primary', children, className = '' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-200'
  const variants = {
    primary: 'bg-accent-cyan text-bg hover:bg-accent-cyan/90',
    secondary: 'border border-white/15 text-text-primary hover:border-white/30 hover:bg-white/5',
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
