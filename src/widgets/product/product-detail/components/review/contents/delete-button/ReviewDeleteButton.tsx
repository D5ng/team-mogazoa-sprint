import { toast } from 'react-toastify'
import { useDeleteReview } from '@shared/hooks'

interface ReviewDeleteButtonProps {
  reviewId: number
  productId: number
}

export default function ReviewDeleteButton({
  reviewId,
  productId,
}: ReviewDeleteButtonProps) {
  const { mutateAsync: deleteMutate } = useDeleteReview({ productId })
  const handleDeleteReview = async () => {
    await deleteMutate({ reviewId })
    toast.success('리뷰가 삭제되었습니다')
  }

  return (
    <button className="underline" onClick={handleDeleteReview}>
      삭제
    </button>
  )
}
