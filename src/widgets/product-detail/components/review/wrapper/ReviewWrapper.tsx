import { Suspense } from 'react'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorFallback, ErrorBoundary } from '@shared/ui'
import {
  LatestDropdown,
  ReviewList,
  ReviewSkeleton,
} from '@widgets/product-detail/components'
import { ProductDetailLayout } from '@widgets/product-detail/layout'

interface ReviewWrapperProps {
  productId: number
}

export default function ReviewWrapper({ productId }: ReviewWrapperProps) {
  return (
    <ProductDetailLayout
      className="mt-[80px] tablet:mt-[60px] mobile:mt-[60px]"
      title="상품 리뷰"
      renderDropdown={<LatestDropdown />}
    >
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onReset={reset} fallback={ErrorFallback}>
            <Suspense fallback={<ReviewSkeleton />}>
              <ReviewList productId={productId} />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </ProductDetailLayout>
  )
}
