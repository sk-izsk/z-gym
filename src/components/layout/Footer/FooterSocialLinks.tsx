import { motion } from 'motion/react'
import { interactiveButtonMotion } from '@/lib/animations'
import type { FooterContent } from '@/types/content'
import { getSocialIcon } from '@/utils/icon-map'

interface FooterSocialLinksProps {
  readonly socials: FooterContent['socials']
}

export const FooterSocialLinks = ({
  socials,
}: FooterSocialLinksProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {socials.map((social) => {
        const Icon = getSocialIcon(social.icon)

        return (
          <motion.a
            key={social.label}
            {...interactiveButtonMotion}
            className="focus-ring inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-card-strong)] text-[var(--foreground)]"
            href={social.href}
            aria-label={social.ariaLabel}
            rel="noreferrer"
            target="_blank"
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </motion.a>
        )
      })}
    </div>
  )
}
