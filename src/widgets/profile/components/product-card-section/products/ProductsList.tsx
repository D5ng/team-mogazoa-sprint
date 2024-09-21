import MockCardItem from '@widgets/profile/MockCardItem'
import { useIntersect } from '@shared/hooks'
import type { UserIdProp } from '@shared/types'

interface ProductListProps {
  userId: UserIdProp['userId']
  useFetchProducts: (params: { userId: UserIdProp['userId'] }) => {
    data: any[]
    isFetching: boolean
    hasNextPage: boolean
    fetchNextPage: () => void
    error: any
  }
}

export default function ProductList({
  userId,
  useFetchProducts,
}: ProductListProps) {
  const {
    data: products,
    isFetching,
    hasNextPage,
    fetchNextPage,
    error,
  } = useFetchProducts({ userId })

  if (error && !isFetching) throw error

  const onIntersect = () => {
    if (hasNextPage && !isFetching) fetchNextPage()
  }

  const ref = useIntersect<HTMLDivElement>(onIntersect)

  return (
    <>
      <ul className="grid grid-cols-3 gap-5 tablet:grid-cols-2 mobile:grid-cols-2 mobile:gap-3">
        {products.map((product) => (
          <MockCardItem key={product.id} data={product} />
        ))}
      </ul>
      <div className="w-[1px] h-2.5" ref={ref}></div>
    </>
  )
}
