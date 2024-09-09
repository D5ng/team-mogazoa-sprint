import { Meta, StoryObj } from '@storybook/react'
import CategoryChip from './CategoryChip'
import { CATEGORY_CHIPS } from './CategoryChip.constants'

type Story = StoryObj<typeof CategoryChip>

const meta: Meta<typeof CategoryChip> = {
  component: CategoryChip,
}

export const CategoryChipStory: Story = {
  name: 'widgets/CategoryChip',
  argTypes: {
    name: {
      control: 'radio',
      options: CATEGORY_CHIPS,
    },
  },
  args: {
    name: CATEGORY_CHIPS[0],
  },
}

export default meta
