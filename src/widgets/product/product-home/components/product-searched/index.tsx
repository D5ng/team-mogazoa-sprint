import { ProductCardList } from '@/src/shared/ui'
import { ProductCardSection } from '../../layout'
import { useProductStore } from '@/src/shared/store/productStore'

import useProductTitle from '@/src/shared/hooks/useProductsTitle'
import ProductEmpty from '../product-empty/ProductEmpty'
import CategoryDropDown from '../category-menu/CategoryDropDown'
import { useCategoryQuery } from '@/src/shared/hooks'
import useFetchProductsByQuery from '@/src/shared/hooks/query/product.query'
import { useSearchParams } from 'next/navigation'

export default function ProductSearched() {
  const { category } = useCategoryQuery()

  const _searchParams = useSearchParams()
  const searchParams = new URLSearchParams(_searchParams?.toString())
  const queryValue = searchParams.get('query') || ''

  const { data, isFetching, error } = useFetchProductsByQuery(
    queryValue,
    category ? category.id : null,
  )

  if (error && !isFetching) throw error
  if (!data?.list.length) return <ProductEmpty />

  return (
    <ProductCardSection renderTitle={<div>"{queryValue}"로 검색한 상품</div>}>
      <ProductCardList data={data.list!} />
    </ProductCardSection>
  )
}
