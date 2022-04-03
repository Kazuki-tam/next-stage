import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { BaseText } from './BaseText'

export default {
  title: 'Text',
  component: BaseText,
} as ComponentMeta<typeof BaseText>

export const Base: ComponentStory<typeof BaseText> = () => {
  return <BaseText>Sample Text</BaseText>
}

export const Small: ComponentStory<typeof BaseText> = () => {
  return <BaseText size="small">Sample Text</BaseText>
}

export const Medium: ComponentStory<typeof BaseText> = () => {
  return <BaseText size="medium">Sample Text</BaseText>
}

export const Large: ComponentStory<typeof BaseText> = () => {
  return <BaseText size="large">Sample Text</BaseText>
}
