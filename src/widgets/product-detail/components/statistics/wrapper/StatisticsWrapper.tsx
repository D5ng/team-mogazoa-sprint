import type { ProductDetailResponse } from '@shared/types'
import { StatisticsList } from '@widgets/product-detail/components'
import { ProductDetailLayout } from '@widgets/product-detail/layout'

export default function StatisticsWrapper(
  statisticsData: ProductDetailResponse,
) {
  return (
    <ProductDetailLayout title="상품 통계">
      <StatisticsList {...statisticsData} />
    </ProductDetailLayout>
  )
}
