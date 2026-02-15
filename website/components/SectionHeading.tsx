import ScrollReveal from "./ScrollReveal";

export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <ScrollReveal className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[var(--text-primary)] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
