import type { FooterContent } from '@/types/content'

interface FooterBrandProps {
  readonly brandLabel: FooterContent['brandLabel']
  readonly description: FooterContent['description']
}

export const FooterBrand = ({
  brandLabel,
  description,
}: FooterBrandProps) => {
  return (
    <div className="space-y-5">
      <p className="display-heading text-3xl text-(--foreground)">
        {brandLabel}
      </p>
      <p className="max-w-md text-sm leading-7 text-(--muted)">
        {description}
      </p>
    </div>
  )
}
