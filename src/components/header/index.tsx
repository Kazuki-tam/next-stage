import Link from 'next/link'
import type { VFC } from 'react'

import { globalNavMenu } from '../../constants/globalNavMenu'
import styles from './index.module.scss'

export const Header: VFC = () => {
  return (
    <header className={styles['header']}>
      <nav className={styles['header-nav']}>
        <div className={styles['header-nav-logo']}>
          <Link href="/">
            <a className={styles['header-nav-link']}>🚀 Next-Stage</a>
          </Link>
        </div>
        <ul className={styles['header-nav-list']}>
          {globalNavMenu.map(({ href, label }, index) => {
            return (
              <li key={index} className={styles['header-nav-item']}>
                <Link href={href}>
                  <a className={styles['header-nav-link']}>{label}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
