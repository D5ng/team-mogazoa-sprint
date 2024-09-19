import { toast } from 'react-toastify'
import { ReviewCreateModal } from '@widgets/product-review-modal/components'
import { useToggle } from '@shared/hooks'
import { useUserStore } from '@shared/store'
import { Button } from '@shared/ui'

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
  const { user } = useUserStore()
  const { isToggle, onCloseToggle, onOpenToggle } = useToggle()

  const openModal = () =>
    user ? onOpenToggle() : toast.error('로그인이 필요합니다')
  return (
    <>
      <Button
        variant="primary"
        className="w-[345px] h-[65px] tablet:w-[33.065vw] tablet:h-[55px] mobile:w-full"
        onClick={openModal}
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
