import { Suspense } from 'react'
import ProductList from './ProductsList'
import { useFetchCreatedProducts } from '@shared/hooks/query'
import type { UserIdProp } from '@shared/types'

export default function CreatedProductsList({ userId }: UserIdProp) {
  return (
    <Suspense fallback={<div></div>}>
      <ProductList userId={userId} useFetchProducts={useFetchCreatedProducts} />
    </Suspense>
  )
}
