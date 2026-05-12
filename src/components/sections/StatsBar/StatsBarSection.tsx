import type * as React from 'react'
import { motion } from 'motion/react'
import { useHookIntersectionObserver } from '@/hooks/useHookIntersectionObserver'
import { staggerInViewMotion } from '@/lib/animations'
import type { StatItem } from '@/types/content'
import { StatsBarItem } from './StatsBarItem'

interface StatsBarSectionProps {
  readonly stats: readonly StatItem[]
}

export const StatsBarSection: React.FC<StatsBarSectionProps> = ({ stats }) => {
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
            <StatsBarItem key={stat.label} stat={stat} isActive={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
