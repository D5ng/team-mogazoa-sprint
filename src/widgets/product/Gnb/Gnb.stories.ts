import { Meta, StoryObj } from '@storybook/react'
import Gnb from './Gnb'

type Story = StoryObj<typeof Gnb>

const meta: Meta<typeof Gnb> = {
  component: Gnb,
}

export const GnbStory: Story = {
  name: 'widgets/Gnb',
}

export default meta
