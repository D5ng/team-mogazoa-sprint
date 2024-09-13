import { Modal, ModalTitle } from '@/src/shared/ui'
import CategoryChip from '@widgets/product/category-chip/CategoryChip'
import ProductReviewForm from '../form/ReviewCreateForm'

export interface ReviewCreateModalProps {
  onCloseToggle: () => void
  productId: number
}

export default function ReviewCreateModal({
  onCloseToggle,
  productId,
}: ReviewCreateModalProps) {
  return (
    <Modal onCloseModal={onCloseToggle}>
      <ModalTitle>리뷰 작성하기</ModalTitle>
      <div className="flex mt-2.5 gap-x-2.5">
        <h2 className="text-2xl font-semibold tablet:text-xl">
          MacBook Air 13 M2 칩
        </h2>
        <CategoryChip name="전자기기" />
      </div>
      <ProductReviewForm productId={productId} onCloseToggle={onCloseToggle} />
    </Modal>
  )
}
