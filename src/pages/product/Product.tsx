import { CategoryMenu } from '@/src/widgets/product/product-home/components/category-menu'
import {
  ProductHot,
  ProductRating,
  Ranking,
  ProductAddButton,
} from '@widgets/product/product-home/components'

export default function ProductPage() {
  return (
    <div className=" mt-[100px] tablet:mt-[80px] mobile:mt-[70px]  ">
      <div className="flex flex-col tablet:w-full tablet:flex-col-reverse  gap-[3vw] tablet:gap-[6vw] ">
        <div className="flex flex-col items-center justify-center tablet:ml-[200px] mobile:ml-[15px] ">
          <ProductHot />
          <ProductRating />
        </div>
        <Ranking />
      </div>
      <ProductAddButton />
    </div>
  )
}
