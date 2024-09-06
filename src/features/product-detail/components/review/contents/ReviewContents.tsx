import { ReviewItem } from '@app/types'
import ThumbsButton from './thumbs-button/ThumbsButton'
import ReviewImages from './review-images/ReviewImages'

export default function ReviewContents({
  content,
  updatedAt,
  isLiked,
  reviewImages,
}: Pick<ReviewItem, 'content' | 'updatedAt' | 'isLiked' | 'reviewImages'>) {
  return (
    <div className="relative flex flex-col gap-y-5 text-base">
      <p>{content}</p>
      {!!reviewImages.length && <ReviewImages reviewImages={reviewImages} />}
      <div className="flex justify-between items-end">
        <span className="text-black-30">{updatedAt}</span>
        <ThumbsButton isLiked={isLiked} />
      </div>
    </div>
  )
}
