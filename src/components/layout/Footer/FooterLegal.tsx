import type * as React from 'react'

interface FooterLegalProps {
  readonly legal: string
}

export const FooterLegal: React.FC<FooterLegalProps> = ({ legal }) => {
  return (
    <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
      {legal}
    </p>
  )
}
