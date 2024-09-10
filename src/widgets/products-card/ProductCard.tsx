import { CARD_MOCK_DATA } from './ProductCard.mock'
import { ProductCardItems } from './ProductCard.types'
import ProductCardItem from './ProductCardItem'

export default function ProductCard() {
  return (
    <article className="w-[50vw] tablet:w-[625px] tabletS:w-[70vw] mobile:w-[80vw] tablet:mt-[20px] flex flex-col gap-[2vw]">
      <section>
        <h1 className="ml-[10px] mb-[10px] text-[24px] tablet:text-[20px] mobile:text-[16px] text-white">
          지금 핫한 상품 <span className="font-bold text-gradient">TOP 6</span>
        </h1>
        <ul className=" grid grid-cols-3 tablet:grid-cols-2 shrink-0">
          {CARD_MOCK_DATA.map((data: ProductCardItems) => (
            <li className="inline-block">
              <ProductCardItem key={data.id} data={data} />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h1 className="ml-[10px] mb-[10px] text-[24px] text-white">
          별점이 높은 상품
        </h1>
        <ul className=" grid grid-cols-3 tablet:grid-cols-2 shrink-0">
          {CARD_MOCK_DATA.map((data: ProductCardItems) => (
            <li className="inline-block">
              <ProductCardItem key={data.id} data={data} />
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
