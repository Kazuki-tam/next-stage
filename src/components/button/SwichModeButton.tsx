import { Switch } from '@headlessui/react'
import type { VFC } from 'react'
import { useState } from 'react'

import styles from './SwichModeButton.module.scss'

export const SwichModeButton: VFC = () => {
  const [enabled, setEnabled] = useState(false)
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${styles['swich-mode__button']} ${
        enabled ? styles['swich-mode__button--on'] : styles['swich-mode__button--off']
      }`}
    >
      <span className="u-sr-only">Enable notifications</span>
      <span
        className={`${styles['swich-mode__ring']} ${
          enabled ? styles['swich-mode__ring--on'] : styles['swich-mode__ring--off']
        }`}
      />
    </Switch>
  )
}
