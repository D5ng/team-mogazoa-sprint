import { useToggle } from '@shared/hooks'
import { Button } from '@shared/ui'
import { ReviewCreateModal } from '@widgets/product-review-modal/components'

interface ReviewButtonProps {
  productId: number
}

export default function ReviewButton({ productId }: ReviewButtonProps) {
  const { isToggle, onCloseToggle, onOpenToggle } = useToggle()
  return (
    <>
      <Button
        variant="primary"
        className="w-[345px] h-[65px] tablet:w-[33.065vw] tablet:h-[55px] mobile:w-full"
        onClick={onOpenToggle}
      >
        리뷰 작성하기
      </Button>
      {isToggle && (
        <ReviewCreateModal
          onCloseToggle={onCloseToggle}
          productId={productId}
        />
      )}
    </>
  )
}
