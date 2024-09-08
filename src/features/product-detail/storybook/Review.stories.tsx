import { Meta, StoryObj } from '@storybook/react'
import { ReviewWrapper } from '@features/product-detail/components'
import { REVIEW_MOCK } from '@features/product-detail/constants'

type Story = StoryObj<typeof ReviewWrapper>

const meta: Meta<typeof ReviewWrapper> = {
  component: (args) => <ReviewWrapper {...args} />,
}

export const ReviewComponent: Story = {
  name: 'Review',
  args: REVIEW_MOCK,
}

export default meta
