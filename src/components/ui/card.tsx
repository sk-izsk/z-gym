import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/cn'

export const Card = ({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) => {
  return <div className={cn('panel-surface rounded-[2rem]', className)} {...props} />
}

export const CardHeader = ({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) => {
  return <div className={cn('space-y-3 p-6 sm:p-8', className)} {...props} />
}

export const CardTitle = ({
  className,
  ...props
}: ComponentPropsWithoutRef<'h3'>) => {
  return <h3 className={cn('display-heading text-2xl text-[var(--foreground)]', className)} {...props} />
}

export const CardDescription = ({
  className,
  ...props
}: ComponentPropsWithoutRef<'p'>) => {
  return <p className={cn('text-sm leading-6 text-[var(--muted)]', className)} {...props} />
}

export const CardContent = ({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) => {
  return <div className={cn('px-6 pb-6 sm:px-8 sm:pb-8', className)} {...props} />
}
