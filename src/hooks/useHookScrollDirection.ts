import { useEffect, useRef, useState } from 'react'

type ScrollDirection = 'up' | 'down'

interface ScrollState {
  readonly direction: ScrollDirection
  readonly isScrolled: boolean
}

const SCROLL_THRESHOLD = 12

export const useHookScrollDirection = (): ScrollState => {
  const [state, setState] = useState<ScrollState>({
    direction: 'up',
    isScrolled: false,
  })
  const lastYRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const delta = currentY - lastYRef.current

      if (Math.abs(delta) < SCROLL_THRESHOLD) {
        const nextIsScrolled = currentY > 24

        setState((previous) =>
          previous.isScrolled === nextIsScrolled
            ? previous
            : { ...previous, isScrolled: nextIsScrolled },
        )
        return
      }

      setState({
        direction: delta > 0 ? 'down' : 'up',
        isScrolled: currentY > 24,
      })
      lastYRef.current = currentY
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return state
}
