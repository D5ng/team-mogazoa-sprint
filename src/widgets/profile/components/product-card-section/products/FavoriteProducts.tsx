import { Suspense } from 'react'
import ProductList from './ProductsList'
import { useFetchFavoriteProducts } from '@shared/hooks/query'
import type { UserId } from '@shared/types'

export default function FavoriteProductsList({ userId }: UserId) {
  return (
    <Suspense fallback={<div></div>}>
      <ProductList
        userId={userId}
        useFetchProducts={useFetchFavoriteProducts}
      />
    </Suspense>
  )
}
