import Image from 'next/image'
import Link from 'next/link'
import { defaultProduct, star } from '@shared/icons'
import type { ProductListItem } from '@shared/types'
import { useImageFallback } from '@/src/shared/hooks/useImageFallback'

export default function ProductCardItem({
  id,
  image,
  name,
  reviewCount,
  favoriteCount,
  rating,
}: ProductListItem) {
  const { imageSrc, onError } = useImageFallback(image)

  return (
    <li className=" bg-black-60 p-[0.4vw] tablet:p-[10px] rounded-lg border border-black-70 cursor-pointer hover:bg-black-50">
      <article className="flex flex-col gap-[25px] tablet:gap-[20px] mobile:gap-[20px]">
        <Link href={`/product/${id}`}>
          <div className="relative w-full h-[10.4vw] tablet:h-[21.5vw] mobile:h-[26.1vw] flex overflow-hidden rounded-lg">
            <Image
              fill
              src={imageSrc}
              alt="상품이미지"
              priority
              sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-[0.52vw] tablet:gap-[1.3vw] w-full p-[0.625vw] tablet:p-[10px] mobile:p-0 mobile: ">
            <span className="text-[0.9375vw] tablet:text-[16px] mobile:text-[14px] text-white whitespace-nowrap overflow-hidden text-ellipsis">
              {name}
            </span>
            <div className="flex mobile:flex-col items-center mobile:items-start justify-between">
              <div className="flex gap-[0.781vw] text-[0.833vw] tablet:text-[16px] mobile:text-[14px] text-black-30">
                <p>리뷰 {reviewCount}</p>
                <p>찜 {favoriteCount}</p>
              </div>
              <div className="flex items-center gap-[0.156vw] ">
                <Image src={star} width={16} height={16} alt="별점" priority />
                <p className="text-[0.833vw] tablet:text-[14px] mobile:text-[12px] tablet: mobile: text-black-20">
                  {rating.toFixed(1)}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </article>
    </li>
  )
}
