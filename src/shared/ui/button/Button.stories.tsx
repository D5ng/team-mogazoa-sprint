import { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
}
export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  name: 'Primary',
  args: {
    variant: 'primary',
    disabled: false,
    children: '회원가입',
    isLoading: false,
  },
}

export const Secondary: Story = {
  name: 'Secondary',
  args: {
    variant: 'secondary',
    disabled: false,
    children: '회원가입',
    isLoading: false,
  },
}

export const Tertiary: Story = {
  name: 'Tertiary',
  args: {
    variant: 'tertiary',
    disabled: false,
    children: '회원가입',
    isLoading: false,
  },
}
