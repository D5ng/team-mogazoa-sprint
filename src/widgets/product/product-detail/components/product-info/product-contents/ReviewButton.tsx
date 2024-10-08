import { useToggle } from '@shared/hooks'
import { Button } from '@shared/ui'
import { ReviewCreateModal } from '@widgets/product/product-detail/components'
import { toastCheckAuth } from '@shared/utils'

interface ReviewButtonProps {
  productId: number
  categoryName: string
  productName: string
}

export default function ReviewButton({
  productId,
  categoryName,
  productName,
}: ReviewButtonProps) {
  const { isToggle, onCloseToggle, onOpenToggle } = useToggle()

  const handleOpenModal = () => toastCheckAuth() && onOpenToggle()

  return (
    <>
      <Button
        variant="primary"
        className="w-[345px] h-[65px] tablet:w-[33.065vw] tablet:h-[55px] mobile:w-full"
        onClick={handleOpenModal}
      >
        리뷰 작성하기
      </Button>
      {isToggle && (
        <ReviewCreateModal
          onCloseToggle={onCloseToggle}
          productId={productId}
          categoryName={categoryName}
          productName={productName}
        />
      )}
    </>
  )
}
