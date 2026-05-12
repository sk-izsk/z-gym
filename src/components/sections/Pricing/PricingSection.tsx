import { motion } from 'motion/react'
import { useState } from 'react'
import { revealInViewMotion, staggerInViewMotion } from '@/lib/animations'
import type { BillingCycle, PricingTier } from '@/types/content'
import { PricingBillingToggle } from './PricingBillingToggle'
import { PricingSectionHeader } from './PricingSectionHeader'
import { PricingTierCard } from './PricingTierCard'

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
          <PricingSectionHeader eyebrow={eyebrow} title={title} description={description} />
          <PricingBillingToggle
            billingCycle={billingCycle}
            monthlyLabel={monthlyLabel}
            yearlyLabel={yearlyLabel}
            yearlyBadge={yearlyBadge}
            toggleAriaLabel={toggleAriaLabel}
            onChange={setBillingCycle}
          />
        </div>

        <motion.div {...staggerInViewMotion} className="mt-10 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <PricingTierCard
              key={tier.name}
              tier={tier}
              billingCycle={billingCycle}
              monthlyLabel={monthlyLabel}
              yearlyLabel={yearlyLabel}
              popularLabel={popularLabel}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
