import Image from 'next/image'
import type { ReviewImages } from '@shared/types'

interface ReviewImagesProps {
  reviewImages: ReviewImages[]
}

export default function ReviewImages({ reviewImages }: ReviewImagesProps) {
  return (
    <ul className="flex gap-x-5">
      {reviewImages.map((reviewImage) => (
        <li
          className="relative w-[100px] h-[100px] rounded-lg overflow-hidden tablet:w-[80px] tablet:h-[80px]"
          key={reviewImage.id}
        >
          <Image
            src={reviewImage.source}
            alt="이미지 썸네일"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 37.634vw, 355px"
          />
        </li>
      ))}
    </ul>
  )
}
