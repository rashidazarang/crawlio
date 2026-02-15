import SectionWrapper from '../../ui/SectionWrapper'
import RevealOnScroll from '../../ui/RevealOnScroll'

const useCases = [
  'Archive on commute',
  'Research on iPad',
  'Save for offline reading',
  'Capture before takedown',
  'Browse cached sites',
  'Share with team',
  'AI-ready downloads',
  'Field research',
]

export default function MobileUseCases() {
  return (
    <SectionWrapper>
      <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-5xl">
        Use it everywhere.
      </h2>
      <p className="mx-auto mb-12 max-w-md text-center text-text-secondary">
        Crawlio goes where you go.
      </p>

      <RevealOnScroll>
        <div className="flex flex-wrap justify-center gap-3">
          {useCases.map((useCase) => (
            <span
              key={useCase}
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-text-primary transition-all duration-200 hover:border-border-hover hover:bg-card-hover"
            >
              {useCase}
            </span>
          ))}
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  )
}
