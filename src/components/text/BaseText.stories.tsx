import type { ComponentMeta } from '@storybook/react'

import { BaseText } from './BaseText'

export default {
  title: 'Text',
  component: BaseText,
} as ComponentMeta<typeof BaseText>

export const Base = () => {
  return <BaseText>Sample Text</BaseText>
}
