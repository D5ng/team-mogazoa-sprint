import type { ProductDetailResponse } from '@shared/types'
import {
  ProductInfo,
  ReviewWrapper,
  StatisticsList,
} from '@widgets/product/product-detail/components'

interface ProductDetailProps extends ProductDetailResponse {
  createdProductUserId: number
}

export default function ProductDetailPage({
  id,
  createdProductUserId,
}: ProductDetailProps) {
  return (
    <main className="w-[940px] m-auto mt-[60px] tablet:w-full px-[30px] mobile:px-[20px]">
      <ProductInfo productId={id} createdProductUserId={createdProductUserId} />
      <StatisticsList productId={id} />
      <ReviewWrapper productId={id} />
    </main>
  )
}
