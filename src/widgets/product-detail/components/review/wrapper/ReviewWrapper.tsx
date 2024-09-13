import { Suspense, useState } from 'react'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorFallback, ErrorBoundary } from '@shared/ui'
import {
  LatestDropdown,
  ReviewList,
  ReviewSkeleton,
} from '@widgets/product-detail/components'
import { ProductDetailLayout } from '@widgets/product-detail/layout'
import {
  LATEST_DROPDOWN_ITEMS,
  ReviewSortOptions,
} from '@widgets/product-detail/constants'
interface ReviewWrapperProps {
  productId: number
}

export default function ReviewWrapper({ productId }: ReviewWrapperProps) {
  const [reviewSortOption, setReviewSortOption] = useState<ReviewSortOptions>(
    LATEST_DROPDOWN_ITEMS[0].value,
  )
  const handleSelectedOption = (option: ReviewSortOptions) =>
    setReviewSortOption(option)

  return (
    <ProductDetailLayout
      className="mt-[80px] tablet:mt-[60px] mobile:mt-[60px]"
      title="상품 리뷰"
      renderDropdown={
        <LatestDropdown onSelectedOption={handleSelectedOption} />
      }
    >
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onReset={reset} fallback={ErrorFallback}>
            <Suspense fallback={<ReviewSkeleton />}>
              <ReviewList
                productId={productId}
                reviewSortOption={reviewSortOption}
              />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </ProductDetailLayout>
  )
}
