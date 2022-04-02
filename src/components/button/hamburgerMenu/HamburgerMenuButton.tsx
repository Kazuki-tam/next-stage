import { Switch } from '@headlessui/react'
import { useAtom } from 'jotai'
import type { VFC } from 'react'

import { sideBarExpandAtom } from '@/globalStates/atom'

import styles from './HamburgerMenuButton.module.scss'

const HamburgerMenuButton: VFC = () => {
  const [sidebarExpand, setSidebarExpand] = useAtom(sideBarExpandAtom)
  return (
    <Switch
      aria-haspopup="true"
      checked={sidebarExpand}
      onChange={setSidebarExpand}
      className={`${styles['hamburger-menu__button']} ${
        sidebarExpand ? styles['hamburger-menu__button--open'] : styles['hamburger-menu__button--close']
      }`}
    >
      <span className="u-sr-only">Enable Side bar</span>
      <span
        className={`${styles['hamburger-menu__icon']} ${
          sidebarExpand ? styles['hamburger-menu__icon--open'] : styles['hamburger-menu__icon--close']
        }`}
      />
    </Switch>
  )
}

export { HamburgerMenuButton }
