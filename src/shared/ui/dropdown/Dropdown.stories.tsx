import { Meta, StoryObj } from '@storybook/react'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownMenuItem,
} from './Dropdown'
import type { DropdownVariantType } from './Dropdown.type'
import { CATEGORY_CHIPS } from '../category-chip'

const SORT_DROPDOWN_TYPE = ['최신순', '별점 높은순', '별점 낮은순', '좋아요순']

interface DropdownProps {
  title: string
  variant?: DropdownVariantType
}

function DropdownStoryComponent({ variant = 'border', title }: DropdownProps) {
  return (
    <Dropdown variant={variant}>
      <DropdownTrigger>{title}</DropdownTrigger>
      <DropdownMenu>
        {CATEGORY_CHIPS.map((menu) => (
          <DropdownMenuItem key={menu.id}>{menu.name}</DropdownMenuItem>
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
  },
  component: DropdownStoryComponent,
}

export const DropdownExample: Story = {
  name: 'Dropdown Example',
  args: {
    title: '카테고리 선택',
    variant: 'border',
  },
  render: ({ variant, title }) => (
    <Dropdown variant={variant}>
      <DropdownTrigger>{title}</DropdownTrigger>
      <DropdownMenu>
        {CATEGORY_CHIPS.map((menu) => (
          <DropdownMenuItem key={menu.id}>{menu.name}</DropdownMenuItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  ),
}

export const DropdownBorderType: Story = {
  name: 'Dropdown Border Type',
  args: {
    title: '카테고리 선택',
    variant: 'border',
  },
  render: ({ variant, title }) => (
    <Dropdown variant={variant}>
      <DropdownTrigger>{title}</DropdownTrigger>
      <DropdownMenu>
        {CATEGORY_CHIPS.map((menu) => (
          <DropdownMenuItem key={menu.id}>{menu.name}</DropdownMenuItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  ),
}

export const DropdownBorderNoneType: Story = {
  name: 'Dropdown Border None Type',
  args: {
    title: SORT_DROPDOWN_TYPE[0],
    variant: 'none',
  },
  render: ({ variant, title }) => (
    <Dropdown variant={variant}>
      <DropdownTrigger>{title}</DropdownTrigger>
      <DropdownMenu>
        {SORT_DROPDOWN_TYPE.map((menu) => (
          <DropdownMenuItem key={menu}>{menu}</DropdownMenuItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  ),
}

export default meta
