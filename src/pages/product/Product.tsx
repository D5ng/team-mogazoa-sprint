import {
  ProductHot,
  ProductRating,
  Ranking,
  SideMenu,
  ProductAddButton,
} from '@widgets/product/product-home/components'
import { useWindowResize } from '@shared/hooks'

export default function ProductPage() {
  const WINDOW_SIZE = useWindowResize()

  return (
    <div className=" mt-[100px] tablet:mt-[80px] mobile:mt-[70px]  ">
      {WINDOW_SIZE > 767 && <SideMenu />}
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
