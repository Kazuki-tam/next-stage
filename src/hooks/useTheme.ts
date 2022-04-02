import { useAtom } from 'jotai'
import { useEffect } from 'react'

import { darkModeAtom } from '@/globalStates/atom'

const useTheme = () => {
  const [darkMode] = useAtom(darkModeAtom)

  useEffect(() => {
    // Change colors
    if (darkMode) {
      document.documentElement.dataset.darkMode = 'true'
    } else {
      document.documentElement.dataset.darkMode = 'false'
    }
  }, [darkMode])
}

export { useTheme }
