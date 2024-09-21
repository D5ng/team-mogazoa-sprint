import type { ProductDetailResponse } from '@shared/types'
import {
  ProductInfo,
  ReviewWrapper,
  StatisticsList,
} from '@widgets/product/product-detail/components'

interface ProductDetailProps extends ProductDetailResponse {
  loggedInUserId: number | null
}

export default function ProductDetailPage({
  id,
  loggedInUserId,
}: ProductDetailProps) {
  return (
    <main className="w-[940px] m-auto mt-[60px] tablet:w-full px-[30px] mobile:px-[20px]">
      <ProductInfo productId={id} loggedInUserId={loggedInUserId} />
      <StatisticsList productId={id} />
      <ReviewWrapper productId={id} />
    </main>
  )
}
