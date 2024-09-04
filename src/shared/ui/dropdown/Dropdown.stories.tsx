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

function DropdownStoryComponent({ menuItems, variant, title }: DropdownProps) {
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

type DropdownStory = StoryObj<typeof DropdownStoryComponent>

const meta: Meta<typeof DropdownStoryComponent> = {
  component: (args) => <DropdownStoryComponent {...args} />,
}

export const DropdownComponent: DropdownStory = {
  name: 'Dropdown',
  args: {
    title: '카테고리 선택',
    variant: 'border',
    menuItems: ['React.js', 'JavaScript', 'TypeScript'],
  },
}

export const DropdownSortable: DropdownStory = {
  name: '최신순 드롭다운',
  args: {
    title: '최신순',
    variant: 'none',
    menuItems: ['최신순', '별점 높은순', '별점 낮은순', '좋아요순'],
  },
}

export default meta
