import useSearchProduct from '@/src/shared/hooks/useSearchProduct'
import ProductCardSection from './ProductCardSection'
import fetchProductsByQuery from '@/src/shared/hooks/query/product.query'
import { useProductStore } from '@/src/shared/store/productStore'
import ProductList from './ProductList'

export default function ProductCard() {
  const { selectedCategoryKey } = useSearchProduct()
  const { hotProducts, ratedProducts, filteredProducts } =
    fetchProductsByQuery()
  const { inputValue } = useProductStore()

  return (
    <article className="w-[50vw] tablet:w-[65vw]  mobile:w-[80vw] flex flex-col gap-[2vw] ">
      {inputValue || selectedCategoryKey ? (
        <ProductCardSection data={filteredProducts} />
      ) : (
        <>
          <ProductCardSection data={hotProducts}>
            지금 핫한 상품
            <span className="font-bold text-gradient">TOP 6</span>
          </ProductCardSection>
          <ProductList>별점이 높은 상품</ProductList>
        </>
      )}
    </article>
  )
}
