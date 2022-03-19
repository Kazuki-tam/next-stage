import type { VFC } from 'react'

import styles from './index.module.scss'

export const Footer: VFC = () => {
  return (
    <footer className={styles.footer}>
      <small lang="en">@ 20xx Sample.com</small>
    </footer>
  )
}
