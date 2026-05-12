import type * as React from 'react'
import { ArrowUpRight } from 'lucide-react'
import type { HeroContent } from '@/types/content'

interface HeroPreviewPanelProps {
  readonly content: HeroContent
}

export const HeroPreviewPanel: React.FC<HeroPreviewPanelProps> = ({ content }) => {
  return (
    <div className="grid h-full lg:grid-cols-[1.1fr_0.9fr]">
      <div
        className="flex flex-col justify-between border-b p-5 sm:p-8 lg:border-b-0 lg:border-r"
        style={{ borderColor: 'var(--hero-border)' }}
      >
        <div>
          <p className="section-kicker">{content.previewEyebrow}</p>
          <h3
            className="display-heading mt-4 max-w-xl text-3xl leading-tight sm:text-5xl"
            style={{ color: 'var(--hero-foreground)' }}
          >
            {content.previewTitle}
          </h3>
          <p className="mt-4 max-w-lg text-sm leading-7 sm:text-base" style={{ color: 'var(--hero-muted)' }}>
            {content.previewDescription}
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {content.previewMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-[1.5rem] border p-4"
              style={{ background: 'var(--hero-card)', borderColor: 'var(--hero-border)' }}
            >
              <p className="display-heading text-3xl" style={{ color: 'var(--hero-foreground)' }}>
                {metric.value}
                {metric.suffix ?? ''}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em]" style={{ color: 'var(--hero-muted)' }}>
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-rows-[auto_1fr] p-5 sm:p-8">
        <div
          className="mb-5 flex items-center justify-between rounded-[1.4rem] border px-4 py-3"
          style={{ background: 'var(--hero-overlay)', borderColor: 'var(--hero-border)' }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: 'var(--hero-muted)' }}>
            Weekly split
          </p>
          <div className="inline-flex items-center gap-2 rounded-full bg-(--accent-soft) px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-(--accent-ink)">
            <span>Live</span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {content.previewCards.map((card) => (
            <div
              key={card}
              className="flex min-h-32 flex-col justify-between rounded-[1.6rem] border p-4"
              style={{ background: 'var(--hero-card)', borderColor: 'var(--hero-border)' }}
            >
              <p className="text-xs uppercase tracking-[0.18em]" style={{ color: 'var(--hero-muted)' }}>
                Session block
              </p>
              <div className="flex items-end justify-between gap-3">
                <p className="display-heading max-w-[10rem] text-2xl" style={{ color: 'var(--hero-foreground)' }}>
                  {card}
                </p>
                <ArrowUpRight className="h-5 w-5 text-(--accent-ink)" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
