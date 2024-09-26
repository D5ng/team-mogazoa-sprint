import dayjs from 'dayjs'
import { ProductReviewItem } from '@shared/types'
import ThumbsButton from './thumbs-button/ThumbsButton'
import ReviewImages from './review-images/ReviewImages'
import useAuthStore from '@app/provider/authStore'
import ReviewDeleteButton from './delete-button/ReviewDeleteButton'
import ReviewUpdateButton from './update-button/ReviewUpdateButton'

export default function ReviewContents(props: ProductReviewItem) {
  const user = useAuthStore().user
  return (
    <div className="relative w-[calc(100%-150px-80px)] flex flex-col gap-y-5 text-base tablet:text-sm mobile:text-xs mobile:w-full">
      <p>{props.content}</p>
      {!!props.reviewImages.length && (
        <ReviewImages reviewImages={props.reviewImages} />
      )}
      <div className="flex items-end gap-x-5 mobile:gap-x-3">
        <span className="text-black-30">
          {dayjs(props.updatedAt).format('YYYY-MM-DD')}
        </span>
        {props.userId === user?.id && (
          <div className="flex gap-x-2 text-black-20">
            <ReviewUpdateButton {...props} />
            <ReviewDeleteButton
              reviewId={props.id}
              productId={props.productId}
            />
          </div>
        )}
        <ThumbsButton {...props} />
      </div>
    </div>
  )
}
