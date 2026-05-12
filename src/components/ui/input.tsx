import type { InputHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

export const Input = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={cn(
        'focus-ring min-h-14 w-full rounded-full border border-(--border) bg-(--surface-input) px-5 text-sm text-(--foreground) placeholder:text-(--muted)',
        className,
      )}
      {...props}
    />
  )
}
