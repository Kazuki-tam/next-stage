import type { ComponentMeta } from '@storybook/react'

import { Footer } from './Footer'

export default {
  title: 'Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

export const Primary = () => {
  return <Footer />
}
