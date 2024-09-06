import { Meta, StoryObj } from '@storybook/react'
import { StatisticsWrapper } from '@features/product-detail/components'
import { MOCK } from '@features/product-detail/constants'

type Story = StoryObj<typeof StatisticsWrapper>

const meta: Meta<typeof StatisticsWrapper> = {
  component: (args) => <StatisticsWrapper {...args} />,
}

export const StatisticsComponent: Story = {
  name: 'Statistics',
  args: MOCK,
}

export default meta
