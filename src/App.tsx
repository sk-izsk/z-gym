import { AnimatePresence } from 'motion/react'
import { Suspense } from 'react'
import HomeScreen from '@/screens/HomeScreen'

const appFallback = <div className="min-h-screen bg-[var(--color-background)]" aria-hidden="true" />

export const App = () => {
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={appFallback}>
        <HomeScreen />
      </Suspense>
    </AnimatePresence>
  )
}
