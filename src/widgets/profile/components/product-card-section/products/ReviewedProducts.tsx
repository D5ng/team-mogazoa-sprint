import { Suspense } from 'react'
import ProductList from './ProductsList'
import { useFetchReviewedProducts } from '@shared/hooks/query'
import type { UserIdProp } from '@shared/types'

export default function ReviewedProductsList({ userId }: UserIdProp) {
  if (!userId) return null

  return (
    <Suspense fallback={<div>Loading reviewed products...</div>}>
      <ProductList
        userId={userId}
        useFetchProducts={useFetchReviewedProducts}
      />
    </Suspense>
  )
}
