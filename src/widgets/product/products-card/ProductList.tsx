import { useFetchNextProduct, useIntersect } from '@/src/shared/hooks'
import { ProductCardItems, ProductCardSectionProps } from './ProductCard.types'
import ProductCardItem from './ProductCardItem'

interface listProps {
  children?: React.ReactNode
}

export default function ProductList({ children }: listProps) {
  const { data, isFetching, hasNextPage, fetchNextPage, error } =
    useFetchNextProduct()

  if (error && !isFetching) throw error

  const onIntersect = () => {
    if (hasNextPage && !isFetching) fetchNextPage()
  }

  const ref = useIntersect<HTMLDivElement>(onIntersect)

  //   if (reviews.length === 0) return <noProducts />

  return (
    <>
      <section>
        <p className="ml-[10px] mb-[10px] text-[24px] tablet:text-[20px] mobile:text-[16px] text-white">
          {children}
        </p>
        <ul className=" grid grid-cols-3 tablet:grid-cols-2 shrink-0 mobile:gap-x-[7vw]">
          {data?.map((data: ProductCardItems) => (
            <li className="inline-block" key={data.id}>
              <ProductCardItem data={data} />
            </li>
          ))}
        </ul>
      </section>
      <div className="w-[1px] h-2.5" ref={ref}></div>
    </>
  )
}
