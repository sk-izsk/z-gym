import { useEffect, useState } from 'react'
import { useHookReducedMotionPreference } from '@/hooks/useHookReducedMotionPreference'

interface UseCountUpOptions {
  readonly end: number
  readonly isActive: boolean
  readonly duration?: number
}

export const useHookCountUp = ({
  end,
  isActive,
  duration = 1200,
}: UseCountUpOptions) => {
  const [value, setValue] = useState(0)
  const reduceMotion = useHookReducedMotionPreference()

  useEffect(() => {
    if (!isActive) {
      return
    }

    if (reduceMotion) {
      const frameId = window.requestAnimationFrame(() => {
        setValue(end)
      })

      return () => window.cancelAnimationFrame(frameId)
    }

    const setupFrameId = window.requestAnimationFrame(() => {
      setValue(0)
    })

    let frameId = 0
    const startTime = performance.now()

    const tick = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setValue(Math.round(end * eased))

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick)
      }
    }

    frameId = window.requestAnimationFrame(tick)

    return () => {
      window.cancelAnimationFrame(setupFrameId)
      window.cancelAnimationFrame(frameId)
    }
  }, [duration, end, isActive, reduceMotion])

  return value
}
