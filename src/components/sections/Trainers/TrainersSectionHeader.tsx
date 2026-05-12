interface TrainersSectionHeaderProps {
  readonly eyebrow: string
  readonly title: string
  readonly description: string
}

export const TrainersSectionHeader = ({
  eyebrow,
  title,
  description,
}: TrainersSectionHeaderProps) => {
  return (
    <div className="mb-10 max-w-3xl space-y-4">
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="display-heading text-4xl leading-tight text-(--foreground) sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-(--muted) sm:text-lg">{description}</p>
    </div>
  )
}
