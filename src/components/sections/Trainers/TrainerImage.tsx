import type * as React from 'react'
import { UserRound } from 'lucide-react'
import { useState } from 'react'
import type { TrainerProfile } from '@/types/content'

interface TrainerImageProps {
  readonly trainer: TrainerProfile
}

export const TrainerImage: React.FC<TrainerImageProps> = ({ trainer }) => {
  const [hasImageError, setHasImageError] = useState(false)

  if (hasImageError) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_top,rgba(232,255,71,0.18),transparent_26%),linear-gradient(180deg,var(--surface-card-strong)_0%,var(--surface-card)_100%)] text-(--foreground)">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-(--border) bg-(--surface-card-strong)">
          <UserRound className="h-10 w-10 text-(--accent-ink)" aria-hidden="true" />
        </div>
        <div className="text-center">
          <p className="display-heading text-3xl">{trainer.name}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.24em] text-(--accent-ink)">{trainer.specialty}</p>
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
