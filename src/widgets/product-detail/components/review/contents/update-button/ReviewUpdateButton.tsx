import { ProductReviewItem } from '@shared/types'
import { useToggle } from '@shared/hooks'
import { ReviewUpdateModal } from '@widgets/product-review-modal/components'

export default function ReviewUpdateButton(props: ProductReviewItem) {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()
  const handleModalOpen = () => onOpenToggle()
  return (
    <>
      <button className="underline" onClick={handleModalOpen}>
        수정
      </button>
      {isToggle && (
        <ReviewUpdateModal {...props} onCloseToggle={onCloseToggle} />
      )}
    </>
  )
}
