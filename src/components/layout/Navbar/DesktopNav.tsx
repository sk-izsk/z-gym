import { useHookTheme } from '@/hooks/useHookTheme'
import { interactiveButtonMotion } from '@/lib/animations'
import type { SiteContent } from '@/types/content'
import { Moon, MoveRight, SunMedium } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'
import { Button } from '../../ui/button'

interface Props {
  siteContent: SiteContent
}

export const DesktopNav: React.FC<Props> = ({ siteContent }) => {
  const { theme, toggleTheme } = useHookTheme()
  const { brandName, navigation, navAriaLabel, themeToggleLabel, lightThemeLabel, darkThemeLabel } =
    siteContent
  return (
    <>
      <a
        className="focus-ring display-heading text-xl tracking-[0.24em] text-(--foreground)"
        href="#hero"
        aria-label={brandName}
      >
        {brandName}
      </a>
      <nav aria-label={navAriaLabel} className="hidden items-center gap-6 lg:flex">
        {navigation.map((item) => (
          <a
            key={item.href}
            className="focus-ring text-sm font-medium text-(--muted) transition-colors hover:text-(--foreground)"
            href={item.href}
            aria-label={item.ariaLabel}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="hidden items-center gap-3 lg:flex">
        <Button
          aria-label={themeToggleLabel}
          size="icon"
          type="button"
          variant="secondary"
          onClick={toggleTheme}
          title={theme === 'dark' ? lightThemeLabel : darkThemeLabel}
        >
          {theme === 'dark' ? (
            <SunMedium className="h-4 w-4 text-(--foreground)" aria-hidden="true" />
          ) : (
            <Moon className="h-4 w-4 text-(--primary-foreground)" aria-hidden="true" />
          )}
        </Button>
        <motion.div {...interactiveButtonMotion}>
          <Button asChild variant="primary">
            <a href="#join" aria-label={navigation[navigation.length - 1]?.ariaLabel}>
              <span className="text-(--primary-foreground)">
                {navigation[navigation.length - 1]?.label}
              </span>
              <MoveRight className="h-4 w-4 text-(--primary-foreground)" aria-hidden="true" />
            </a>
          </Button>
        </motion.div>
      </div>
    </>
  )
}
