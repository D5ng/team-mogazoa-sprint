import { Suspense } from 'react'
import ProductList from './ProductsList'
import { useFetchFavoriteProducts } from '@shared/hooks/query'
import type { UserIdProp } from '@shared/types'

export default function FavoriteProductsList({ userId }: UserIdProp) {
  return (
    <Suspense fallback={<div></div>}>
      <ProductList
        userId={userId}
        useFetchProducts={useFetchFavoriteProducts}
      />
    </Suspense>
  )
}
