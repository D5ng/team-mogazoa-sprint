import { Meta, StoryObj } from '@storybook/react'
import { StatisticsWrapper } from '@widgets/product-detail/components'
import { STATISTICS_MOCK } from '@widgets/product-detail/constants'

type Story = StoryObj<typeof StatisticsWrapper>

const meta: Meta<typeof StatisticsWrapper> = {
  component: (args) => <StatisticsWrapper {...args} />,
}

export const StatisticsComponent: Story = {
  name: 'Statistics',
  args: STATISTICS_MOCK,
}

export default meta
