import { Button } from '@/src/shared/ui'
import ProfileImage from '@/src/shared/ui/profile-image/ProfileImage'
import TestImage from 'public/test/review-profile.jpg'

export default function ProfileCard({ ...props }) {
  return (
    <div className="flex flex-col justify-center items-center gap-[30px] w-[340px] px-5 py-[30px] bg-black-60 border border-black-70 rounded-xl tablet:w-full tablet:px-[30px] mobile:px-5">
      <ProfileImage url={TestImage} className="w-[180px] tablet:w-[120px]" />
      <div className="flex flex-col items-center gap-2.5">
        <h2 className="text-white text-xl">surisuri마수리</h2>
        <p className="text-black-30 text-sm">
          세상에 리뷰 못할 제품은 없다. surisuri마수리와 함께라면 당신도
          프로쇼핑러! 안녕하세요, 별점의 화신 surisuri마수리입니다!
        </p>
      </div>
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
      <Button variant="primary">팔로우</Button>
    </div>
  )
}
