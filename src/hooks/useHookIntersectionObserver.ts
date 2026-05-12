import { useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  readonly freezeOnceVisible?: boolean
}

interface UseIntersectionObserverResult<T extends Element> {
  readonly ref: RefObject<T | null>
  readonly isInView: boolean
}

export const useHookIntersectionObserver = <T extends Element>(
  options: UseIntersectionObserverOptions = {},
): UseIntersectionObserverResult<T> => {
  const { freezeOnceVisible = false, threshold = 0.25, root = null, rootMargin = '0px' } = options
  const ref = useRef<T | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element || (freezeOnceVisible && isInView)) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold, root, rootMargin },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [freezeOnceVisible, isInView, root, rootMargin, threshold])

  return { ref, isInView }
}
