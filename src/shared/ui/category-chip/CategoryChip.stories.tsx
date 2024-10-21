import { Meta, StoryObj } from '@storybook/react'
import CategoryChip from './CategoryChip'
import type { Categories, CategoryName } from './CategoryChip.type'
import { CATEGORY_CHIPS } from './CategoryChip.constants'

type Story = StoryObj<typeof CategoryChip>

const meta: Meta<typeof CategoryChip> = {
  title: 'UI/CategoryChip',
  component: CategoryChip,
}

export const CategoryChipStory: Story = {
  name: 'Category Example',
  argTypes: {
    name: {
      options: CATEGORY_CHIPS.map((chip) => chip.name),
      control: { type: 'radio' },
    },
  },
  args: {
    name: CATEGORY_CHIPS[0].name,
  },
  render: ({ name }: { name: string }) => <CategoryChip name={name} />,
}

export const CategoryVariants: Story = {
  name: 'Category Variants',
  render: () => (
    <div className="flex gap-x-2.5">
      {CATEGORY_CHIPS.map((categoryChip) => (
        <CategoryChip name={categoryChip.name} key={categoryChip.id} />
      ))}
    </div>
  ),
}

export default meta
