import { Switch } from '@headlessui/react'
import { useAtom } from 'jotai'
import type { VFC } from 'react'

import { darkModeAtom } from '@/globalStates/atom'

import styles from './SwichModeButton.module.scss'

const SwichModeButton: VFC = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom)
  return (
    <Switch
      checked={darkMode}
      onChange={setDarkMode}
      className={`${styles['swich-mode__button']} ${
        darkMode ? styles['swich-mode__button--on'] : styles['swich-mode__button--off']
      }`}
    >
      <span className="u-sr-only">Enable dark mode</span>
      <span
        className={`${styles['swich-mode__ring']} ${
          darkMode ? styles['swich-mode__ring--on'] : styles['swich-mode__ring--off']
        }`}
      />
    </Switch>
  )
}

export { SwichModeButton }
