import { StatisticsListItem } from '@features/product-detail/components'
import { STATISTICS_CARD, MOCK } from '@features/product-detail/constants'
import { ProductDetailLayout } from '@features/product-detail/layout'

export default function StatisticsList() {
  return (
    <ProductDetailLayout title="상품 통계">
      <ul className="flex gap-x-5 mobile:flex-col mobile:gap-x-0 mobile:gap-y-[15px] mobile:relative">
        {STATISTICS_CARD.map((card) => {
          const { name, ...data } = card
          return (
            <StatisticsListItem
              key={card.name}
              {...data}
              score={MOCK[name]}
              scoreMetric={MOCK.categoryMetric[name]}
            />
          )
        })}
      </ul>
    </ProductDetailLayout>
  )
}
