import { useDeleteReview } from '@shared/hooks'

interface ReviewDeleteButtonProps {
  reviewId: number
}

export default function ReviewDeleteButton({
  reviewId,
}: ReviewDeleteButtonProps) {
  const { mutateAsync: deleteMutate } = useDeleteReview()
  const handleDeleteReview = async () => await deleteMutate({ reviewId })

  return (
    <button className="underline" onClick={handleDeleteReview}>
      삭제
    </button>
  )
}
