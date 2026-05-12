import { UserRound } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
import { interactiveCardMotion, revealInViewMotion, staggerInViewMotion } from '@/lib/animations'
import type { TrainerProfile } from '@/types/content'
import { getSocialIcon } from '@/utils/icon-map'

interface TrainersSectionProps {
  readonly id: string
  readonly eyebrow: string
  readonly title: string
  readonly description: string
  readonly items: readonly TrainerProfile[]
}

export const TrainersSection = ({
  id,
  eyebrow,
  title,
  description,
  items,
}: TrainersSectionProps) => {
  return (
    <motion.section {...revealInViewMotion} id={id} className="py-16 sm:py-24">
      <div className="section-frame">
        <div className="mb-10 max-w-3xl space-y-4">
          <p className="section-kicker">{eyebrow}</p>
          <h2 className="display-heading text-4xl leading-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">{description}</p>
        </div>

        <motion.div {...staggerInViewMotion} className="grid gap-6 lg:grid-cols-3">
          {items.map((trainer) => (
            <motion.div key={trainer.name} variants={revealInViewMotion.variants}>
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
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

interface TrainerImageProps {
  readonly trainer: TrainerProfile
}

const TrainerImage = ({ trainer }: TrainerImageProps) => {
  const [hasImageError, setHasImageError] = useState(false)

  if (hasImageError) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_top,rgba(232,255,71,0.18),transparent_26%),linear-gradient(180deg,var(--surface-card-strong)_0%,var(--surface-card)_100%)] text-[var(--foreground)]">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-card-strong)]">
          <UserRound className="h-10 w-10 text-[var(--accent-ink)]" aria-hidden="true" />
        </div>
        <div className="text-center">
          <p className="display-heading text-3xl">{trainer.name}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[var(--accent-ink)]">{trainer.specialty}</p>
        </div>
      </div>
    )
  }

  return (
    <img
      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      src={trainer.imageSrc}
      alt={trainer.imageAlt}
      loading="lazy"
      onError={() => setHasImageError(true)}
    />
  )
}
