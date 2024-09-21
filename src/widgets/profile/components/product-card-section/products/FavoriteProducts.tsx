import { Suspense } from 'react'
import { useFetchFavoriteProducts } from '@shared/hooks/query'
import { useIntersect } from '@shared/hooks'
import { ProductCardList } from '@shared/ui'
import type { UserId } from '@shared/types'

export default function FavoriteProductsList({ userId }: UserId) {
  const {
    data: products,
    isFetching,
    hasNextPage,
    fetchNextPage,
    error,
  } = useFetchFavoriteProducts({ userId })

  if (error && !isFetching) throw error

  const onIntersect = () => {
    if (hasNextPage && !isFetching) fetchNextPage()
  }

  const ref = useIntersect<HTMLDivElement>(onIntersect)

  return (
    <Suspense fallback={<div></div>}>
      <ProductCardList data={products} ref={ref} />
    </Suspense>
  )
}
