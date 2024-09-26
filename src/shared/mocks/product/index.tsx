import { delay, http, HttpResponse, PathParams } from 'msw'
import { ProductPayload } from '@shared/types'

export const productCreateHandler = http.post<PathParams, ProductPayload>(
  `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
  async ({ request }) => {
    const data = await request.json()
    await delay(1500)
    return HttpResponse.json({
      categoryId: 1,
      image: data.image,
      description: data.description,
      name: data.name,
    })
  },
)

export const fetchProductHandler = http.get(
  `${process.env.NEXT_PUBLIC_BASE_URL}/products/:productId`,
  async ({ params }) => {
    return HttpResponse.json({
      id: 1,
      name: '에어팟 프로',
      description: '노이즈 캔슬링이 잘 되는 이어폰',
      image:
        'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1591634795000',
      rating: 4.5,
      reviewCount: 100,
      favoriteCount: 1000,
      categoryId: 1,
      createdAt: '2024-08-09T04:07:45.676Z',
      updatedAt: '2024-08-09T04:07:45.676Z',
      writerId: 1,
      isFavorite: false,
      category: {
        id: 1,
        name: '전자제품',
      },
      categoryMetric: {
        rating: 4.5,
        favoriteCount: 1000,
        reviewCount: 100,
      },
      isLoading: true,
    })
  },
)
