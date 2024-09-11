import type { ProductDetailResponse } from '@app/types'
import { StatisticsList } from '@features/product-detail/components'
import { ProductDetailLayout } from '@features/product-detail/layout'

export default function StatisticsWrapper(
  statisticsData: ProductDetailResponse,
) {
  return (
    <ProductDetailLayout title="상품 통계">
      <StatisticsList {...statisticsData} />
    </ProductDetailLayout>
  )
}
