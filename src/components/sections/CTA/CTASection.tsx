import { motion, useScroll, useTransform } from 'motion/react'
import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { interactiveButtonMotion, revealInViewMotion } from '@/lib/animations'
import type { CTAContent } from '@/types/content'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/utils/cn'
import { isValidEmail } from '@/utils/validation'

interface CTASectionProps {
  readonly id: string
  readonly content: CTAContent
}

export const CTASection = ({ id, content }: CTASectionProps) => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [showError, setShowError] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!isValidEmail(email)) {
      setShowError(true)
      setSubmitted(false)
      return
    }

    setSubmitted(true)
    setShowError(false)
    setEmail('')
  }

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
        <div className="surface-overlay rounded-[2.4rem] border border-[var(--border)] p-6 backdrop-blur-md sm:p-8 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-10">
          <div className="space-y-5">
            <p className="section-kicker">{content.eyebrow}</p>
            <h2 className="display-heading max-w-3xl text-4xl leading-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              {content.headline}
            </h2>
            <p className="max-w-2xl text-base leading-8 text-[var(--muted-strong)] sm:text-lg">
              {content.description}
            </p>
          </div>

          <form aria-label={content.formLabel} className="mt-10 space-y-4 lg:mt-0" onSubmit={handleSubmit}>
            <label className="text-sm font-medium text-[var(--foreground)]" htmlFor="cta-email">
              {content.inputLabel}
            </label>
            <Input
              id="cta-email"
              type="email"
              value={email}
              placeholder={content.inputPlaceholder}
              aria-invalid={showError}
              aria-describedby="cta-feedback"
              onChange={(event) => setEmail(event.target.value)}
            />
            <p
              id="cta-feedback"
              className={cn(
                'min-h-6 text-sm',
                showError ? 'text-[#ff7676]' : 'text-[var(--primary)]',
              )}
            >
              {showError ? content.validationMessage : submitted ? content.successMessage : ''}
            </p>
            <motion.div {...interactiveButtonMotion}>
              <Button className="w-full sm:w-auto" type="submit">
                {content.submitLabel}
              </Button>
            </motion.div>
          </form>
        </div>
      </div>
    </motion.section>
  )
}
