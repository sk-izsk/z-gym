import * as Dialog from '@radix-ui/react-dialog'
import { Menu, Moon, MoveRight, SunMedium, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import {
  drawerVariants,
  interactiveButtonMotion,
  navbarVariants,
  overlayVariants,
} from '@/lib/animations'
import { useHookScrollDirection } from '@/hooks/useHookScrollDirection'
import { useHookTheme } from '@/hooks/useHookTheme'
import type { NavItem } from '@/types/content'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils/cn'

interface NavbarProps {
  readonly brandName: string
  readonly navAriaLabel: string
  readonly themeToggleLabel: string
  readonly darkThemeLabel: string
  readonly lightThemeLabel: string
  readonly navigation: readonly NavItem[]
  readonly mobileMenuButtonLabel: string
  readonly mobileMenuTitle: string
  readonly mobileMenuDescription: string
  readonly closeMenuLabel: string
}

export const Navbar = ({
  brandName,
  navAriaLabel,
  themeToggleLabel,
  darkThemeLabel,
  lightThemeLabel,
  navigation,
  mobileMenuButtonLabel,
  mobileMenuTitle,
  mobileMenuDescription,
  closeMenuLabel,
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const { direction, isScrolled } = useHookScrollDirection()
  const { theme, toggleTheme } = useHookTheme()
  const animateState = direction === 'down' && isScrolled ? 'hidden' : 'visible'

  return (
    <motion.header
      animate={animateState}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
      initial="visible"
      variants={navbarVariants}
    >
      <div className="section-frame">
        <div className="panel-surface flex items-center justify-between rounded-full border border-[var(--border)] px-4 py-3 sm:px-6">
          <a
            className="focus-ring display-heading text-xl tracking-[0.24em] text-[var(--foreground)]"
            href="#hero"
            aria-label={brandName}
          >
            {brandName}
          </a>

          <nav aria-label={navAriaLabel} className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                className="focus-ring text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
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
                <SunMedium className="h-4 w-4 text-[var(--foreground)]" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4 text-[var(--primary-foreground)]" aria-hidden="true" />
              )}
            </Button>
            <motion.div {...interactiveButtonMotion}>
              <Button asChild variant="primary">
                <a href="#join" aria-label={navigation[navigation.length - 1]?.ariaLabel}>
                  <span className="text-[var(--primary-foreground)]">{navigation[navigation.length - 1]?.label}</span>
                  <MoveRight className="h-4 w-4 text-[var(--primary-foreground)]" aria-hidden="true" />
                </a>
              </Button>
            </motion.div>
          </div>

          <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
            <Dialog.Trigger asChild>
              <Button
                aria-label={mobileMenuButtonLabel}
                className="lg:hidden"
                size="icon"
                variant="secondary"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </Dialog.Trigger>

            <AnimatePresence>
              {isOpen ? (
                <Dialog.Portal forceMount>
                  <Dialog.Overlay asChild>
                    <motion.div
                      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={overlayVariants}
                    />
                  </Dialog.Overlay>
                  <Dialog.Content asChild>
                    <motion.div
                      className="fixed right-0 top-0 z-50 h-full w-full max-w-sm border-l border-[var(--border)] bg-[var(--background-elevated)] p-6 shadow-2xl"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={drawerVariants}
                    >
                      <div className="flex items-start justify-between gap-6">
                        <div className="space-y-2">
                          <Dialog.Title className="display-heading text-3xl text-[var(--foreground)]">
                            {mobileMenuTitle}
                          </Dialog.Title>
                          <Dialog.Description className="text-sm leading-6 text-[var(--muted)]">
                            {mobileMenuDescription}
                          </Dialog.Description>
                        </div>
                        <Dialog.Close asChild>
                          <Button aria-label={closeMenuLabel} size="icon" variant="ghost">
                            <X className="h-5 w-5" aria-hidden="true" />
                          </Button>
                        </Dialog.Close>
                      </div>

                      <nav aria-label={navAriaLabel} className="mt-10">
                        <div className="mb-6">
                          <Button
                            aria-label={themeToggleLabel}
                            type="button"
                            variant="secondary"
                            onClick={toggleTheme}
                          >
                            {theme === 'dark' ? lightThemeLabel : darkThemeLabel}
                          </Button>
                        </div>
                        <ul className="space-y-4">
                          {navigation.map((item, index) => (
                            <li key={item.href}>
                              <a
                                className={cn(
                                  'focus-ring flex items-center justify-between rounded-[1.5rem] border border-[var(--border)] px-4 py-4 text-lg font-medium text-[var(--foreground)]',
                                  index === navigation.length - 1 && 'border-[var(--primary)] text-[var(--primary)]',
                                )}
                                href={item.href}
                                aria-label={item.ariaLabel}
                                onClick={() => setIsOpen(false)}
                              >
                                <span>{item.label}</span>
                                <MoveRight className="h-4 w-4" aria-hidden="true" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </motion.div>
                  </Dialog.Content>
                </Dialog.Portal>
              ) : null}
            </AnimatePresence>
          </Dialog.Root>
        </div>
      </div>
    </motion.header>
  )
}
