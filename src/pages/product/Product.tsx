import { useProductStore } from '@/src/shared/store/productStore'
import { ProductCardSectionSkeleton } from '@/src/shared/ui/product-card/ProductCardSkeleton'
import { CategoryMenu } from '@/src/widgets/product/product-home/components/category-menu'
import ProductSearched from '@/src/widgets/product/product-home/components/product-searched'
import { ProductWrapper } from '@/src/widgets/profile/components'
import {
  ProductHot,
  ProductRating,
  Ranking,
  ProductAddButton,
} from '@widgets/product/product-home/components'
import { error } from 'console'
import { Suspense } from 'react'

export default function ProductPage() {
  const { inputValue, selectedCategoryKey } = useProductStore()

  return (
    <>
      <div className=" mt-[100px] tablet:mt-[80px] mobile:mt-[70px] ">
        <div className="mobile:hidden">
          <CategoryMenu />
        </div>
        <div className="w-[46vw] tablet:w-[68vw] ml-[24.5vw] tablet:ml-[220px] mobile:w-[89vw] mobile:ml-[30px] flex flex-col gap-[40px] overflow-hidden">
          <Ranking />
          {inputValue || selectedCategoryKey ? (
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
      <ProductAddButton />
    </>
  )
}
