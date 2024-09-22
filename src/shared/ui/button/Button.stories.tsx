import { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      description: '버튼 스타일 종류를 설정합니다.',
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
    },
    disabled: {
      description: '버튼 비활성화 여부를 설정합니다.',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    children: {
      description: '버튼에 들어갈 태그 또는 텍스트입니다.',
    },
    isLoading: {
      description: '폼 제출시 로딩 스피너를 보여주는 설정합니다.',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
  args: {
    style: { width: '400px' },
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const ButtonExample: Story = {
  name: 'Button Example',
  args: {
    variant: 'primary',
    disabled: false,
    children: '회원가입',
    isLoading: false,
  },
}

export const ButtonVariants: Story = {
  name: 'Buttons Variants',
  render: () => (
    <>
      <div className="flex gap-x-2.5">
        <Button variant="primary" className="w-[250px]">
          회원가입
        </Button>
        <Button variant="secondary" className="w-[250px]">
          회원가입
        </Button>
        <Button variant="tertiary" className="w-[250px]">
          회원가입
        </Button>
      </div>
    </>
  ),
}

export const ButtonDisabled: Story = {
  name: 'Buttons Disabled',
  render: () => (
    <>
      <div className="flex gap-x-2.5">
        <Button variant="primary" disabled className="w-[250px]">
          회원가입
        </Button>
        <Button variant="secondary" disabled className="w-[250px]">
          회원가입
        </Button>
        <Button variant="tertiary" disabled className="w-[250px]">
          회원가입
        </Button>
      </div>
    </>
  ),
}

export const ButtonLoading: Story = {
  name: 'Buttons Loading',
  render: () => (
    <>
      <div className="flex gap-x-2.5">
        <Button variant="primary" disabled isLoading className="w-[250px]">
          회원가입
        </Button>
        <Button variant="secondary" disabled isLoading className="w-[250px]">
          회원가입
        </Button>
        <Button variant="tertiary" disabled isLoading className="w-[250px]">
          회원가입
        </Button>
      </div>
    </>
  ),
}
