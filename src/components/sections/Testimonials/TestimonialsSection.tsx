import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { revealInViewMotion } from '@/lib/animations'
import { useHookReducedMotionPreference } from '@/hooks/useHookReducedMotionPreference'
import type { Testimonial } from '@/types/content'
import { TestimonialControls } from './TestimonialControls'
import { TestimonialsSectionHeader } from './TestimonialsSectionHeader'
import { TestimonialSlide } from './TestimonialSlide'

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
        <TestimonialsSectionHeader eyebrow={eyebrow} title={title} description={description} />

        <div
          aria-label={regionLabel}
          className="surface-card rounded-[2rem] border p-6 sm:p-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <TestimonialSlide activeItem={activeItem} />
          <TestimonialControls
            previousLabel={previousLabel}
            nextLabel={nextLabel}
            onPrevious={() => setIndex((current) => (current - 1 + items.length) % items.length)}
            onNext={() => setIndex((current) => (current + 1) % items.length)}
          />
        </div>
      </div>
    </motion.section>
  )
}
