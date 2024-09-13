import { Button } from '@/src/shared/ui'

export default function ProfileStats() {
  return (
    <div className="flex gap-[100px] tablet:gap-40 mobile:gap-[120px]">
      <div className="flex flex-col items-center text-white text-xl">
        <div>762</div>
        <span className="text-black-20 text-base">팔로워</span>
      </div>
      <div className="flex flex-col items-center text-white text-xl">
        <div>102</div>
        <span className="text-black-20 text-base">팔로잉</span>
      </div>
    </div>
  )
}
