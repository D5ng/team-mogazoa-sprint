import Image from 'next/image'
import Link from 'next/link'
import { star } from '@shared/icons'
import { UserData } from '@/src/shared/types'

interface Prop {
  data: UserData
}

export default function MockCardItem({ data }: Prop) {
  return (
    <li className="bg-black-60 p-4 rounded-lg border border-black-70 cursor-pointer hover:bg-black-50 h-[400px] flex flex-col">
      <Link href={`/product/${data.id}`} className="flex flex-col h-full">
        <div className="relative w-full h-[300px] overflow-hidden rounded-lg tablet:h-[250px] mobile:h-[180px]">
          <Image
            src={data.image}
            alt="상품이미지"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="mt-4 flex flex-col flex-grow">
          <span className="text-lg text-white mb-2 line-clamp-2">
            {data.name}
          </span>
          <div className="mt-auto">
            <div className="flex items-center justify-between mb-2">
              <div className="flex gap-4 text-sm text-black-30">
                <p>리뷰 {data.reviewCount}</p>
                <p>찜 {data.favoriteCount}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Image src={star} width={16} height={16} alt="별점" />
              <p className="text-sm text-black-20">{data.rating}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
