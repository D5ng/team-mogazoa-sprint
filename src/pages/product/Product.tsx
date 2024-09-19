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
    <div className="flex justify-between tablet:px-[0px]  mt-[100px] tablet:mt-[80px] mobile:mt-[70px]  ">
      <div className="tablet:w-full ml-[10vw] tablet:ml-[0] mobile:ml-[3vw] tablet:px-[5vw] flex gap-[1vw] tablet:gap-[6vw] ">
        {WINDOW_SIZE > 767 && <SideMenu />}
        <div className="flex flex-col ml-[1.9vw] gap-[5vw] tablet:flex tablet:flex-col">
          <ProductHot />
          <ProductRating />
        </div>
        <Ranking />
      </div>
      <ProductAddButton />
    </div>
  )
}
