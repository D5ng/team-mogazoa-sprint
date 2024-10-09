interface SkeletonProps {
  count: number
}

export function ProductCardSectionSkeleton({ count }: SkeletonProps) {
  return (
    <ul className="grid grid-cols-3 tablet:grid-cols-2  gap-[20px]">
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeletonItem key={index} />
      ))}
    </ul>
  )
}

export function ProductCardSkeletonItem() {
  return (
    <li className=" bg-black-60 p-[0.4vw] tablet:p-[10px] rounded-lg border border-black-70  animate-pulse">
      <div className="flex flex-col gap-[25px] tablet:gap-[20px] mobile:gap-[20px]">
        <div className="relative w-full h-[10.4vw] tablet:h-[21.5vw] mobile:h-[26.1vw] bg-black-70 flex overflow-hidden rounded-lg"></div>
        <div className="flex flex-col gap-[0.52vw] tablet:gap-[1.3vw] w-1/2 p-[0.625vw] tablet:p-[10px] bg-black-70 rounded-lg"></div>
        <div className="flex mobile:flex-col gap-[10px] justify-between">
          <div className="flex gap-[10px] mobile:flex-col w-1/3">
            <div className="gap-[0.52vw] tablet:gap-[1.3vw] w-1/2 p-[0.625vw] tablet:py-[10px] tablet:px-[20px] mobile:py-[5px] bg-black-70 rounded-lg"></div>
            <div className="gap-[0.52vw] tablet:gap-[1.3vw]  w-1/2 p-[0.625vw] tablet:py-[10px] tablet:px-[20px] mobile:py-[5px] bg-black-70 rounded-lg"></div>
          </div>
          <div className="gap-[0.52vw] tablet:gap-[1.3vw] w-1/6 p-[0.625vw] tablet:p-[10px] mobile:py-[5px] bg-black-70 rounded-lg"></div>
        </div>
      </div>
    </li>
  )
}
