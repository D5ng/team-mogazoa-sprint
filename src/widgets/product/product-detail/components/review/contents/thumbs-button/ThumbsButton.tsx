import Image from 'next/image'
import { thumb, emptyThumb } from '@shared/icons'
import { useReviewCancelLike, useReviewLike } from '@shared/hooks'
import { useReviewOptionStore } from '@shared/store'
import { toastCheckAuth } from '@shared/utils'
import type { ProductReviewItem } from '@shared/types'

export default function ThumbsButton({
  id: reviewId,
  isLiked,
  likeCount,
  productId,
}: ProductReviewItem) {
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
    toastCheckAuth() &&
      (isLiked
        ? await cancelLikeMutate({ reviewId })
        : await likeMutate({ reviewId }))
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
