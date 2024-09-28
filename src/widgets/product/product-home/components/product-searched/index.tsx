import { ProductCardList } from '@/src/shared/ui'
import { ProductCardSection } from '../../layout'
import { useProductStore } from '@/src/shared/store/productStore'
import useFetchProductsByQuery from '@/src/shared/hooks/query/product.query'
import useProductTitle from '@/src/shared/hooks/useProductsTitle'
import ProductEmpty from '../product-empty/ProductEmpty'
import CategoryDropDown from '../category-menu/CategoryDropDown'

export default function ProductSearched() {
  const { inputValue, selectedCategoryKey } = useProductStore()
  const { searchTitle } = useProductTitle()

  const { data, isFetching, error } = useFetchProductsByQuery(
    selectedCategoryKey,
    inputValue,
  )

  if (error && !isFetching) throw error
  if (!data?.length) return <ProductEmpty />

  return (
    <ProductCardSection renderTitle={searchTitle}>
      <ProductCardList data={data!} />
    </ProductCardSection>
  )
}
