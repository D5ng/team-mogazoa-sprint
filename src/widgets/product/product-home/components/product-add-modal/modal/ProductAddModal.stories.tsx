import { Meta, StoryObj } from '@storybook/react'
import { http, HttpResponse } from 'msw'
import { useToggle } from '@shared/hooks'
import ProductAddModal from './ProductAddModal'

function ProductAddModalWrapper() {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()
  return <ProductAddModal onCloseToggle={onCloseToggle} />
}

const meta: Meta<typeof ProductAddModalWrapper> = {
  title: 'Components/Modal/ProductAddModal',
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
  component: ProductAddModalWrapper,
}

type Story = StoryObj<typeof ProductAddModalWrapper>

export const ProductAddModalExample: Story = {
  name: 'ProductAddModalExample',
  render: () => {
    const { onCloseToggle } = useToggle()
    return <ProductAddModal onCloseToggle={onCloseToggle} />
  },
}

export default meta
