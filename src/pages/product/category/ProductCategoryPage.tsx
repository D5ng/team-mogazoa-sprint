import { Categories, ProductCardList } from '@shared/ui'
import { useFetchProductCategory } from '@shared/hooks'
import { ProductCardSection } from '@widgets/product/product-home/layout'
import {
  CategoryMenu,
  ProductCreateButton,
  Ranking,
} from '@widgets/product/product-home/components'

import ProductEmpty from '@/src/widgets/product/product-home/components/product-empty/ProductEmpty'
import { useProductStore } from '@/src/shared/store/productStore'
import useFetchProductsByQuery from '@/src/shared/hooks/query/product.query'

import { NextSeo } from 'next-seo'

interface ProductCategoryPageProps {
  category: Categories
}

export default function ProductCategoryPage({
  category,
}: ProductCategoryPageProps) {
  const { inputValue } = useProductStore()
  const { data } = useFetchProductCategory(category.id, inputValue)
  const productList = data?.list!

  return (
    <ProductCardSection renderTitle={`${category.name}의 모든 상품`}>
      {productList?.length === 0 ? (
        <ProductEmpty categoryName={category.name} />
      ) : (
        <ProductCardList data={productList} />
      )}
    </ProductCardSection>
  )
}
