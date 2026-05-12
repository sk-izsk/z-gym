import { Check } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { startTransition, useState } from 'react'
import {
  interactiveButtonMotion,
  priceSwapVariants,
  revealInViewMotion,
  staggerInViewMotion,
} from '@/lib/animations'
import type { BillingCycle, PricingTier } from '@/types/content'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/utils/cn'

interface PricingSectionProps {
  readonly id: string
  readonly eyebrow: string
  readonly title: string
  readonly description: string
  readonly monthlyLabel: string
  readonly yearlyLabel: string
  readonly yearlyBadge: string
  readonly popularLabel: string
  readonly toggleAriaLabel: string
  readonly tiers: readonly PricingTier[]
}

const formatPrice = (price: number) => {
  return `$${price}`
}

export const PricingSection = ({
  id,
  eyebrow,
  title,
  description,
  monthlyLabel,
  yearlyLabel,
  yearlyBadge,
  popularLabel,
  toggleAriaLabel,
  tiers,
}: PricingSectionProps) => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly')

  return (
    <motion.section {...revealInViewMotion} id={id} className="py-16 sm:py-24">
      <div className="section-frame">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="section-kicker">{eyebrow}</p>
            <h2 className="display-heading text-4xl leading-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">{description}</p>
          </div>

          <div className="surface-card inline-flex flex-wrap items-center gap-3 rounded-full border px-4 py-3 sm:flex-nowrap sm:px-5">
            <span className={cn('text-sm font-semibold', billingCycle === 'monthly' ? 'text-[var(--foreground)]' : 'text-[var(--muted)]')}>
              {monthlyLabel}
            </span>
            <Switch
              className="align-middle"
              checked={billingCycle === 'yearly'}
              aria-label={toggleAriaLabel}
              onCheckedChange={(checked) => {
                startTransition(() => {
                  setBillingCycle(checked ? 'yearly' : 'monthly')
                })
              }}
            />
            <span className={cn('text-sm font-semibold', billingCycle === 'yearly' ? 'text-[var(--foreground)]' : 'text-[var(--muted)]')}>
              {yearlyLabel}
            </span>
            <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-ink)]">
              {yearlyBadge}
            </span>
          </div>
        </div>

        <motion.div {...staggerInViewMotion} className="mt-10 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => {
            const price = billingCycle === 'monthly' ? tier.monthlyPrice : tier.yearlyPrice

            return (
              <motion.article
                key={tier.name}
                variants={revealInViewMotion.variants}
                className={cn(
                  'surface-card rounded-[2rem] border p-6 shadow-[0_24px_64px_rgba(0,0,0,0.16)]',
                  tier.isPopular ? 'border-[var(--primary)]' : '',
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-4">
                    <p className="display-heading text-3xl text-[var(--foreground)]">{tier.name}</p>
                    <p className="text-sm leading-7 text-[var(--muted)]">{tier.description}</p>
                  </div>
                  {tier.isPopular ? (
                    <span className="rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary-foreground)]">
                      {popularLabel}
                    </span>
                  ) : null}
                </div>

                <div className="mt-10 flex items-end gap-3">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${tier.name}-${billingCycle}`}
                      animate="visible"
                      className="display-heading text-6xl text-[var(--foreground)]"
                      exit="exit"
                      initial="hidden"
                      variants={priceSwapVariants}
                    >
                      {formatPrice(price)}
                    </motion.div>
                  </AnimatePresence>
                  <span className="pb-2 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                    / {billingCycle === 'monthly' ? monthlyLabel : yearlyLabel}
                  </span>
                </div>

                <p className="mt-6 text-sm uppercase tracking-[0.18em] text-[var(--accent-ink)]">
                  {tier.featureIntro}
                </p>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-7 text-[var(--muted-strong)]">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--accent-ink)]" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.div {...interactiveButtonMotion} className="mt-8">
                  <Button asChild className="w-full" variant={tier.isPopular ? 'primary' : 'secondary'}>
                    <a href={tier.cta.href} aria-label={tier.cta.ariaLabel}>
                      <span className={cn(tier.isPopular ? 'text-[var(--primary-foreground)]' : 'text-[var(--foreground)]')}>
                        {tier.cta.label}
                      </span>
                    </a>
                  </Button>
                </motion.div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}
