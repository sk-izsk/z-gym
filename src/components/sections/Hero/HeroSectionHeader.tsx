import type * as React from 'react'
import { MoveRight, Play } from 'lucide-react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { heroWordVariants, interactiveButtonMotion, staggerContainerVariants } from '@/lib/animations'
import type { HeroContent } from '@/types/content'

interface HeroSectionHeaderProps {
  readonly content: HeroContent
}

export const HeroSectionHeader: React.FC<HeroSectionHeaderProps> = ({ content }) => {
  return (
    <motion.div
      animate="visible"
      initial="hidden"
      variants={staggerContainerVariants}
      className="max-w-4xl space-y-8"
    >
      <motion.p variants={heroWordVariants} className="section-kicker">
        {content.eyebrow}
      </motion.p>
      <div className="space-y-4">
        {content.headlineWords.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            variants={heroWordVariants}
            className="display-heading block text-[clamp(3.3rem,10.2vw,8rem)] uppercase leading-[0.88]"
            style={{ color: 'var(--hero-foreground)' }}
          >
            {word}
          </motion.span>
        ))}
      </div>
      <motion.p
        variants={heroWordVariants}
        className="max-w-xl text-base leading-8 sm:text-lg"
        style={{ color: 'var(--hero-muted)' }}
      >
        {content.description}
      </motion.p>
      <motion.div variants={heroWordVariants} className="flex flex-col gap-4 sm:flex-row">
        <motion.div {...interactiveButtonMotion}>
          <Button asChild>
            <a href={content.primaryAction.href} aria-label={content.primaryAction.ariaLabel}>
              <span className="text-[var(--primary-foreground)]">{content.primaryAction.label}</span>
              <MoveRight className="h-4 w-4 text-[var(--primary-foreground)]" aria-hidden="true" />
            </a>
          </Button>
        </motion.div>
        <motion.div {...interactiveButtonMotion}>
          <Button asChild variant="secondary">
            <a href={content.secondaryAction.href} aria-label={content.secondaryAction.ariaLabel}>
              <Play className="h-4 w-4" style={{ color: 'var(--hero-foreground)' }} aria-hidden="true" />
              <span style={{ color: 'var(--hero-foreground)' }}>{content.secondaryAction.label}</span>
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
