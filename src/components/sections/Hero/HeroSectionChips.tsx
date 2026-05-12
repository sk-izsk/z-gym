import type * as React from 'react'
import { motion } from 'motion/react'
import { heroWordVariants, staggerContainerVariants } from '@/lib/animations'
import type { HeroContent } from '@/types/content'

interface HeroSectionChipsProps {
  readonly statChips: HeroContent['statChips']
}

export const HeroSectionChips: React.FC<HeroSectionChipsProps> = ({ statChips }) => {
  return (
    <motion.aside
      animate="visible"
      initial="hidden"
      variants={staggerContainerVariants}
      className="grid content-end gap-4 lg:pb-14"
    >
      {statChips.map((chip) => (
        <motion.div
          key={chip}
          variants={heroWordVariants}
          className="rounded-[1.75rem] border p-5 text-sm font-medium uppercase tracking-[0.24em] backdrop-blur-md"
          style={{
            background: 'var(--hero-overlay)',
            borderColor: 'var(--hero-border)',
            color: 'var(--hero-foreground)',
          }}
        >
          {chip}
        </motion.div>
      ))}
    </motion.aside>
  )
}
