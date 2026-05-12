import { useHookTheme } from '@/hooks/useHookTheme'
import { drawerVariants, overlayVariants } from '@/lib/animations'
import type { SiteContent } from '@/types/content'
import { cn } from '@/utils/cn'
import * as Dialog from '@radix-ui/react-dialog'
import { Menu, MoveRight, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import React, { useState } from 'react'
import { Button } from '../../ui/button'

interface Props {
  siteContent: SiteContent
}

export const MobileNav: React.FC<Props> = ({ siteContent }) => {
  const {
    navigation,
    navAriaLabel,
    themeToggleLabel,
    lightThemeLabel,
    darkThemeLabel,
    mobileMenuButtonLabel,
    mobileMenuTitle,
    mobileMenuDescription,
    closeMenuLabel,
  } = siteContent

  const { theme, toggleTheme } = useHookTheme()

  const [isOpen, setIsOpen] = useState(false)

  return (
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
                className="fixed right-0 top-0 z-50 h-full w-full max-w-sm border-l border-(--border) bg-(--background-elevated) p-6 shadow-2xl"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={drawerVariants}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="space-y-2">
                    <Dialog.Title className="display-heading text-3xl text-(--foreground)">
                      {mobileMenuTitle}
                    </Dialog.Title>
                    <Dialog.Description className="text-sm leading-6 text-(--muted)">
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
                            'focus-ring flex items-center justify-between rounded-[1.5rem] border border-(--border) px-4 py-4 text-lg font-medium text-(--foreground)',
                            index === navigation.length - 1 &&
                              'border-(--primary) text-(--primary)',
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
  )
}
