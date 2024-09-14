import { UserItem } from '@shared/types'
import ProfileImage from '@shared/ui/profile-image/ProfileImage'

export default function ProfileImageSection({ profileData }: UserItem) {
  return (
    <div className="flex flex-col justify-center items-center gap-[30px]">
      <ProfileImage url={image} className="w-[180px] tablet:w-[120px]" />
      <div className="flex flex-col items-center gap-2.5">
        <h2 className="text-white text-xl">surisuri마수리</h2>
        <p className="text-black-30 text-sm">
          세상에 리뷰 못할 제품은 없다. surisuri마수리와 함께라면 당신도
          프로쇼핑러! 안녕하세요, 별점의 화신 surisuri마수리입니다!
        </p>
      </div>
    </div>
  )
}
