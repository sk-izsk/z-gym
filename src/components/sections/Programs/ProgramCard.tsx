import type * as React from 'react'
import { motion } from 'motion/react'
import { interactiveCardMotion, revealInViewMotion } from '@/lib/animations'
import type { ProgramItem } from '@/types/content'
import { getProgramIcon } from '@/utils/icon-map'

interface ProgramCardProps {
  readonly item: ProgramItem
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ item }) => {
  const Icon = getProgramIcon(item.icon)

  return (
    <motion.div variants={revealInViewMotion.variants}>
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
}
