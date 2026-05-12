import type * as React from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { revealInViewMotion } from '@/lib/animations'
import type { CTAContent } from '@/types/content'
import { CTASectionContent } from './CTASectionContent'
import { CTASectionForm } from './CTASectionForm'

interface CTASectionProps {
  readonly id: string
  readonly content: CTAContent
}

export const CTASection: React.FC<CTASectionProps> = ({ id, content }) => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <motion.section
      {...revealInViewMotion}
      id={id}
      ref={sectionRef}
      className="relative overflow-hidden py-20 sm:py-24"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          y: backgroundY,
          background:
            'radial-gradient(circle at top left, rgba(232,255,71,0.22), transparent 22%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.12), transparent 20%), linear-gradient(135deg, #080808 0%, #11120a 100%)',
        }}
      />
      <div className="section-frame relative">
        <div className="surface-overlay rounded-[2.4rem] border border-(--border) p-6 backdrop-blur-md sm:p-8 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-10">
          <CTASectionContent content={content} />
          <CTASectionForm content={content} />
        </div>
      </div>
    </motion.section>
  )
}
