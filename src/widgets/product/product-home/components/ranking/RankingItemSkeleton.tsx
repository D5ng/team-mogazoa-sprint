export function RankingSkeleton() {
  return (
    <ul className=" flex-col flex tablet:flex-row  gap-[30px] tablet:h-[60px] tablet:overflow-x-auto tablet:custom-scrollbar tablet:overflow-y-hidden tablet:gap-[20px] mobile:gap-[15px]">
      {Array.from({ length: 10 }).map((_, index) => (
        <RankingItemSkeleton key={index} />
      ))}
    </ul>
  )
}

export function RankingItemSkeleton() {
  return (
    <li className="flex border-black-70 animate-pulse">
      <div className="flex">
        <div className="rounded-full w-[42px] h-[42px] tablet:w-[38px] tablet:h-[38px] bg-black-70" />
        <div className="flex-col items-center  justify-between ml-[10px] tablet:ml-[8px]">
          <div className="flex gap-[5px]">
            <div className="px-[15px] py-[5px] rounded-lg bg-black-70" />
            <div className="px-[30px] py-[10px] rounded-lg bg-black-70" />
          </div>
          <div className="flex tablet:gap-[6px] gap-[8px]  mt-[8px]">
            <div className="px-[15px] py-[5px] rounded-lg bg-black-70" />
            <div className="px-[15px] py-[5px] rounded-lg bg-black-70" />
          </div>
        </div>
      </div>
    </li>
  )
}
