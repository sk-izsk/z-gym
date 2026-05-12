import { motion } from 'motion/react'
import { interactiveCardMotion, revealInViewMotion, staggerInViewMotion } from '@/lib/animations'
import type { ProgramItem } from '@/types/content'
import { getProgramIcon } from '@/utils/icon-map'

interface ProgramsSectionProps {
  readonly id: string
  readonly eyebrow: string
  readonly title: string
  readonly description: string
  readonly items: readonly ProgramItem[]
}

export const ProgramsSection = ({
  id,
  eyebrow,
  title,
  description,
  items,
}: ProgramsSectionProps) => {
  return (
    <motion.section {...revealInViewMotion} id={id} className="py-16 sm:py-24">
      <div className="section-frame">
        <div className="mb-10 max-w-3xl space-y-4">
          <p className="section-kicker">{eyebrow}</p>
          <h2 className="display-heading text-4xl leading-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">{description}</p>
        </div>

        <motion.div
          {...staggerInViewMotion}
          className="grid auto-cols-[minmax(18rem,22rem)] grid-flow-col gap-5 overflow-x-auto pb-4 pr-4 [scrollbar-width:none] lg:grid-flow-row lg:grid-cols-3 lg:overflow-visible lg:pb-0"
        >
          {items.map((item) => {
            const Icon = getProgramIcon(item.icon)

            return (
              <motion.div key={item.title} variants={revealInViewMotion.variants}>
                <motion.article
                  {...interactiveCardMotion}
                  className="group surface-card relative min-h-[18rem] rounded-[2rem] border p-6 shadow-[0_18px_44px_rgba(0,0,0,0.16)]"
                >
                  <div className="absolute inset-0 rounded-[2rem] border border-transparent transition-colors group-hover:border-[rgba(232,255,71,0.32)]" aria-hidden="true" />
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-ink)]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 display-heading text-3xl text-[var(--foreground)]">{item.title}</h3>
                  <p className="mt-4 max-w-xs text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                </motion.article>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}
