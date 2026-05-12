interface TestimonialsSectionHeaderProps {
  readonly eyebrow: string
  readonly title: string
  readonly description: string
}

export const TestimonialsSectionHeader = ({
  eyebrow,
  title,
  description,
}: TestimonialsSectionHeaderProps) => {
  return (
    <div className="mb-10 max-w-3xl space-y-4">
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="display-heading text-4xl leading-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">{description}</p>
    </div>
  )
}
