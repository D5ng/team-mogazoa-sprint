import { Meta, StoryObj } from '@storybook/react'
import { delay, http, HttpResponse, PathParams } from 'msw'
import { useToggle } from '@shared/hooks'
import ProductCreateModal from './ProductCreateModal'
import { ProductPayload } from '@shared/types'

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
            await delay(1500)
            return HttpResponse.json({ url: '성공적인 url 반환' })
          },
        ),
        http.post<PathParams, ProductPayload>(
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
