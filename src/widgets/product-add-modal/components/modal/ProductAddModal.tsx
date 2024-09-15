import { Modal, ModalTitle } from '@shared/ui'
import ProductAddForm from '../form/ProductAddForm'

export interface ProductAddModalProps {
  onCloseToggle: () => void
}

export default function ProductAddModal({
  onCloseToggle,
}: ProductAddModalProps) {
  return (
    <Modal onCloseModal={onCloseToggle}>
      <ModalTitle>상품 추가</ModalTitle>
      <ProductAddForm onCloseToggle={onCloseToggle} />
    </Modal>
  )
}