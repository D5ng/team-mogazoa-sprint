import { Suspense } from 'react'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { useReviewOptionStore } from '@shared/store'
import { ErrorFallback, ErrorBoundary } from '@shared/ui'
import { SortDropdown } from '@widgets/product/common'
import {
  ReviewList,
  ReviewSkeleton,
} from '@widgets/product/product-detail/components'
import { ProductDetailLayout } from '@widgets/product/product-detail/layout'

interface ReviewWrapperProps {
  productId: number
}

export default function ReviewWrapper({ productId }: ReviewWrapperProps) {
  const onSelectedOption = useReviewOptionStore(
    (state) => state.onSelectedOption,
  )

  return (
    <ProductDetailLayout
      className="mt-[80px] tablet:mt-[60px] mobile:mt-[60px]"
      title="상품 리뷰"
      renderDropdown={<SortDropdown onChange={onSelectedOption} />}
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
