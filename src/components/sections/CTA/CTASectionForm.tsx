import type * as React from 'react'
import { motion } from 'motion/react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { interactiveButtonMotion } from '@/lib/animations'
import type { CTAContent } from '@/types/content'
import { cn } from '@/utils/cn'
import { isValidEmail } from '@/utils/validation'

interface CTASectionFormProps {
  readonly content: CTAContent
}

export const CTASectionForm: React.FC<CTASectionFormProps> = ({ content }) => {
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
  )
}
