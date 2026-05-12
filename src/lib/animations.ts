import type { Variants } from 'motion/react'

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1]
const easeInOut: [number, number, number, number] = [0.65, 0, 0.35, 1]

export const viewportOnce = {
  once: true,
  amount: 0.24,
} as const

export const springTransition = {
  type: 'spring',
  stiffness: 240,
  damping: 24,
  mass: 0.9,
} as const

export const sectionRevealVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
}

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

export const heroWordVariants: Variants = {
  hidden: { opacity: 0, y: 64, rotateX: -80 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.75, ease: easeOut },
  },
}

export const navbarVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -112,
    transition: { duration: 0.35, ease: easeInOut },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
}

export const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.24, ease: easeOut } },
}

export const drawerVariants: Variants = {
  hidden: {
    opacity: 0,
    x: '100%',
    transition: { duration: 0.3, ease: easeInOut },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: springTransition,
  },
}

export const cardHoverVariants: Variants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: '0 18px 44px rgba(0, 0, 0, 0.24)',
  },
  hover: {
    y: -10,
    scale: 1.015,
    boxShadow: '0 24px 60px rgba(232, 255, 71, 0.16)',
  },
  tap: {
    y: -4,
    scale: 0.99,
  },
}

export const interactiveCardMotion = {
  initial: 'rest',
  animate: 'rest',
  whileHover: 'hover',
  whileTap: 'tap',
  variants: cardHoverVariants,
  transition: springTransition,
} as const

export const buttonHoverVariants: Variants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -2 },
  tap: { scale: 0.98, y: 0 },
}

export const interactiveButtonMotion = {
  initial: 'rest',
  animate: 'rest',
  whileHover: 'hover',
  whileTap: 'tap',
  variants: buttonHoverVariants,
  transition: springTransition,
} as const

export const priceSwapVariants: Variants = {
  hidden: { opacity: 0, y: 14, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.32, ease: easeOut },
  },
  exit: {
    opacity: 0,
    y: -14,
    filter: 'blur(8px)',
    transition: { duration: 0.22, ease: easeInOut },
  },
}

export const carouselVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: easeOut } },
  exit: { opacity: 0, transition: { duration: 0.35, ease: easeInOut } },
}

export const revealInViewMotion = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: viewportOnce,
  variants: sectionRevealVariants,
} as const

export const staggerInViewMotion = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: viewportOnce,
  variants: staggerContainerVariants,
} as const
