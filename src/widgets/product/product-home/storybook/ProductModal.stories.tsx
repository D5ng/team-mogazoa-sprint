import { Meta, StoryObj } from '@storybook/react'
import { ProductAddModal } from '../components'
import { useToggle } from '@/src/shared/hooks'
import { http, HttpResponse } from 'msw'
import {
  fireEvent,
  waitFor,
  within,
  waitForElementToBeRemoved,
  getByLabelText,
} from '@storybook/test'
function ProductAddModalWrapper() {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()
  return <ProductAddModal onCloseToggle={onCloseToggle} />
}

const meta: Meta<typeof ProductAddModalWrapper> = {
  title: 'UI/Modal',
  parameters: {
    msw: {
      handlers: [
        http.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
          async (data) => {
            await new Promise((resolve) => setTimeout(() => resolve(1), 3000))
            return HttpResponse.json('Created Products')
          },
        ),
        http.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/images/upload`,
          async () => {
            await new Promise((resolve) => setTimeout(() => resolve(1), 3000))
            return HttpResponse.json('Image Upload')
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
