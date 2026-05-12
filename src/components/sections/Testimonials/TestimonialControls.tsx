import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { interactiveButtonMotion } from '@/lib/animations'

interface TestimonialControlsProps {
  readonly previousLabel: string
  readonly nextLabel: string
  readonly onPrevious: () => void
  readonly onNext: () => void
}

export const TestimonialControls = ({
  previousLabel,
  nextLabel,
  onPrevious,
  onNext,
}: TestimonialControlsProps) => {
  return (
    <div className="mt-8 flex items-center gap-3">
      <motion.div {...interactiveButtonMotion}>
        <Button
          aria-label={previousLabel}
          className="text-[var(--foreground)]"
          size="icon"
          variant="secondary"
          onClick={onPrevious}
        >
          <ChevronLeft className="h-5 w-5 text-[var(--foreground)]" aria-hidden="true" />
        </Button>
      </motion.div>
      <motion.div {...interactiveButtonMotion}>
        <Button
          aria-label={nextLabel}
          className="text-[var(--foreground)]"
          size="icon"
          variant="secondary"
          onClick={onNext}
        >
          <ChevronRight className="h-5 w-5 text-[var(--foreground)]" aria-hidden="true" />
        </Button>
      </motion.div>
    </div>
  )
}
