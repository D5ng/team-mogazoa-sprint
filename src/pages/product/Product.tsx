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
import { Suspense } from 'react'
import ProductCategoryPage from './category/ProductCategoryPage'
import { Categories, CATEGORY_CHIPS } from '@shared/ui'
import { useSearchParams } from 'next/navigation'

export default function ProductPage() {
  const _searchParams = useSearchParams()
  const searchParams = new URLSearchParams(_searchParams?.toString())
  const queryValue = searchParams.get('query')

  const router = useRouter()
  const categoryId = router.query?.category

  let category: Categories | null = null

  if (categoryId) {
    category =
      CATEGORY_CHIPS.find((category) => category.id === +categoryId) || null
  }

  return (
    <>
      <div className=" mt-[100px] tablet:mt-[80px] mobile:mt-[70px]">
        <div className="mobile:hidden">
          <CategoryMenu />
        </div>
        <div className="w-[46vw] tablet:w-[68vw] ml-[24.5vw] tablet:ml-[220px] mobile:w-[89vw] mobile:ml-[30px] flex flex-col gap-[80px] tablet:gap-[60px] overflow-hidden">
          <Ranking />
          {category && <ProductCategoryPage category={category} />}
          {!category && !queryValue && (
            <>
              <ProductWrapper>
                <ProductHot />
              </ProductWrapper>
              <ProductWrapper>
                <ProductRating />
              </ProductWrapper>
            </>
          )}
          {!category && queryValue && (
            <Suspense fallback={<ProductCardSectionSkeleton count={6} />}>
              <ProductSearched />
            </Suspense>
          )}
        </div>
      </div>
      <ProductCreateButton />
    </>
  )
}
