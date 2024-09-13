import React from 'react'

export function ReviewSkeleton() {
  return (
    <ul className="flex flex-col gap-y-5">
      <ReviewSkeletonItem />
      <ReviewSkeletonItem />
    </ul>
  )
}

function ReviewSkeletonItem() {
  return (
    <li className="flex items-start gap-x-[80px] bg-black-60 p-[30px] rounded-xl border border-black-70 mobile:flex-col mobile:gap-x-0 mobile:gap-y-[30px] animate-pulse">
      <div className="flex items-center gap-x-2.5 w-[150px]">
        <div className="relative w-[42px] h-[42px] rounded-full overflow-hidden tablet:w-[36px] tablet:h-[36px] tablet:text-sm bg-black-30"></div>
        <div className="flex flex-col gap-y-[5px]">
          <div className="w-[80px] h-[19px] bg-black-30 rounded-md"></div>
          <div className="w-[50px] h-[19px] bg-black-30 rounded-md"></div>
        </div>
      </div>
      <div className="relative w-[calc(100%-150px-80px)] flex flex-col gap-y-5 text-base tablet:text-xs mobile:w-full">
        <div className="w-full h-[44px] bg-black-30 rounded-md mobile:h-[65px]"></div>
        <ul className="flex gap-x-5">
          <li className="w-[100px] h-[100px] rounded-lg overflow-hidden tablet:w-[80px] tablet:h-[80px] bg-black-30"></li>
          <li className="w-[100px] h-[100px] rounded-lg overflow-hidden tablet:w-[80px] tablet:h-[80px] bg-black-30"></li>
        </ul>
        <div className="flex items-end gap-x-5 mobile:gap-x-3">
          <div className="w-[80px] h-[17px] bg-black-30 rounded-md"></div>
          <div className="ml-auto bg-black-30 rounded-full w-[70px] h-[30px] flex justify-center items-center gap-x-[5px]"></div>
        </div>
      </div>
    </li>
  )
}
