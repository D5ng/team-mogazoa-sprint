import { Meta, StoryObj } from '@storybook/react'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownMenuItem,
} from './Dropdown'

function DropdownStoryComponent({ menuItems }: { menuItems: string[] }) {
  return (
    <Dropdown>
      <DropdownTrigger>카테고리 선택</DropdownTrigger>
      <DropdownMenu>
        {menuItems.map((menu) => (
          <DropdownMenuItem>{menu}</DropdownMenuItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

type Story = StoryObj<typeof DropdownStoryComponent>

const meta: Meta<typeof DropdownStoryComponent> = {
  component: (args) => <DropdownStoryComponent {...args} />,
}

export const DropdownComponent: Story = {
  args: {
    menuItems: ['React.js', 'JavaScript', 'TypeScript'],
  },
}

export default meta
