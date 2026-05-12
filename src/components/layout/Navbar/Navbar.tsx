import type * as React from 'react'
import { useHookScrollDirection } from '@/hooks/useHookScrollDirection'
import { navbarVariants } from '@/lib/animations'
import type { SiteContent } from '@/types/content'
import { motion } from 'motion/react'
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'

interface NavbarProps {
  siteContent: SiteContent
}

export const Navbar: React.FC<NavbarProps> = ({ siteContent }) => {
  const { direction, isScrolled } = useHookScrollDirection()
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
          <DesktopNav siteContent={siteContent} />

          <MobileNav siteContent={siteContent} />
        </div>
      </div>
    </motion.header>
  )
}
