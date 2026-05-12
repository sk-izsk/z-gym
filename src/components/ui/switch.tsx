import * as SwitchPrimitives from '@radix-ui/react-switch'
import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/cn'

export const Switch = ({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>) => {
  return (
    <SwitchPrimitives.Root
      className={cn(
        'focus-ring relative inline-flex h-9 w-[3.7rem] shrink-0 cursor-pointer items-center rounded-full border border-[var(--border-strong)] bg-white/8 px-1 transition-colors data-[state=checked]:bg-[var(--primary)]',
        className,
      )}
      {...props}
    >
      <SwitchPrimitives.Thumb className="pointer-events-none block h-7 w-7 rounded-full bg-white shadow-[0_8px_18px_rgba(0,0,0,0.24)] transition-transform data-[state=checked]:translate-x-[1.65rem] data-[state=checked]:bg-[var(--primary-foreground)]" />
    </SwitchPrimitives.Root>
  )
}
