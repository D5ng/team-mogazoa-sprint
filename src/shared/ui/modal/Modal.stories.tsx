import { Meta, StoryObj } from '@storybook/react'
import { Modal, ModalTitle } from './Modal'
import { useToggle } from '../../hooks'
import Button from '../button/Button'
import { ProductCreateModal } from '@widgets/product/product-home/components'
import { ReviewCreateModal } from '@/src/widgets/product/product-detail/components'

function ModalWrapper() {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()
  return (
    <>
      <Button variant="primary" onClick={onOpenToggle} className="w-[400px]">
        모달 열기
      </Button>
      {isToggle && (
        <Modal onCloseModal={onCloseToggle}>
          <ModalTitle>모달의 타이틀을 설정해주세요.</ModalTitle>
        </Modal>
      )}
    </>
  )
}

const meta: Meta<typeof ModalWrapper> = {
  title: 'UI/Modal',
  component: ModalWrapper,
}
export default meta

type Story = StoryObj<typeof ModalWrapper>

export const ModalExample: Story = {
  name: 'Modal Example',
  render: () => {
    const { isToggle, onOpenToggle, onCloseToggle } = useToggle()
    return (
      <>
        <Button variant="primary" onClick={onOpenToggle} className="w-[400px]">
          모달 열기
        </Button>
        {isToggle && (
          <Modal onCloseModal={onCloseToggle}>
            <ModalTitle>모달의 타이틀을 설정해주세요.</ModalTitle>
          </Modal>
        )}
      </>
    )
  },
}

export const ProductCreateModalExample = {
  name: 'ProductModal',
  render: () => {
    const { isToggle, onOpenToggle, onCloseToggle } = useToggle()
    return (
      <>
        <Button variant="primary" onClick={onOpenToggle} className="w-[400px]">
          상품 추가 모달
        </Button>
        {isToggle && <ProductCreateModal onCloseToggle={onCloseToggle} />}
      </>
    )
  },
}

export const ReviewCreateModalExample = {
  name: 'ReviewModal',
  render: () => {
    const { isToggle, onOpenToggle, onCloseToggle } = useToggle()
    return (
      <>
        <Button variant="primary" onClick={onOpenToggle} className="w-[400px]">
          리뷰 추가 모달
        </Button>
        {isToggle && (
          <ReviewCreateModal
            productId={1}
            categoryName="음악"
            productName="에어팟 프로"
            onCloseToggle={onCloseToggle}
          />
        )}
      </>
    )
  },
}
