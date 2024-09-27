export default function FollowListSkeleton() {
  return (
    <div className="w-full h-full overflow-y-auto custom-scrollbar">
      <ul className="flex flex-col gap-6 mt-10 tablet:gap-5 mobile:mt-5">
        <FollowSkeletonItem />
        <FollowSkeletonItem />
        <FollowSkeletonItem />
        <FollowSkeletonItem />
        <FollowSkeletonItem />
      </ul>
    </div>
  )
}

function FollowSkeletonItem() {
  return (
    <li className="flex items-center gap-5 animate-pulse">
      <div className="w-[52px] h-[52px] bg-black-30 rounded-full"></div>
      <div className="w-[100px] h-[20px] bg-black-30 rounded-md"></div>
    </li>
  )
}
