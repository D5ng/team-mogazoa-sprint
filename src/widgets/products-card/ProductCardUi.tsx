import Image from 'next/image'
import { ProductCardItems } from './ProductCard.types'
import { star } from '@app/icons'

export default function ProductCardUi({ data }: ProductCardItems) {
  return (
    <div className=" inline-block gap-[10px] bg-black-60 p-[20px] tablet:p-[10px] mobile:p-[5px] rounded-lg border border-black-70 cursor-pointer hover:bg-black-50">
      <div className="w-[264px] h-[180px] tablet:w-[237px] tablet:h-[150px] mobile:w-[135px] mobile:h-[93px]">
        <Image width={264} height={180} src={data.image} alt="상품이미지" />
      </div>
      <div className="mt-[20px] flex flex-col">
        <span className="text-[18px]  tablet:text-[16px]  mobile:text-[14px] text-white">
          {data.name}
        </span>
        <div className="flex mobile:inline justify-between">
          <div className=" flex gap-[10px] mobile:gap-[7px] text-[16px] text-black-30 tablet:text-[14px]  mobile:text-[10px]">
            <p>리뷰 {data.reveiwCount}</p>
            <p>찜 {data.favoriteCount}</p>
          </div>
          <div className="flex items-center gap-[3px]">
            <Image src={star} width={13} height={13} alt="별점" />
            <p className="text-[16px] text-black-20 tablet:text-[14px]  mobile:text-[10px]">
              {data.rating}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
