import { useEffect, useState } from 'react'

export type ThemeMode = 'dark' | 'light'

const STORAGE_KEY = 'z-gym-theme'

const getSystemTheme = (): ThemeMode => {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export const useHookTheme = () => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') {
      return 'dark'
    }

    const savedTheme = window.localStorage.getItem(STORAGE_KEY)

    return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : getSystemTheme()
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  return {
    theme,
    setTheme,
    toggleTheme: () => {
      setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
    },
  }
}
