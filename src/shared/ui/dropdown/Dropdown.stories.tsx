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
  title: string
  variant?: DropdownVariantType
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
          <DropdownMenuItem key={menu}>{menu}</DropdownMenuItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

type Story = StoryObj<typeof DropdownStoryComponent>

const meta: Meta<typeof DropdownStoryComponent> = {
  title: 'UI/Dropdown',
  argTypes: {
    variant: {
      control: 'select',
      options: ['border', 'none'],
      description: '드롭다운 스타일 종류 설정입니다.',
      table: {
        defaultValue: {
          summary: 'border',
        },
      },
    },
    title: {
      control: 'text',
      description: '드롭다운 기본 타이틀을 설정입니다.',
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
    menuItems: {
      control: 'object',
      description:
        '드롭다운 아이템 설정입니다. 배열 형태로 전달해 주어야합니다.',
    },
  },
  component: DropdownStoryComponent,
}

export const DropdownExample: Story = {
  name: 'Dropdown Example',
  args: {
    menuItems: ['카테고리1', '카테고리2', '카테고리3', '카테고리4'],
    title: '카테고리 선택',
    variant: 'border',
  },
  render: () => (
    <DropdownStoryComponent
      menuItems={['카테고리1', '카테고리2', '카테고리3', '카테고리4']}
      title="카테고리 선택"
      variant="border"
    />
  ),
}

export const DropdownBorderType: Story = {
  name: 'Dropdown Border Type',
  args: {
    menuItems: ['카테고리1', '카테고리2', '카테고리3', '카테고리4'],
    title: '카테고리 선택',
    variant: 'border',
  },
}

export const DropdownBorderNoneType: Story = {
  name: 'Dropdown Border None Type',
  args: {
    menuItems: ['카테고리1', '카테고리2', '카테고리3', '카테고리4'],
    title: '카테고리1',
    variant: 'none',
  },
}

export default meta
