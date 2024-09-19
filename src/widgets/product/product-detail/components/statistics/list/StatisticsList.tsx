import { StatisticsListItem } from '@widgets/product/product-detail/components'
import { ProductDetailLayout } from '@widgets/product/product-detail/layout'
import { STATISTICS_CARD } from '@widgets/product/product-detail/constants'

interface StatisticsListProps {
  productId: number
}

export default function StatisticsList({ productId }: StatisticsListProps) {
  return (
    <ProductDetailLayout
      title="상품 통계"
      className="mt-[80px] tablet:mt-[60px] mobile:mt-[60px]"
    >
      <ul className="flex gap-x-5 mobile:flex-col mobile:gap-x-0 mobile:gap-y-[15px] mobile:relative">
        {STATISTICS_CARD.map((card) => {
          const { name, ...data } = card
          return (
            <StatisticsListItem
              key={card.name}
              name={name}
              productId={productId}
              {...data}
            />
          )
        })}
      </ul>
    </ProductDetailLayout>
  )
}
