import Image from 'next/image'
import { toast } from 'react-toastify'
import { thumb, emptyThumb, review } from '@shared/icons'
import { useReviewCancelLike, useReviewLike } from '@shared/hooks'
import { useReviewOptionStore, useUserStore } from '@shared/store'
import type { ProductReviewItem } from '@shared/types'

export default function ThumbsButton({
  id: reviewId,
  isLiked,
  likeCount,
  productId,
}: ProductReviewItem) {
  const { user } = useUserStore()
  const option = useReviewOptionStore((state) => state.option)
  const { mutateAsync: likeMutate } = useReviewLike({
    productId,
    order: option,
  })

  const { mutateAsync: cancelLikeMutate } = useReviewCancelLike({
    productId,
    order: option,
  })

  const isLikedClassName = isLiked ? 'text-indigo' : 'text-black-20'

  const handleLikeClick = async () => {
    if (!user) return toast.error('로그인이 필요합니다')
    isLiked
      ? await cancelLikeMutate({ reviewId })
      : await likeMutate({ reviewId })
  }

  return (
    <button
      className="ml-auto bg-black-60 border border-black-70 rounded-full px-3 py-1.5 flex justify-center items-center gap-x-[5px]"
      onClick={handleLikeClick}
    >
      <Image
        src={isLiked ? thumb : emptyThumb}
        alt="좋아요"
        width="18"
        height="18"
        className="tablet:w-3 tablet:h-3"
      />
      <span className={`${isLikedClassName} text-base tablet:text-xs`}>
        {likeCount}
      </span>
    </button>
  )
}
