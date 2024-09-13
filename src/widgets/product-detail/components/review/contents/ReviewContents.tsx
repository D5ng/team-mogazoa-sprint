import { ProductReviewItem } from '@shared/types'
import ThumbsButton from './thumbs-button/ThumbsButton'
import ReviewImages from './review-images/ReviewImages'
import useAuthStore from '@/src/shared/store/authStore'

export default function ReviewContents({
  content,
  updatedAt,
  isLiked,
  reviewImages,
  userId,
  likeCount,
}: Pick<
  ProductReviewItem,
  'content' | 'updatedAt' | 'isLiked' | 'reviewImages' | 'userId' | 'likeCount'
>) {
  const user = useAuthStore().user

  return (
    <div className="relative w-[calc(100%-150px-80px)] flex flex-col gap-y-5 text-base tablet:text-xs mobile:w-full">
      <p>{content}</p>
      {!!reviewImages.length && <ReviewImages reviewImages={reviewImages} />}
      <div className="flex items-end gap-x-5 mobile:gap-x-3">
        <span className="text-black-30">{updatedAt}</span>
        {userId === user?.id && (
          <div className="flex gap-x-2 text-black-20">
            <button className="underline">수정</button>
            <button className="underline">삭제</button>
          </div>
        )}
        <ThumbsButton isLiked={isLiked} likeCount={likeCount} />
      </div>
    </div>
  )
}
