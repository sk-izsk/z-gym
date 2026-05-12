import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

const buttonVariants = cva(
  'focus-ring inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border text-sm font-semibold leading-none transition-[color,background-color,border-color,box-shadow,transform] disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0 [&_svg]:stroke-[2.2]',
  {
    variants: {
      variant: {
        primary:
          'border-(--primary) bg-(--primary) px-6 py-3 text-(--primary-foreground) shadow-[0_0_0_1px_rgba(232,255,71,0.18),0_12px_30px_rgba(232,255,71,0.22)] hover:brightness-[1.03]',
        secondary:
          'border-(--border-strong) bg-white/6 px-6 py-3 text-(--foreground) hover:border-(--primary) hover:text-(--foreground)',
        ghost:
          'border-transparent bg-transparent px-3 py-2 text-(--foreground) hover:text-(--primary)',
      },
      size: {
        default: 'min-h-12',
        sm: 'min-h-10 px-4 py-2 text-xs',
        icon: 'h-12 w-12 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  readonly asChild?: boolean
}

export const Button = ({
  asChild = false,
  className,
  size,
  variant,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button'

  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
}
