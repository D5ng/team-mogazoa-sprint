import { http, HttpResponse, delay, PathParams } from 'msw'
import { Meta, StoryObj } from '@storybook/react'
import { useToggle } from '@shared/hooks'
import ReviewCreateModal from './ReviewCreateModal'
import { CreateReviewPayload, Upload } from '@shared/types'

export interface ReviewCreateParams {
  productId: number
}

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
  parameters: {
    msw: {
      handlers: [
        http.post<Upload>(
          `${process.env.NEXT_PUBLIC_BASE_URL}/images/upload`,
          async (data) => {
            await delay(1500)
            return HttpResponse.json({ url: '성공적인 url 반환' })
          },
        ),
        http.post<PathParams, CreateReviewPayload>(
          `${process.env.NEXT_PUBLIC_BASE_URL}/reviews`,
          async ({ request }) => {
            const data = await request.json()
            const images = data.images.map((image, index) => ({
              id: index,
              source: image,
            }))

            await delay(1500)
            return HttpResponse.json({
              user: {
                image: 'https://example.com/...',
                nickname: 'string',
                id: 1,
              },
              reviewImages: images,
              productId: 1,
              userId: 1,
              updatedAt: '2024-09-25T09:18:05.936Z',
              createdAt: '2024-09-25T09:18:05.936Z',
              isLiked: false,
              likeCount: 0,
              content: data.content,
              rating: data.rating,
              id: 1,
            })
          },
        ),
      ],
    },
  },
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
