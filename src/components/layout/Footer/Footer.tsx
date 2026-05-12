import { motion } from 'motion/react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { interactiveButtonMotion, revealInViewMotion, staggerInViewMotion } from '@/lib/animations'
import type { FooterContent } from '@/types/content'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/utils/cn'
import { getSocialIcon } from '@/utils/icon-map'
import { isValidEmail } from '@/utils/validation'

interface FooterProps {
  readonly content: FooterContent
}

export const Footer = ({ content }: FooterProps) => {
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
    <motion.footer
      {...revealInViewMotion}
      className="border-t border-[var(--border)] pb-10 pt-16"
    >
      <div className="section-frame">
        <motion.div
          {...staggerInViewMotion}
          className="surface-card grid gap-10 rounded-[2rem] border p-6 sm:p-8 lg:grid-cols-[1.2fr_1fr_1fr]"
        >
          <motion.div variants={revealInViewMotion.variants} className="space-y-5">
            <p className="display-heading text-3xl text-[var(--foreground)]">{content.brandLabel}</p>
            <p className="max-w-md text-sm leading-7 text-[var(--muted)]">{content.description}</p>
            <div className="flex flex-wrap gap-3">
              {content.socials.map((social) => {
                const Icon = getSocialIcon(social.icon)

                return (
                  <motion.a
                    key={social.label}
                    {...interactiveButtonMotion}
                    className="focus-ring inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-card-strong)] text-[var(--foreground)]"
                    href={social.href}
                    aria-label={social.ariaLabel}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {content.linkGroups.map((group) => (
            <motion.div key={group.title} variants={revealInViewMotion.variants} className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
                {group.title}
              </p>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      className="focus-ring text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                      href={link.href}
                      aria-label={link.ariaLabel}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

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
                  showError ? 'text-[#ff7676]' : 'text-[var(--primary)]',
                )}
              >
                {showError ? content.newsletterValidation : submitted ? content.newsletterSuccess : ''}
              </p>
            </div>
            <motion.div {...interactiveButtonMotion}>
              <Button className="w-full lg:w-auto" type="submit">
                {content.newsletterButton}
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{content.legal}</p>
      </div>
    </motion.footer>
  )
}
