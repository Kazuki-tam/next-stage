import type { ComponentMeta } from '@storybook/react'

import { SwichModeButton } from './SwichModeButton'

export default {
  title: 'Button',
  component: SwichModeButton,
} as ComponentMeta<typeof SwichModeButton>

export const SwichMode = () => {
  return <SwichModeButton />
}
