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
    <main className="w-[940px] m-auto mt-[160px] px-[30px] tablet:w-full tablet:mt-[140px] mobile:px-[20px] mobile:mt-[130px]">
      <ProductInfo productId={id} loggedInUserId={loggedInUserId} />
      <StatisticsList productId={id} />
      <ReviewWrapper productId={id} />
    </main>
  )
}
