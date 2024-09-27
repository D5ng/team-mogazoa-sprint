import { Meta, StoryObj } from '@storybook/react'
import { fetchProductHandler } from '@shared/mocks'
import { useFetchProductDetail, useToggle } from '@shared/hooks'
import ProductUpdateModal from './ProductUpdateModal'

function ProductUpdateModalWrapper() {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()
  return <ProductUpdateModal productId={1} onCloseToggle={onCloseToggle} />
}

const meta: Meta<typeof ProductUpdateModalWrapper> = {
  title: 'Components/Modal/ProductUpdateModal',
  parameters: { msw: { handlers: [fetchProductHandler] } },
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
