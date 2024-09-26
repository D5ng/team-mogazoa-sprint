import { Meta, StoryObj } from '@storybook/react'
import { useToggle } from '@shared/hooks'
import ReviewCreateModal from './ReviewCreateModal'
import { reviewCreateHandler, uploadHandler } from '@shared/mocks'

function ReviewCreateModalWrapper() {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()
  return (
    <ReviewCreateModal
      productId={1}
      categoryName="음악"
      productName="에어팟 프로"
      onCloseToggle={onCloseToggle}
    />
  )
}

const meta: Meta<typeof ReviewCreateModalWrapper> = {
  title: 'Components/Modal/ReviewCreateModal',
  parameters: { msw: { handlers: [uploadHandler, reviewCreateHandler] } },
  component: ReviewCreateModalWrapper,
}

type Story = StoryObj<typeof ReviewCreateModalWrapper>

export const ReviewCreateModalExample: Story = {
  name: 'ReviewCreateModalExample',
  render: () => {
    const { onCloseToggle } = useToggle()
    return (
      <ReviewCreateModal
        productId={1}
        categoryName="음악"
        productName="에어팟 프로"
        onCloseToggle={onCloseToggle}
      />
    )
  },
}

export default meta
