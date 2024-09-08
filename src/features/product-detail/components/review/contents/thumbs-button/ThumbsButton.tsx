import Image from 'next/image'
import { ReviewItem } from '@/src/app/types'
import { thumb, emptyThumb } from '@app/icons'

export default function ThumbsButton({
  isLiked,
  likeCount,
}: Pick<ReviewItem, 'isLiked' | 'likeCount'>) {
  const isLikedClassName = isLiked ? 'text-indigo' : 'text-black-20'
  return (
    <button className="ml-auto bg-black-60 border border-black-70 rounded-full px-3 py-1.5 flex justify-center items-center gap-x-[5px]">
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
