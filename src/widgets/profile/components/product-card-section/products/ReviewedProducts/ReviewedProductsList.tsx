import MockCardItem from '@widgets/profile/MockCardItem'
import { useIntersect } from '@shared/hooks'
import { useFetchReviewedProducts } from '@shared/hooks/query'
import { EmptyProduct } from '@widgets/profile/components'
import type { UserId } from '@shared/types'

export default function ReviewedProductsList({ userId }: UserId) {
  const {
    data: reviewedProducts,
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

  if (reviewedProducts.length === 0) return <EmptyProduct />
  
  return (
    <>
      <ul className="grid grid-cols-3 gap-5 tablet:grid-cols-2 mobile:grid-cols-2 mobile:gap-3">
        {reviewedProducts.map((product) => (
          <MockCardItem key={product.id} data={product} />
        ))}
      </ul>
      <div className="w-[1px] h-2.5" ref={ref}></div>
    </>
  )
}
