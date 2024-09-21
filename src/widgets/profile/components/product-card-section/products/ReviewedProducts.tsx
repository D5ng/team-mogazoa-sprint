import { Suspense } from 'react'
import { useFetchReviewedProducts } from '@shared/hooks/query'
import { useIntersect } from '@shared/hooks'
import { ProductCardList } from '@shared/ui'
import { EmptyProduct } from '@widgets/profile/components'
import type { UserId } from '@shared/types'

export default function ReviewedProductsList({ userId }: UserId) {
  if (!userId) return null

  const {
    data: products,
    isFetching,
    hasNextPage,
    fetchNextPage,
    error,
  } = useFetchReviewedProducts({ userId })

  if (error && !isFetching) throw error

  const onIntersect = () => {
    if (hasNextPage && !isFetching) fetchNextPage()
  }

  const ref = useIntersect<HTMLDivElement>(onIntersect)

  if (products.length === 0) return <EmptyProduct />

  return (
      <ProductCardList data={products} ref={ref} />
  )
}
