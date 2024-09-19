import { Modal, ModalTitle } from '@shared/ui'
import CategoryChip from '@/src/shared/ui/category-chip/CategoryChip'
import ProductReviewForm from '../form/ReviewCreateForm'

export interface ReviewCreateModalProps {
  onCloseToggle: () => void
  productId: number
  categoryName: string
  productName: string
}

export default function ReviewCreateModal({
  onCloseToggle,
  productId,
  categoryName,
  productName,
}: ReviewCreateModalProps) {
  return (
    <Modal onCloseModal={onCloseToggle}>
      <ModalTitle>리뷰 작성하기</ModalTitle>
      <div className="flex mt-2.5 gap-x-2.5">
        <h2 className="text-2xl font-semibold tablet:text-xl">{productName}</h2>
        <CategoryChip name={categoryName} />
      </div>
      <ProductReviewForm productId={productId} onCloseToggle={onCloseToggle} />
    </Modal>
  )
}
