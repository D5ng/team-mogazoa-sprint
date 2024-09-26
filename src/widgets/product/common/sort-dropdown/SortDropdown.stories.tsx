import { fn } from '@storybook/test'
import { Meta, StoryObj } from '@storybook/react'
import SortDropdown from './SortDropdown'
import { ReviewSortOptions } from '../../product-detail/constants'

interface SortDropdownProps {
  onChange: (value: ReviewSortOptions) => void
}

const meta: Meta<typeof SortDropdown> = {
  title: 'Components/Dropdown/SortDropdown',
  args: {
    onChange: fn(),
  },
  component: SortDropdown,
}

type Story = StoryObj<typeof SortDropdown>

export const SortDropdownExample: Story = {
  name: 'Sort Dropdown Example',
  render: ({ onChange }: SortDropdownProps) => {
    return <SortDropdown onChange={onChange} />
  },
}

export default meta
