import { Meta, StoryObj } from '@storybook/react'
import {
  fetchReviewHandler,
  reviewUpdateHandler,
  uploadHandler,
} from '@shared/mocks'
import { useFetchProductReview, useToggle } from '@shared/hooks'
import ReviewUpdateModal from './ReviewUpdateModal'

function ReviewUpdateModalWrapper() {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()
  const { data, isLoading } = useFetchProductReview({
    productId: 1,
    order: 'recent',
  })
  if (isLoading) return null

  let products = data.find((product) => product.id === 1)!

  return <ReviewUpdateModal onCloseToggle={onCloseToggle} {...products} />
}

const meta: Meta<typeof ReviewUpdateModalWrapper> = {
  title: 'Components/Modal/ReviewUpdateModal',
  parameters: {
    msw: { handlers: [uploadHandler, fetchReviewHandler, reviewUpdateHandler] },
  },
  component: ReviewUpdateModalWrapper,
}

type Story = StoryObj<typeof ReviewUpdateModalWrapper>

export const ReviewCreateModalExample: Story = {
  name: 'ReviewUpdateModalExample',
}

export default meta
