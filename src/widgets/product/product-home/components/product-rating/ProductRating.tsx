import { ProductCardSectionSkeleton } from '@/src/shared/ui/product-card/ProductCardSkeleton'
import { useFetchProductsRating, useIntersect } from '@shared/hooks'
import { ProductCardList } from '@shared/ui'
import { ProductCardSection } from '@widgets/product/product-home/layout'

export default function ProductRating() {
  const { data, isFetching, hasNextPage, fetchNextPage, error, isLoading } =
    useFetchProductsRating()

  if (error && !isFetching) throw error

  const onIntersect = () => {
    if (hasNextPage && !isFetching) fetchNextPage()
  }

  const ref = useIntersect<HTMLDivElement>(onIntersect)

  if (isLoading) return null

  return (
    <>
      <ProductCardSection showCategory={false} renderTitle="별점이 높은 상품">
        <ProductCardList data={data!} ref={ref} />
        {isFetching && <ProductCardSectionSkeleton count={6} />}
      </ProductCardSection>
    </>
  )
}
