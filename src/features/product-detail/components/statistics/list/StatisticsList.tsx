import { StatisticsListItem } from '@features/product-detail/components'
import { STATISTICS_CARD, MOCK } from '@features/product-detail/constants'
import { ProductDetailLayout } from '@features/product-detail/layout'

export default function StatisticsList() {
  return (
    <ProductDetailLayout title="상품 통계">
      <ul className="flex flex-col gap-x-5">
        {STATISTICS_CARD.map((card) => {
          const { name, ...data } = card
          return (
            <StatisticsListItem
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
