import SectionWrapper from '../ui/SectionWrapper'
import CodeBlock from '../ui/CodeBlock'
import RevealOnScroll from '../ui/RevealOnScroll'

const before = `<!-- Before -->
<a href="https://example.com/about">About</a>
<img src="https://example.com/images/logo.png">`

const after = `<!-- After -->
<a href="about.html">About</a>
<img src="images/logo.png">`

export default function Localization() {
  return (
    <SectionWrapper id="localization" band>
      <RevealOnScroll>
        <h2 className="mb-6 text-3xl tracking-tight font-bold md:text-5xl">Every link rewritten</h2>
        <p className="mb-12 max-w-2xl text-text-secondary">
          Attribute-targeted replacement. Text content stays untouched.
        </p>
      </RevealOnScroll>

      <div className="grid gap-6 md:grid-cols-2">
        <RevealOnScroll delay={100}>
          <CodeBlock filename="before.html">{before}</CodeBlock>
        </RevealOnScroll>
        <RevealOnScroll delay={200}>
          <CodeBlock filename="after.html">{after}</CodeBlock>
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  )
}
