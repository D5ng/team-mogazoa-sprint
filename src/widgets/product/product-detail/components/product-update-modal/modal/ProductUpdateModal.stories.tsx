import { Meta, StoryObj } from '@storybook/react'
import { delay, http, HttpResponse } from 'msw'
import { useFetchProductDetail, useToggle } from '@shared/hooks'
import ProductUpdateModal from './ProductUpdateModal'

function ProductUpdateModalWrapper() {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()
  return <ProductUpdateModal productId={1} onCloseToggle={onCloseToggle} />
}

const meta: Meta<typeof ProductUpdateModalWrapper> = {
  title: 'Components/Modal/ProductUpdateModal',
  parameters: {
    msw: {
      handlers: [
        http.get(
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
        ),
      ],
    },
  },
  component: ProductUpdateModalWrapper,
}

type Story = StoryObj<typeof ProductUpdateModalWrapper>

export const ProductUpdateModalExample: Story = {
  name: 'ProductUpdateModalExample',
  render: () => {
    const query = useFetchProductDetail(1)
    const { onCloseToggle } = useToggle()
    if (query.isLoading) return <div>로딩중...</div>
    return <ProductUpdateModal productId={1} onCloseToggle={onCloseToggle} />
  },
}

export default meta
