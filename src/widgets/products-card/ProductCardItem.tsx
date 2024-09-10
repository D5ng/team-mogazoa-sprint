import Image from 'next/image'
import { ProductCardProps } from './ProductCard.types'
import { star } from '@app/icons'
import Link from 'next/link'

export default function ProductCardItem({ data }: ProductCardProps) {
  return (
    <article className="flex shrink-0 m-[10px] tablet:m-[8px] gap-[10px] bg-black-60 p-[20px] tablet:p-[1vw] mobile:p-[2vw] rounded-lg border border-black-70 cursor-pointer hover:bg-black-50">
      <Link href={`/product/${data.id}`}>
        <div>
          <Image width={264} height={180} src={data.image} alt="상품이미지" />
        </div>
        <div className="mt-[20px] flex flex-col">
          <span className="text-[1.1vw]  tablet:text-[16px]  mobile:text-[3vw] text-white">
            {data.name}
          </span>
          <div className="flex items-center mobile:inline justify-between">
            <div className=" flex gap-[10px] mobile:gap-[7px] text-[1vw] text-black-30 tablet:text-[12px]  mobile:text-[2.5vw]">
              <p>리뷰 {data.reviewCount}</p>
              <p>찜 {data.favoriteCount}</p>
            </div>
            <div className="flex items-center gap-[3px]">
              <Image src={star} width={13} height={13} alt="별점" />
              <p className="text-[1vw] text-black-20 tablet:text-[12px]  mobile:text-[2vw]">
                {data.rating}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
