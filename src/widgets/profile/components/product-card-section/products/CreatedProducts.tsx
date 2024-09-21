import { Suspense } from 'react'
import ProductList from './ProductsList'
import { useFetchCreatedProducts } from '@shared/hooks/query'
import type { UserId } from '@shared/types'

export default function CreatedProductsList({ userId }: UserId) {
  return (
    <Suspense fallback={<div></div>}>
      <ProductList userId={userId} useFetchProducts={useFetchCreatedProducts} />
    </Suspense>
  )
}
