import { Modal, ModalTitle } from '@shared/ui'
import ProductUpdateForm from '../form/ProductUpdateForm'

export interface ProductAddModalProps {
  onCloseToggle: () => void
  productId: number
}

export default function ProductUpdateModal({
  onCloseToggle,
  productId,
}: ProductAddModalProps) {
  return (
    <Modal onCloseModal={onCloseToggle}>
      <ModalTitle>상품 편집</ModalTitle>
      <ProductUpdateForm onCloseToggle={onCloseToggle} productId={productId} />
    </Modal>
  )
}
