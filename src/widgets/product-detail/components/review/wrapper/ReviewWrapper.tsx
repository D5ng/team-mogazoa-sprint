import { Suspense } from 'react'
import { LatestDropdown, ReviewList } from '@widgets/product-detail/components'
import { ProductDetailLayout } from '@widgets/product-detail/layout'

interface ReviewWrapperProps {
  productId: number
}

function Fallback() {
  return <h1 className="text-[100px]">Hello World</h1>
}

export default function ReviewWrapper({ productId }: ReviewWrapperProps) {
  return (
    <ProductDetailLayout title="상품 리뷰" renderDropdown={<LatestDropdown />}>
      <Suspense fallback={<Fallback />}>
        <ReviewList productId={productId} />
      </Suspense>
    </ProductDetailLayout>
  )
}
