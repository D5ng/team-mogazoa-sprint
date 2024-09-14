import useProduct from '@/src/shared/hooks/useProduct'
import ProductCardSection from './ProductCardSection'

export default function ProductCard() {
  const {
    hotProducts,
    ratedProducts,
    filteredProducts,
    inputValue,
    selectedCategoryKey,
  } = useProduct()

  return (
    <article className="w-[50vw] tablet:w-[65vw]  mobile:w-[80vw] flex flex-col gap-[2vw]">
      {inputValue || selectedCategoryKey ? (
        <ProductCardSection data={filteredProducts} />
      ) : (
        <>
          <ProductCardSection data={hotProducts}>
            지금 핫한 상품
            <span className="font-bold text-gradient">TOP 6</span>
          </ProductCardSection>
          <ProductCardSection data={ratedProducts}>
            최근 상품
          </ProductCardSection>
        </>
      )}
    </article>
  )
}
