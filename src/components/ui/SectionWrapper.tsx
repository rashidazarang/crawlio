interface SectionWrapperProps {
  id?: string
  children: React.ReactNode
  className?: string
}

export default function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  return (
    <section id={id} className={`relative mx-auto max-w-[1200px] px-6 py-24 md:py-32 ${className}`}>
      {children}
    </section>
  )
}
