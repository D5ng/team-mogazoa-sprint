import { Meta, StoryObj } from '@storybook/react'
import { fetchReviewsHandler } from '@shared/mocks'
import { ErrorFallback } from '@shared/ui'
import ReviewWrapper from './wrapper/ReviewWrapper'
import { ReviewSkeleton } from './skeleton/ReviewSkeleton'

const meta: Meta<typeof ReviewWrapper> = {
  title: 'Components/Review',
  parameters: {
    msw: { handlers: [fetchReviewsHandler] },
    layout: 'padded',
  },
  component: ReviewWrapper,
}

export default meta

type Story = StoryObj<typeof ReviewWrapper>

export const ReviewWrapperExample: Story = {
  name: 'Review',
  render: () => {
    return <ReviewWrapper productId={1} />
  },
}

export const ReviewSkeletonExample: Story = {
  name: 'ReviewSkeleton',
  render: () => {
    return <ReviewSkeleton />
  },
}

export const ReviewErrorExample: Story = {
  name: 'Review Error',
  parameters: { layout: 'centered', backgrounds: { default: 'dark' } },
  decorators: (Story) => <div className="text-white">{Story()}</div>,
  render: () => <ErrorFallback onRefetch={() => {}} />,
}
