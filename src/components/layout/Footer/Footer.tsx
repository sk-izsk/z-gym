import type * as React from 'react'
import { revealInViewMotion, staggerInViewMotion } from '@/lib/animations'
import type { FooterContent } from '@/types/content'
import { motion } from 'motion/react'
import { FooterBrand } from './FooterBrand'
import { FooterLegal } from './FooterLegal'
import { FooterLinkGroupBlock } from './FooterLinkGroupBlock'
import { FooterNewsletterForm } from './FooterNewsletterForm'
import { FooterSocialLinks } from './FooterSocialLinks'

interface FooterProps {
  readonly content: FooterContent
}

export const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <motion.footer {...revealInViewMotion} className="border-t border-(--border) pb-10 pt-16">
      <div className="section-frame">
        <motion.div
          {...staggerInViewMotion}
          className="surface-card grid gap-10 rounded-[2rem] border p-6 sm:p-8 lg:grid-cols-[1.2fr_1fr_1fr]"
        >
          <motion.div variants={revealInViewMotion.variants} className="space-y-5">
            <FooterBrand
              brandLabel={content.brandLabel}
              description={content.description}
            />
            <FooterSocialLinks socials={content.socials} />
          </motion.div>

          {content.linkGroups.map((group) => (
            <FooterLinkGroupBlock key={group.title} group={group} />
          ))}

          <FooterNewsletterForm
            content={{
              newsletterLabel: content.newsletterLabel,
              newsletterPlaceholder: content.newsletterPlaceholder,
              newsletterButton: content.newsletterButton,
              newsletterSuccess: content.newsletterSuccess,
              newsletterValidation: content.newsletterValidation,
            }}
          />
        </motion.div>
        <FooterLegal legal={content.legal} />
      </div>
    </motion.footer>
  )
}
