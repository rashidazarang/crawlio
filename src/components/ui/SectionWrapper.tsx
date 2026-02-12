interface SectionWrapperProps {
  id?: string
  children: React.ReactNode
  className?: string
  band?: boolean
}

export default function SectionWrapper({ id, children, className = '', band = false }: SectionWrapperProps) {
  return (
    <section id={id} className={`relative py-24 md:py-32 lg:py-40 ${band ? 'section-band' : ''} ${className}`}>
      <div className={`mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12`}>
        {children}
      </div>
    </section>
  )
}
