import { startTransition } from 'react'
import type { BillingCycle } from '@/types/content'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/utils/cn'

interface PricingBillingToggleProps {
  readonly billingCycle: BillingCycle
  readonly monthlyLabel: string
  readonly yearlyLabel: string
  readonly yearlyBadge: string
  readonly toggleAriaLabel: string
  readonly onChange: (billingCycle: BillingCycle) => void
}

export const PricingBillingToggle = ({
  billingCycle,
  monthlyLabel,
  yearlyLabel,
  yearlyBadge,
  toggleAriaLabel,
  onChange,
}: PricingBillingToggleProps) => {
  return (
    <div className="surface-card inline-flex flex-wrap items-center gap-3 rounded-full border px-4 py-3 sm:flex-nowrap sm:px-5">
      <span className={cn('text-sm font-semibold', billingCycle === 'monthly' ? 'text-(--foreground)' : 'text-(--muted)')}>
        {monthlyLabel}
      </span>
      <Switch
        className="align-middle"
        checked={billingCycle === 'yearly'}
        aria-label={toggleAriaLabel}
        onCheckedChange={(checked) => {
          startTransition(() => {
            onChange(checked ? 'yearly' : 'monthly')
          })
        }}
      />
      <span className={cn('text-sm font-semibold', billingCycle === 'yearly' ? 'text-(--foreground)' : 'text-(--muted)')}>
        {yearlyLabel}
      </span>
      <span className="rounded-full bg-(--accent-soft) px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-(--accent-ink)">
        {yearlyBadge}
      </span>
    </div>
  )
}
