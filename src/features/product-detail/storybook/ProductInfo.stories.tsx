import { Meta, StoryObj } from '@storybook/react'
import { ProductInfoWrapper } from '@features/product-detail/components'
import { STATISTICS_MOCK } from '@features/product-detail/constants'

type Story = StoryObj<typeof ProductInfoWrapper>

const meta: Meta<typeof ProductInfoWrapper> = {
  component: (args) => <ProductInfoWrapper {...args} />,
}

export const StatisticsComponent: Story = {
  name: 'ProductInfo',
  args: STATISTICS_MOCK,
}

export default meta
