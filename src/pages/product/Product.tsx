import { useProductStore } from '@/src/shared/store/productStore'
import { ProductCardSectionSkeleton } from '@/src/shared/ui/product-card/ProductCardSkeleton'
import { CategoryMenu } from '@/src/widgets/product/product-home/components/category-menu'
import ProductSearched from '@/src/widgets/product/product-home/components/product-searched'
import { ProductWrapper } from '@/src/widgets/profile/components'
import {
  ProductHot,
  ProductRating,
  Ranking,
  ProductCreateButton,
} from '@widgets/product/product-home/components'
import { useRouter } from 'next/router'
import { Suspense, useEffect } from 'react'

export default function ProductPage() {
  const { inputValue, selectedCategoryKey, handleInputValue } =
    useProductStore()
  const router = useRouter()
  const { product } = router.query

  useEffect(() => {
    if (product) handleInputValue(product)
  }, [])

  return (
    <>
      <div className=" mt-[100px] tablet:mt-[80px] mobile:mt-[70px]">
        <div className="mobile:hidden">
          <CategoryMenu />
        </div>
        <div className="w-[46vw] tablet:w-[68vw] ml-[24.5vw] tablet:ml-[220px] mobile:w-[89vw] mobile:ml-[3.9vw] flex flex-col gap-[80px] tablet:gap-[60px] overflow-hidden">
          <Ranking />
          {inputValue ? (
            <Suspense fallback={<ProductCardSectionSkeleton count={6} />}>
              <ProductSearched />
            </Suspense>
          ) : (
            <>
              <ProductWrapper>
                <ProductHot />
              </ProductWrapper>
              <ProductWrapper>
                <ProductRating />
              </ProductWrapper>
            </>
          )}
        </div>
      </div>
      <ProductCreateButton />
    </>
  )
}
