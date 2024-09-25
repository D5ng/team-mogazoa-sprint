import { Meta, StoryObj } from '@storybook/react'
import { http, HttpResponse } from 'msw'
import { useToggle } from '@shared/hooks'
import ProductCreateModal from './ProductCreateModal'

function ProductCreateModalWrapper() {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()
  return <ProductCreateModal onCloseToggle={onCloseToggle} />
}

const meta: Meta<typeof ProductCreateModalWrapper> = {
  title: 'Components/Modal/ProductCreateModal',
  parameters: {
    msw: {
      handlers: [
        http.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/images/upload`,
          async () => {
            await new Promise((resolve) => setTimeout(() => resolve(1), 1000))
            return HttpResponse.json({ url: '성공적인 url 반환' })
          },
        ),
        http.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
          async (data) => {
            await new Promise((resolve) => setTimeout(() => resolve(1), 1000))
            return HttpResponse.json({
              categoryId: 1,
              image: 'https://example.com/...',
              description: '상품 설명, 최소 10자 이상, 최대 500자 이하',
              name: '상품 이름',
            })
          },
        ),
      ],
    },
  },
  component: ProductCreateModalWrapper,
}

type Story = StoryObj<typeof ProductCreateModalWrapper>

export const ProductAddModalExample: Story = {
  name: 'ProductCreateModalExample',
  render: () => {
    const { onCloseToggle } = useToggle()
    return <ProductCreateModal onCloseToggle={onCloseToggle} />
  },
}

export default meta
