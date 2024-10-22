import { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
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
  render: ({ variant, children, isLoading, disabled }) => (
    <Button
      variant={variant}
      className="w-[250px]"
      isLoading={isLoading}
      disabled={disabled}
    >
      {children || '텍스트 입력'}
    </Button>
  ),
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

export const ButtonHover: Story = {
  name: 'Buttons Hover',
  render: () => (
    <>
      <div className="flex gap-x-2.5">
        <Button variant="primary" className="w-[250px] gradient-hover">
          회원가입
        </Button>
        <Button
          variant="secondary"
          className="w-[250px] border-indigo-hover text-graidnet-hover"
        >
          회원가입
        </Button>
        <Button
          variant="tertiary"
          className="w-[250px] border-black-hover text-black-hover"
        >
          회원가입
        </Button>
      </div>
    </>
  ),
}

export const ButtonPress: Story = {
  name: 'Buttons Press',
  render: () => (
    <>
      <div className="flex gap-x-2.5">
        <Button variant="primary" className="w-[250px] gradient-active">
          회원가입
        </Button>
        <Button
          variant="secondary"
          className="w-[250px] border-indigo-active text-graidnet-active"
        >
          회원가입
        </Button>
        <Button
          variant="tertiary"
          className="w-[250px] border-black-active text-black-active"
        >
          회원가입
        </Button>
      </div>
    </>
  ),
}
