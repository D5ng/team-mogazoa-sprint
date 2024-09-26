import { Meta, StoryObj } from '@storybook/react'
import { uploadHandler, productCreateHandler } from '@shared/mocks'
import { useToggle } from '@shared/hooks'
import ProductCreateModal from './ProductCreateModal'

function ProductCreateModalWrapper() {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()
  return <ProductCreateModal onCloseToggle={onCloseToggle} />
}

const meta: Meta<typeof ProductCreateModalWrapper> = {
  title: 'Components/Modal/ProductCreateModal',
  parameters: { msw: { handlers: [uploadHandler, productCreateHandler] } },
  component: ProductCreateModalWrapper,
}

type Story = StoryObj<typeof ProductCreateModalWrapper>

export const ProductCreateModalExample: Story = {
  name: 'ProductCreateModalExample',
  render: () => {
    const { onCloseToggle } = useToggle()
    return <ProductCreateModal onCloseToggle={onCloseToggle} />
  },
}

export default meta
