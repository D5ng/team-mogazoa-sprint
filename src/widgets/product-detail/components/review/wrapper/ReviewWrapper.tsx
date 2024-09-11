import { LatestDropdown, ReviewList } from '@widgets/product-detail/components'
import { ProductDetailLayout } from '@widgets/product-detail/layout'
import { REVIEW_MOCK } from '@widgets/product-detail/constants'

export default function ReviewWrapper() {
  return (
    <ProductDetailLayout title="상품 리뷰" renderDropdown={<LatestDropdown />}>
      <ReviewList reviews={REVIEW_MOCK} />
    </ProductDetailLayout>
  )
}
