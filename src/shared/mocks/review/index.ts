import { DefaultBodyType, delay, http, HttpResponse, PathParams } from 'msw'
import {
  CreateReviewPayload,
  ProductReviewsResponse,
  UpdateReview,
} from '@shared/types'

export const reviewCreateHandler = http.post<PathParams, CreateReviewPayload>(
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
)

export const fetchReviewHandler = http.get<
  PathParams,
  DefaultBodyType,
  ProductReviewsResponse
>(
  `${process.env.NEXT_PUBLIC_BASE_URL}/products/:productId/reviews`,
  async ({ params }) => {
    return HttpResponse.json({
      nextCursor: 0,
      list: [
        {
          user: {
            image: 'https://example.com/...',
            nickname: 'string',
            id: 1,
          },
          reviewImages: [
            {
              source:
                'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1591634795000',
              id: 1,
            },
          ],
          productId: 1,
          userId: 1,
          updatedAt: '2024-09-25T16:16:55.012Z',
          createdAt: '2024-09-25T16:16:55.012Z',
          isLiked: true,
          likeCount: 0,
          content:
            '에어팟 프로는 노이즈 캔슬링이 진짜 좋아서 음악에 완전 몰입할 수 있어요. 착용감도 편하고 음질도 깔끔해서 일상에서 쓰기 딱이에요! \n - ChatGPT의 친근한 말투',
          rating: 5,
          id: 1,
        },
      ],
    })
  },
)

export const reviewUpdateHandler = http.patch<PathParams, UpdateReview>(
  `${process.env.NEXT_PUBLIC_BASE_URL}/reviews/:reviewId`,
  async ({ request }) => {
    const data = await request.json()
    const existingImage = data.images.map((image, index) => ({
      id: index,
      source: image.url,
    }))

    const images = data.images.map((image, index) =>
      existingImage[index]?.source === image.url
        ? { id: existingImage[index].id }
        : { source: image.url },
    ) as []

    await delay(1500)
    return HttpResponse.json({
      reviewId: 1,
      content: data.content,
      rating: data.rating,
      images,
    })
  },
)
