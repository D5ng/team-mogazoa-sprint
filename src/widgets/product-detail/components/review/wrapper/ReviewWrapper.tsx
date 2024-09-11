import { LatestDropdown, ReviewList } from '@features/product-detail/components'
import { ProductDetailLayout } from '@features/product-detail/layout'
import { REVIEW_MOCK } from '@features/product-detail/constants'

export default function ReviewWrapper() {
  return (
    <ProductDetailLayout title="상품 리뷰" renderDropdown={<LatestDropdown />}>
      <ReviewList reviews={REVIEW_MOCK} />
    </ProductDetailLayout>
  )
}
