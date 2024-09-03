import { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

type Story = StoryObj<typeof Button>

const meta: Meta<typeof Button> = {
  component: Button,
}

export const Primary: Story = {
  name: 'Button',
  args: {
    variant: 'primary',
    disabled: false,
    children: '회원가입',
  },
}

export default meta
