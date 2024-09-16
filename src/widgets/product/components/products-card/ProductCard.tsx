import useProduct from '@/src/shared/hooks/useProduct'
import { ProductCardItems } from './ProductCard.types'
import ProductCardItem from './ProductCardItem'
import SearchedProductCard from './SearchedProductCard'

export default function ProductCard() {
  const { hotProducts, ratedProducts, inputValue, selectedKey } = useProduct()

  return (
    <article className="w-[50vw] tablet:w-[65vw]  mobile:w-[80vw] mt-[20px] flex flex-col gap-[2vw] ">
      {inputValue || selectedKey ? (
        <SearchedProductCard />
      ) : (
        <>
          <section>
            <h1 className="ml-[10px] mb-[10px] text-[24px] tablet:text-[20px] mobile:text-[16px] text-white">
              지금 핫한 상품{' '}
              <span className="font-bold text-gradient">TOP 6</span>
            </h1>
            <ul className=" grid grid-cols-3 tablet:grid-cols-2 shrink-0 mobile:gap-x-[7vw]">
              {hotProducts?.map((data: ProductCardItems) => (
                <li className="inline-block" key={data.id}>
                  <ProductCardItem data={data} />
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h1 className="ml-[10px] mb-[10px] text-[24px] tablet:text-[20px] mobile:text-[16px] text-white">
              최근 상품
            </h1>
            <ul className=" grid grid-cols-3 tablet:grid-cols-2 shrink-0">
              {ratedProducts?.map((data: ProductCardItems) => (
                <li className="inline-block" key={data.id}>
                  <ProductCardItem data={data} />
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </article>
  )
}
