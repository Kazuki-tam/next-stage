import { useAtom } from 'jotai'
import { useEffect } from 'react'

import { darkModeAtom } from '@/globalStates/atom'

const useDefaultTheme = () => {
  const [, setDarkMode] = useAtom(darkModeAtom)

  useEffect(() => {
    // Check dark mode
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const darkModeOn = darkModeMediaQuery.matches
    if (darkModeOn) {
      setDarkMode(true)
    }
  }, [setDarkMode])
}

export { useDefaultTheme }
