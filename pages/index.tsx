import useWindowResize from '@shared/hooks/useWindowResize'
import ProductAddButton from '@widgets/product-add-button/ProductAddButton'
import ProductCard from '@widgets/product/components/products-card/ProductCard'
import Ranking from '@widgets/product/components/ranking/Ranking'
import SideMenu from '@widgets/product/components/side-menu/SideMenu'
const home = () => {
  const WINDOW_SIZE = useWindowResize()

  return (
    <div className="flex justify-between tablet:px-[0px]  mt-[100px] tablet:mt-[80px] mobile:mt-[70px]  ">
      <div className="tablet:w-full ml-[10vw] tablet:ml-[0] mobile:ml-[3vw] tablet:px-[5vw] flex gap-[1vw] tablet:gap-[6vw] ">
        {WINDOW_SIZE > 767 && <SideMenu />}
        {WINDOW_SIZE > 1280 ? (
          <div className="flex ml-[1.9vw] gap-[5vw]">
            <ProductCard />
            <Ranking />
          </div>
        ) : (
          <div className="tablet:flex  tablet:flex-col">
            <Ranking />
            <ProductCard />
          </div>
        )}
      </div>
      <ProductAddButton />
    </div>
  )
}

export default home
