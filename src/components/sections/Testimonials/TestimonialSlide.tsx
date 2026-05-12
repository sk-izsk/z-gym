import type * as React from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { carouselVariants } from '@/lib/animations'
import type { Testimonial } from '@/types/content'

interface TestimonialSlideProps {
  readonly activeItem: Testimonial
}

export const TestimonialSlide: React.FC<TestimonialSlideProps> = ({ activeItem }) => {
  return (
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
  )
}
