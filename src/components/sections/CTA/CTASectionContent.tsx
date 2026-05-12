import type * as React from 'react'
import type { CTAContent } from '@/types/content'

interface CTASectionContentProps {
  readonly content: CTAContent
}

export const CTASectionContent: React.FC<CTASectionContentProps> = ({ content }) => {
  return (
    <div className="space-y-5">
      <p className="section-kicker">{content.eyebrow}</p>
      <h2 className="display-heading max-w-3xl text-4xl leading-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
        {content.headline}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-[var(--muted-strong)] sm:text-lg">
        {content.description}
      </p>
    </div>
  )
}
