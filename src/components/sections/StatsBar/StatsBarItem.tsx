import type * as React from 'react'
import { motion } from 'motion/react'
import { useHookCountUp } from '@/hooks/useHookCountUp'
import { revealInViewMotion } from '@/lib/animations'
import type { StatItem } from '@/types/content'

interface StatsBarItemProps {
  readonly stat: StatItem
  readonly isActive: boolean
}

export const StatsBarItem: React.FC<StatsBarItemProps> = ({ stat, isActive }) => {
  const value = useHookCountUp({ end: stat.value, isActive })

  return (
    <motion.div
      variants={revealInViewMotion.variants}
      className="surface-card rounded-[1.75rem] border p-5"
    >
      <p className="display-heading text-4xl text-[var(--foreground)] sm:text-5xl">
        {stat.prefix ?? ''}
        {value.toLocaleString()}
        {stat.suffix ?? ''}
      </p>
      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">{stat.label}</p>
    </motion.div>
  )
}
