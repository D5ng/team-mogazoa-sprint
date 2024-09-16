import MockCardItem from '@widgets/profile/MockCardItem'
import { useIntersect } from '@shared/hooks'
import { useFetchFavoriteProducts } from '@shared/hooks/query/user.query'
import type { UserId } from '@shared/types'

export default function FavoriteProductsList({ userId }: UserId) {
  const {
    data: createdProducts,
    isFetching,
    hasNextPage,
    fetchNextPage,
    error,
  } = useFetchFavoriteProducts({ userId })
  console.log(userId)

  if (error && !isFetching) throw error

  const onIntersect = () => {
    if (hasNextPage && !isFetching) fetchNextPage()
  }

  const ref = useIntersect<HTMLDivElement>(onIntersect)

  return (
    <>
      <ul className="grid grid-cols-3 gap-5 tablet:grid-cols-2 mobile:grid-cols-2 mobile:gap-3">
        {createdProducts.map((product) => (
          <MockCardItem key={product.id} data={product} />
        ))}
      </ul>
      <div className="w-[1px] h-2.5" ref={ref}></div>
    </>
  )
}
