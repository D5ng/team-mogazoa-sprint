import Image from 'next/image'
import { useFetchProductDetail } from '@shared/hooks'
import ProductComparisonMessage from '../calculate/ProductComparisonMessage'

interface StatisticsListItemProps {
  productId: number
  title: string
  icon: string
  name: 'rating' | 'favoriteCount' | 'reviewCount'
}

export default function StatisticsListItem({
  productId,
  title,
  icon,
  name,
}: StatisticsListItemProps) {
  const detailQuery = useFetchProductDetail(productId)
  const data = detailQuery.data!

  return (
    <li className="w-[300px] h-[190px] flex flex-col justify-center items-center gap-y-5 bg-black-60 border border-black-70 rounded-xl tablet:w-full tablet:h-auto tablet:px-11 tablet:py-[30px] tablet:gap-x-[15px] tablet:gap-y-[15px] mobile:p-5 mobile:justify-start mobile:items-start">
      <div className="flex flex-col gap-y-5 items-center tablet:gap-y-[15px] mobile:flex-row mobile:gap-x-[10px]">
        <h3 className="text-lg font-medium text-white tablet:text-base mobile:text-sm">
          {title}
        </h3>
        <div className="flex items-center gap-x-[5px]">
          <Image
            src={icon}
            alt=""
            width={24}
            height={24}
            className="tablet:w-5 tablet:h-5"
          />
          <span className="text-2xl font-light text-black-20 tablet:text-xl mobile:text-base">
            {data[name]}
          </span>
        </div>
      </div>
      <ProductComparisonMessage
        title={title}
        score={data[name]}
        scoreMetric={data.categoryMetric[name]}
      />
    </li>
  )
}
