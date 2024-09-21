import { CategoryMenu } from '@/src/widgets/product/product-home/components/category-menu'
import {
  ProductHot,
  ProductRating,
  Ranking,
  ProductAddButton,
} from '@widgets/product/product-home/components'

export default function ProductPage() {
  return (
    <>
      <div className=" mt-[100px] tablet:mt-[80px] mobile:mt-[70px]  ">
        <div className="w-[46vw] tablet:w-[68vw] ml-[24.5vw] tablet:ml-[220px] mobile:w-[89vw] mobile:ml-[30px] flex flex-col gap-[40px] overflow-hidden">
          <Ranking />
          <ProductHot />
          <ProductRating />
        </div>
      </div>
      <ProductAddButton />
    </>
  )
}
