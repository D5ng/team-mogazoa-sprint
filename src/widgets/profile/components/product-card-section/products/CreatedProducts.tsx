import { useIntersect } from '@shared/hooks'
import { useFetchCreatedProducts } from '@shared/hooks/query'
import { ProductCardList } from '@shared/ui'
import { EmptyProduct } from '@widgets/profile/components'
import type { UserIdProp } from '@shared/types'

export default function CreatedProductsList({ userId }: UserIdProp) {
  const {
    data: products,
    isFetching,
    hasNextPage,
    fetchNextPage,
    error,
  } = useFetchCreatedProducts({ userId })

  if (error && !isFetching) throw error

  const onIntersect = () => {
    if (hasNextPage && !isFetching) fetchNextPage()
  }

  const ref = useIntersect<HTMLDivElement>(onIntersect)

  if (products.length === 0) return <EmptyProduct />

  return <ProductCardList data={products} ref={ref} />
}
