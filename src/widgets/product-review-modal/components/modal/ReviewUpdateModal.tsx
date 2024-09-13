import { ProductReviewItem } from '@shared/types'
import { Modal, ModalTitle } from '@shared/ui'
import CategoryChip from '@widgets/product/category-chip/CategoryChip'
import ReviewUpdateForm from '../form/ReviewUpdateForm'

export interface ReviewUpdateModalProps extends ProductReviewItem {
  onCloseToggle: () => void
  productId: number
}

export default function ReviewUpdateModal({
  onCloseToggle,
  ...props
}: ReviewUpdateModalProps) {
  return (
    <Modal onCloseModal={onCloseToggle}>
      <ModalTitle>리뷰 수정하기</ModalTitle>
      <div className="flex mt-2.5 gap-x-2.5">
        <h2 className="text-2xl font-semibold tablet:text-xl">
          MacBook Air 13 M2 칩
        </h2>
        <CategoryChip name="전자기기" />
      </div>
      <ReviewUpdateForm {...props} onCloseToggle={onCloseToggle} />
    </Modal>
  )
}
