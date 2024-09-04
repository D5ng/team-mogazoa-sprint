import { Meta, StoryObj } from '@storybook/react'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownMenuItem,
} from './Dropdown'
import type { DropdownVariantType } from './Dropdown.type'

interface DropdownProps {
  menuItems: string[]
  variant: DropdownVariantType
  title: string
}

function DropdownStoryComponent({
  menuItems,
  variant = 'border',
  title,
}: DropdownProps) {
  return (
    <Dropdown variant={variant}>
      <DropdownTrigger>{title}</DropdownTrigger>
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
  component: DropdownStoryComponent,
}

export const DropdownComponent: Story = {
  name: 'Dropdown',
  argTypes: {
    title: {
      control: 'text',
      description: '타이틀 텍스트를 설정해주는 부분',
    },
    variant: {
      control: 'select',
      options: ['border', 'none'],
    },
    menuItems: {
      control: 'object',
    },
  },
  args: {
    title: '카테고리 선택',
    variant: 'border',
    menuItems: ['React.js', 'JavaScript', 'TypeScript'],
  },
}

export default meta
