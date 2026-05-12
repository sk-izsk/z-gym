import { motion } from 'motion/react'
import { revealInViewMotion, staggerInViewMotion } from '@/lib/animations'
import type { ProgramItem } from '@/types/content'
import { ProgramCard } from './ProgramCard'
import { ProgramsSectionHeader } from './ProgramsSectionHeader'

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
        <ProgramsSectionHeader eyebrow={eyebrow} title={title} description={description} />

        <motion.div
          {...staggerInViewMotion}
          className="grid auto-cols-[minmax(18rem,22rem)] grid-flow-col gap-5 overflow-x-auto pb-4 pr-4 [scrollbar-width:none] lg:grid-flow-row lg:grid-cols-3 lg:overflow-visible lg:pb-0"
        >
          {items.map((item) => (
            <ProgramCard key={item.title} item={item} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
