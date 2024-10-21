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
  onClick?: () => void
  dataArray: readonly any[]
}

function DropdownStoryComponent({
  variant = 'border',
  title,
  onClick,
}: DropdownProps) {
  return (
    <Dropdown variant={variant}>
      <DropdownTrigger>{title}</DropdownTrigger>
      <DropdownMenu>
        {CATEGORY_CHIPS.map((menu) => (
          <DropdownMenuItem key={menu.id} onClick={onClick}>
            {menu.name}
          </DropdownMenuItem>
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
    onClick: {
      description:
        'DropdownMenuItem에 클릭 이벤트를 사용해 내부의 상태를 참조할 수 있습니다.',
    },
    dataArray: {
      description: '렌더링 할 배열 데이터',
    },
  },
  component: DropdownStoryComponent,
}

export const DropdownExample: Story = {
  name: 'Dropdown Example',
  args: {
    title: '카테고리 선택',
    variant: 'border',
    dataArray: CATEGORY_CHIPS,
  },
  render: ({ variant, title, onClick, dataArray }) => (
    <Dropdown variant={variant}>
      <DropdownTrigger>{title}</DropdownTrigger>
      <DropdownMenu>
        {dataArray.map((menu) => (
          <DropdownMenuItem key={menu.id} onClick={onClick}>
            {menu.name}
          </DropdownMenuItem>
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
    dataArray: CATEGORY_CHIPS,
  },
  render: ({ variant, title, onClick, dataArray }) => (
    <Dropdown variant={variant}>
      <DropdownTrigger>{title}</DropdownTrigger>
      <DropdownMenu>
        {dataArray.map((menu) => (
          <DropdownMenuItem key={menu.id} onClick={onClick}>
            {menu.name}
          </DropdownMenuItem>
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
    dataArray: SORT_DROPDOWN_TYPE,
  },
  render: ({ variant, title, onClick, dataArray }) => (
    <Dropdown variant={variant}>
      <DropdownTrigger>{title}</DropdownTrigger>
      <DropdownMenu>
        {dataArray.map((menu) => (
          <DropdownMenuItem key={menu} onClick={onClick}>
            {menu}
          </DropdownMenuItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  ),
}

export default meta
