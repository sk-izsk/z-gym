import { motion } from 'motion/react'
import { revealInViewMotion, staggerInViewMotion } from '@/lib/animations'
import type { TrainerProfile } from '@/types/content'
import { TrainerCard } from './TrainerCard'
import { TrainersSectionHeader } from './TrainersSectionHeader'

interface TrainersSectionProps {
  readonly id: string
  readonly eyebrow: string
  readonly title: string
  readonly description: string
  readonly items: readonly TrainerProfile[]
}

export const TrainersSection = ({
  id,
  eyebrow,
  title,
  description,
  items,
}: TrainersSectionProps) => {
  return (
    <motion.section {...revealInViewMotion} id={id} className="py-16 sm:py-24">
      <div className="section-frame">
        <TrainersSectionHeader eyebrow={eyebrow} title={title} description={description} />

        <motion.div {...staggerInViewMotion} className="grid gap-6 lg:grid-cols-3">
          {items.map((trainer) => (
            <TrainerCard key={trainer.name} trainer={trainer} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
