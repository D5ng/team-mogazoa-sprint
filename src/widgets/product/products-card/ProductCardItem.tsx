import Image from 'next/image'
import { ProductCardProps } from './ProductCard.types'
import { star } from '@shared/icons'
import Link from 'next/link'

export default function ProductCardItem({ data }: ProductCardProps) {
  return (
    <article className=" inline-block m-[10px] tablet:m-[8px] gap-[10px] bg-black-60 p-[1vw] tablet:p-[1vw] mobile:p-[2vw] rounded-lg border border-black-70 cursor-pointer hover:bg-black-50">
      <Link href={`/product/${data.id}`}>
        <div className=" relative w-[13.3vw] h-[200px] tablet:w-[28vw] tablet:h-[200px] mobile:w-[36vw] mobile:h-[15vh] flex overflow-hidden rounded-lg">
          <Image fill src={data.image} alt="상품이미지" />
        </div>
        <div className="mt-[20px] flex flex-col">
          <span className="text-[1.1vw]  tablet:text-[16px]  mobile:text-[3vw] text-white">
            {data.name}
          </span>
          <div className="flex items-center mobile:inline justify-between">
            <div className=" flex gap-[10px] mobile:gap-[7px] text-[1vw] text-black-30 tablet:text-[12px]  mobile:text-[2vw]">
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
