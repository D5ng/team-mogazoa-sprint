import { Modal, ModalTitle } from '@shared/ui'
import ProductCreateForm from '../form/ProductCreateForm'

export interface ProductAddModalProps {
  onCloseToggle: () => void
}

export default function ProductCreateModal({
  onCloseToggle,
}: ProductAddModalProps) {
  return (
    <Modal onCloseModal={onCloseToggle}>
      <ModalTitle>상품 추가</ModalTitle>
      <ProductCreateForm onCloseToggle={onCloseToggle} />
    </Modal>
  )
}
