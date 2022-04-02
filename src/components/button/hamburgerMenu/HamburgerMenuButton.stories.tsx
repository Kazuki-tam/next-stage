import type { ComponentMeta } from '@storybook/react'

import { HamburgerMenuButton } from './HamburgerMenuButton'

export default {
  title: 'Button',
  component: HamburgerMenuButton,
} as ComponentMeta<typeof HamburgerMenuButton>

export const HamburgerMenu = () => {
  return <HamburgerMenuButton />
}
