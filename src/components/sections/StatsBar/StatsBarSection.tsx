import { motion } from 'motion/react'
import { useHookCountUp } from '@/hooks/useHookCountUp'
import { useHookIntersectionObserver } from '@/hooks/useHookIntersectionObserver'
import { revealInViewMotion, staggerInViewMotion } from '@/lib/animations'
import type { StatItem } from '@/types/content'

interface StatsBarSectionProps {
  readonly stats: readonly StatItem[]
}

interface StatCardProps {
  readonly stat: StatItem
  readonly isActive: boolean
}

const StatCard = ({ stat, isActive }: StatCardProps) => {
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

export const StatsBarSection = ({ stats }: StatsBarSectionProps) => {
  const { ref, isInView } = useHookIntersectionObserver<HTMLDivElement>({
    freezeOnceVisible: true,
    threshold: 0.4,
  })

  return (
    <section className="pb-8">
      <div className="section-frame">
        <motion.div
          {...staggerInViewMotion}
          ref={ref}
          className="surface-card grid gap-4 rounded-[2rem] border p-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} isActive={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
