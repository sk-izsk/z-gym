import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { interactiveButtonMotion, carouselVariants, revealInViewMotion } from '@/lib/animations'
import { useHookReducedMotionPreference } from '@/hooks/useHookReducedMotionPreference'
import type { Testimonial } from '@/types/content'
import { Button } from '@/components/ui/button'

interface TestimonialsSectionProps {
  readonly id: string
  readonly eyebrow: string
  readonly title: string
  readonly description: string
  readonly regionLabel: string
  readonly previousLabel: string
  readonly nextLabel: string
  readonly items: readonly Testimonial[]
}

export const TestimonialsSection = ({
  id,
  eyebrow,
  title,
  description,
  regionLabel,
  previousLabel,
  nextLabel,
  items,
}: TestimonialsSectionProps) => {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const reduceMotion = useHookReducedMotionPreference()

  useEffect(() => {
    if (reduceMotion || isPaused) {
      return
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [isPaused, items.length, reduceMotion])

  const activeItem = items[index]

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

        <div
          aria-label={regionLabel}
          className="surface-card rounded-[2rem] border p-6 sm:p-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.figure
              key={activeItem.name}
              animate="visible"
              className="min-h-[18rem]"
              exit="exit"
              initial="hidden"
              variants={carouselVariants}
            >
              <blockquote className="display-heading max-w-4xl text-3xl leading-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                “{activeItem.quote}”
              </blockquote>
              <figcaption className="mt-10 space-y-1">
                <p className="text-lg font-semibold text-[var(--foreground)]">{activeItem.name}</p>
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--accent-ink)]">{activeItem.role}</p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-8 flex items-center gap-3">
            <motion.div {...interactiveButtonMotion}>
              <Button
                aria-label={previousLabel}
                className="text-[var(--foreground)]"
                size="icon"
                variant="secondary"
                onClick={() => setIndex((current) => (current - 1 + items.length) % items.length)}
              >
                <ChevronLeft className="h-5 w-5 text-[var(--foreground)]" aria-hidden="true" />
              </Button>
            </motion.div>
            <motion.div {...interactiveButtonMotion}>
              <Button
                aria-label={nextLabel}
                className="text-[var(--foreground)]"
                size="icon"
                variant="secondary"
                onClick={() => setIndex((current) => (current + 1) % items.length)}
              >
                <ChevronRight className="h-5 w-5 text-[var(--foreground)]" aria-hidden="true" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
