import { motion } from 'motion/react'
import type { FormEvent } from 'react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { interactiveButtonMotion, revealInViewMotion } from '@/lib/animations'
import type { FooterContent } from '@/types/content'
import { cn } from '@/utils/cn'
import { isValidEmail } from '@/utils/validation'

interface FooterNewsletterFormProps {
  readonly content: Pick<
    FooterContent,
    | 'newsletterLabel'
    | 'newsletterPlaceholder'
    | 'newsletterButton'
    | 'newsletterSuccess'
    | 'newsletterValidation'
  >
}

export const FooterNewsletterForm = ({
  content,
}: FooterNewsletterFormProps) => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [showError, setShowError] = useState(false)

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
    <motion.form
      variants={revealInViewMotion.variants}
      aria-label={content.newsletterLabel}
      className="space-y-4 lg:col-span-3 lg:grid lg:grid-cols-[1fr_auto] lg:items-start lg:gap-4 lg:space-y-0"
      onSubmit={handleSubmit}
    >
      <label className="sr-only" htmlFor="footer-email">
        {content.newsletterLabel}
      </label>
      <div className="space-y-3">
        <Input
          id="footer-email"
          type="email"
          value={email}
          placeholder={content.newsletterPlaceholder}
          aria-invalid={showError}
          aria-describedby="footer-feedback"
          onChange={(event) => setEmail(event.target.value)}
        />
        <p
          id="footer-feedback"
          className={cn(
            'min-h-6 text-sm',
            showError ? 'text-[#ff7676]' : 'text-[var(--accent-ink)]',
          )}
        >
          {showError
            ? content.newsletterValidation
            : submitted
              ? content.newsletterSuccess
              : ''}
        </p>
      </div>
      <motion.div {...interactiveButtonMotion}>
        <Button className="w-full lg:w-auto" type="submit">
          {content.newsletterButton}
        </Button>
      </motion.div>
    </motion.form>
  )
}
