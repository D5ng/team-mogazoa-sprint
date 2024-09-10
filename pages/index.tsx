import useWindowResize from '@/src/shared/hooks/useWindowResize'
import Gnb from '@/src/widgets/Gnb/Gnb'
import ProductCard from '@/src/widgets/products-card/ProductCard'
import Ranking from '@/src/widgets/ranking/Ranking'
import SideMenu from '@/src/widgets/side-menu/SideMenu'

const home = () => {
  const WINDOW_SIZE = useWindowResize()
  return (
    <>
      <Gnb />
      <div className="flex justify-between tablet:px-[0px] pt-[2vw]">
        <div className="tablet:w-full ml-[10vw] tablet:ml-[0] mobile:ml-[3vw] tablet:px-[5vw] flex gap-[1vw] tablet:justify-between  ">
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
      </div>
    </>
  )
}

export default home
