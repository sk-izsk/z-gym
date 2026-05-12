import type * as React from 'react'
import { motion } from 'motion/react'
import { interactiveCardMotion, revealInViewMotion } from '@/lib/animations'
import type { TrainerProfile } from '@/types/content'
import { getSocialIcon } from '@/utils/icon-map'
import { TrainerImage } from './TrainerImage'

interface TrainerCardProps {
  readonly trainer: TrainerProfile
}

export const TrainerCard: React.FC<TrainerCardProps> = ({ trainer }) => {
  return (
    <motion.div variants={revealInViewMotion.variants}>
      <motion.article
        {...interactiveCardMotion}
        className="group surface-card overflow-hidden rounded-[2rem] border"
      >
        <div className="relative h-[26rem] overflow-hidden">
          <TrainerImage trainer={trainer} />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_28%,rgba(0,0,0,0.82)_100%)]" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-ink)]">{trainer.specialty}</p>
            <h3 className="mt-3 display-heading text-3xl text-[var(--foreground)]">{trainer.name}</h3>
          </div>
          <div className="absolute right-6 top-6 flex translate-y-2 gap-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            {trainer.socials.map((social) => {
              const Icon = getSocialIcon(social.icon)

              return (
                <a
                  key={social.label}
                  className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-overlay)] text-[var(--foreground)] backdrop-blur-sm"
                  href={social.href}
                  aria-label={social.ariaLabel}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </div>
        <div className="p-6">
          <p className="text-sm leading-7 text-[var(--muted)]">{trainer.bio}</p>
        </div>
      </motion.article>
    </motion.div>
  )
}
