import { Categories, ProductCardList } from '@shared/ui'
import { useFetchProductCategory } from '@shared/hooks'
import { ProductCardSection } from '@widgets/product/product-home/layout'
import {
  CategoryMenu,
  ProductAddButton,
  ProductEmpty,
  Ranking,
} from '@widgets/product/product-home/components'
import { NextSeo } from 'next-seo'

interface ProductCategoryPageProps {
  category: Categories
}

export default function ProductCategoryPage({
  category,
}: ProductCategoryPageProps) {
  const { data } = useFetchProductCategory(category.id)
  const productList = data!.list

  return (
    <>
      <div className=" mt-[100px] tablet:mt-[80px] mobile:mt-[70px]  ">
        <div className="mobile:hidden">
          <CategoryMenu />
        </div>
        <div className="w-[46vw] tablet:w-[68vw] ml-[24.5vw] tablet:ml-[220px] mobile:w-[89vw] mobile:ml-[30px] flex flex-col gap-[40px] overflow-hidden">
          <Ranking />
          <ProductCardSection renderTitle={`${category.name}의 모든 상품`}>
            {productList.length === 0 ? (
              <ProductEmpty categoryName={category.name} />
            ) : (
              <ProductCardList data={productList} />
            )}
          </ProductCardSection>
        </div>
      </div>
      <ProductAddButton />
    </>
  )
}
