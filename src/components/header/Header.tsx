import { useAtom } from 'jotai'
import Link from 'next/link'
import type { VFC } from 'react'
import { useRef } from 'react'

import { sideBarExpandAtom } from '@/globalStates/atom'
import { useCloseBackDrop } from '@/hooks/useCloseBackDrop'
import { useHeaderHeight } from '@/hooks/useHeaderHeight'

import { globalNavMenu } from '../../constants/globalNavMenu'
import { HamburgerMenuButton } from '../button/hamburgerMenu/HamburgerMenuButton'
import { SwichModeButton } from '../button/swichMode/SwichModeButton'
import styles from './Header.module.scss'

export const Header: VFC = () => {
  const headerEl = useRef<HTMLElement>(null)
  const [sidebarExpand] = useAtom(sideBarExpandAtom)
  const closeBackDrop = useCloseBackDrop()
  // Adjust header hight
  useHeaderHeight(headerEl)

  return (
    <header className={styles['header']} ref={headerEl}>
      <nav className={styles['header-nav']}>
        <div className={styles['header-nav__logo']}>
          <Link href="/">
            <a className={styles['header-nav__link']}>🚀 Next-Stage</a>
          </Link>
        </div>
        <div className={styles['header-nav-menu']}>
          <div className={styles['header-nav__hambarger-wrapper']}>
            <HamburgerMenuButton />
          </div>
          <ul className={styles['header-nav__list']}>
            {globalNavMenu.map(({ href, label }, index) => {
              return (
                <li key={index} className={styles['header-nav__item']}>
                  <Link href={href}>
                    <a className={styles['header-nav__link']}>{label}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className={styles['header-nav__button-wrapper']}>
            <SwichModeButton />
          </div>
        </div>
        {/* Mobile Sidebar View */}
        <div
          role="presentation"
          onTouchStart={closeBackDrop}
          className={`${styles['header-sidebar__backdrop']} ${sidebarExpand ? styles['open'] : styles['close']}`}
        ></div>
        <div className={`${styles['header-sidebar']} ${sidebarExpand ? styles['open'] : styles['close']}`}>
          <div className={styles['header-nav__hambarger-wrapper--close']}>
            <SwichModeButton />
            <HamburgerMenuButton />
          </div>
          <ul className={styles['header-sidebar__list']}>
            {globalNavMenu.map(({ href, label }, index) => {
              return (
                <li key={index} className={styles['header-sidebar__item']}>
                  <Link href={href}>
                    <a className={styles['header-sidebar__link']}>{label}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        {/* End Mobile Sidebar View */}
      </nav>
    </header>
  )
}
