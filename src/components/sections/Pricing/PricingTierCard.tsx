import { Check } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { interactiveButtonMotion, priceSwapVariants, revealInViewMotion } from '@/lib/animations'
import type { BillingCycle, PricingTier } from '@/types/content'
import { cn } from '@/utils/cn'

interface PricingTierCardProps {
  readonly tier: PricingTier
  readonly billingCycle: BillingCycle
  readonly monthlyLabel: string
  readonly yearlyLabel: string
  readonly popularLabel: string
}

const formatPrice = (price: number) => {
  return `$${price}`
}

export const PricingTierCard = ({
  tier,
  billingCycle,
  monthlyLabel,
  yearlyLabel,
  popularLabel,
}: PricingTierCardProps) => {
  const price = billingCycle === 'monthly' ? tier.monthlyPrice : tier.yearlyPrice

  return (
    <motion.article
      variants={revealInViewMotion.variants}
      className={cn(
        'surface-card rounded-[2rem] border p-6 shadow-[0_24px_64px_rgba(0,0,0,0.16)]',
        tier.isPopular ? 'border-(--primary)' : '',
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-4">
          <p className="display-heading text-3xl text-(--foreground)">{tier.name}</p>
          <p className="text-sm leading-7 text-(--muted)">{tier.description}</p>
        </div>
        {tier.isPopular ? (
          <span className="rounded-full bg-(--primary) px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-(--primary-foreground)">
            {popularLabel}
          </span>
        ) : null}
      </div>

      <div className="mt-10 flex items-end gap-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${tier.name}-${billingCycle}`}
            animate="visible"
            className="display-heading text-6xl text-(--foreground)"
            exit="exit"
            initial="hidden"
            variants={priceSwapVariants}
          >
            {formatPrice(price)}
          </motion.div>
        </AnimatePresence>
        <span className="pb-2 text-sm uppercase tracking-[0.2em] text-(--muted)">
          / {billingCycle === 'monthly' ? monthlyLabel : yearlyLabel}
        </span>
      </div>

      <p className="mt-6 text-sm uppercase tracking-[0.18em] text-(--accent-ink)">
        {tier.featureIntro}
      </p>
      <ul className="mt-6 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm leading-7 text-(--muted-strong)">
            <Check className="mt-1 h-4 w-4 shrink-0 text-(--accent-ink)" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <motion.div {...interactiveButtonMotion} className="mt-8">
        <Button asChild className="w-full" variant={tier.isPopular ? 'primary' : 'secondary'}>
          <a href={tier.cta.href} aria-label={tier.cta.ariaLabel}>
            <span className={cn(tier.isPopular ? 'text-(--primary-foreground)' : 'text-(--foreground)')}>
              {tier.cta.label}
            </span>
          </a>
        </Button>
      </motion.div>
    </motion.article>
  )
}
