interface SectionWrapperProps {
  id?: string
  children: React.ReactNode
  className?: string
  band?: boolean
}

export default function SectionWrapper({ id, children, className = '', band = false }: SectionWrapperProps) {
  return (
    <section id={id} className={band ? 'section-band' : ''}>
      <div className={`relative mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12 py-24 md:py-32 lg:py-40 ${className}`}>
        {children}
      </div>
    </section>
  )
}
