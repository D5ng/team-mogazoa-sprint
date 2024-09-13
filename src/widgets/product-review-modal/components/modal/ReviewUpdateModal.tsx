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
      <ReviewUpdateForm {...props} onCloseToggle={onCloseToggle} />
    </Modal>
  )
}
