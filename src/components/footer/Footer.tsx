import type { VFC } from 'react'

import styles from './Footer.module.scss'

export const Footer: VFC = () => {
  return (
    <footer className={styles.footer}>
      <small lang="en">@ {new Date().getFullYear()} Next-Stage</small>
    </footer>
  )
}
