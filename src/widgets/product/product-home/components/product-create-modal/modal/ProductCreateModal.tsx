import { CategoryId, Modal, ModalTitle } from '@shared/ui'
import ProductCreateForm from '../form/ProductCreateForm'

export interface ProductAddModalProps {
  onCloseToggle: () => void
  categoryId?: CategoryId
}

export default function ProductCreateModal({
  onCloseToggle,
  categoryId,
}: ProductAddModalProps) {
  return (
    <Modal onCloseModal={onCloseToggle}>
      <ModalTitle>상품 추가</ModalTitle>
      <ProductCreateForm
        onCloseToggle={onCloseToggle}
        categoryId={categoryId}
      />
    </Modal>
  )
}
