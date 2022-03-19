import type { VFC } from 'react'

import styles from './BaseText.module.scss'

type Size = 'small' | 'medium' | 'large' | 'extraLarge'
type Align = 'left' | 'center' | 'right'
type Variation = 'normal' | 'error' | 'strong'

type BaseTextProps = {
  size?: Size
  align?: Align
  variation?: Variation
  children: React.ReactNode
}

export const BaseText: VFC<BaseTextProps> = (props) => {
  const alignClassName = props.align ? styles[`text--${props.align}`] : styles[`text--left}`]
  const stateClassName = props.variation ? styles[`text--${props.variation}`] : styles[`text--normal}`]
  const sizeClassName = props.size ? styles[`text--${props.size}`] : styles[`text--medium`]
  const contentClassName = [styles['text'], sizeClassName, stateClassName, alignClassName]
  return <p className={contentClassName.join(' ')}>{props.children}</p>
}
