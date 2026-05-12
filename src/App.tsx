import type * as React from 'react'
import { AnimatePresence } from 'motion/react'
import { Suspense } from 'react'
import HomeScreen from '@/screens/HomeScreen'

const appFallback = <div className="min-h-screen bg-(--color-background)" aria-hidden="true" />

export const App: React.FC = () => {
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={appFallback}>
        <HomeScreen />
      </Suspense>
    </AnimatePresence>
  )
}
