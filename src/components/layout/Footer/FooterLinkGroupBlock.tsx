import { motion } from 'motion/react'
import { revealInViewMotion } from '@/lib/animations'
import type { FooterLinkGroup } from '@/types/content'

interface FooterLinkGroupBlockProps {
  readonly group: FooterLinkGroup
}

export const FooterLinkGroupBlock = ({
  group,
}: FooterLinkGroupBlockProps) => {
  return (
    <motion.div
      variants={revealInViewMotion.variants}
      className="space-y-4"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--accent-ink)">
        {group.title}
      </p>
      <ul className="space-y-3">
        {group.links.map((link) => (
          <li key={link.label}>
            <a
              className="focus-ring text-sm text-(--muted) transition-colors hover:text-(--foreground)"
              href={link.href}
              aria-label={link.ariaLabel}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
