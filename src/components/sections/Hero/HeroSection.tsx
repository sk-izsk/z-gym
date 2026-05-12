import type * as React from 'react'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import type { HeroContent } from '@/types/content'
import { HeroPreviewPanel } from './HeroPreviewPanel'
import { HeroSectionChips } from './HeroSectionChips'
import { HeroSectionHeader } from './HeroSectionHeader'

interface HeroSectionProps {
  readonly id: string
  readonly content: HeroContent
}

export const HeroSection: React.FC<HeroSectionProps> = ({ id, content }) => {
  return (
    <section id={id} className="noise-mask relative overflow-hidden pb-16 pt-32 sm:pt-36">
      <div className="section-frame">
        <div className="panel-surface relative overflow-hidden rounded-[2.5rem] border border-(--border) px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at top left, var(--hero-accent-glow), transparent 24%), radial-gradient(circle at 85% 15%, var(--hero-spotlight), transparent 18%), linear-gradient(135deg, #0c0d0e 0%, #070707 48%, #0f100c 100%)',
            }}
          />
          <div className="absolute inset-x-6 bottom-6 top-6 rounded-[2rem] border" style={{ borderColor: 'var(--hero-border)' }} aria-hidden="true" />
          <ContainerScroll
            className="relative z-10"
            titleComponent={
              <div className="grid gap-12 px-3 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:px-6">
                <HeroSectionHeader content={content} />
                <HeroSectionChips statChips={content.statChips} />
              </div>
            }
          >
            <HeroPreviewPanel content={content} />
          </ContainerScroll>
        </div>
      </div>
    </section>
  )
}
