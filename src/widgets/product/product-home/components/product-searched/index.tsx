import { ProductCardList } from '@/src/shared/ui'
import { ProductCardSection } from '../../layout'
import { useProductStore } from '@/src/shared/store/productStore'
import useFetchProductsByQuery from '@/src/shared/hooks/query/product.query'
import useProductTitle from '@/src/shared/hooks/useProductsTitle'

export default function ProductSearched() {
  const { inputValue, selectedCategoryKey } = useProductStore()
  const { searchTitle } = useProductTitle()

  const { data, isFetching, error, isLoading } = useFetchProductsByQuery(
    inputValue,
    selectedCategoryKey,
  )

  if (error && !isFetching) throw error

  if (isLoading) return null

  return (
    <ProductCardSection renderTitle={searchTitle}>
      <ProductCardList data={data!} />
    </ProductCardSection>
  )
}
