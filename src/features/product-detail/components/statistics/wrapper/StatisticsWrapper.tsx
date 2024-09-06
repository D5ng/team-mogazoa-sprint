import { StatisticsList } from '@features/product-detail/components'
import { ProductDetailLayout } from '@features/product-detail/layout'
import type { ProductDetailResponse } from '@features/product-detail/types'

export default function StatisticsWrapper(
  statisticsData: ProductDetailResponse,
) {
  return (
    <ProductDetailLayout title="상품 통계">
      <StatisticsList {...statisticsData} />
    </ProductDetailLayout>
  )
}
