import { ProfileImage } from '@shared/ui'
import { NextSeo } from 'next-seo'

interface ProfileHeaderProps {
  image: string | null
  description: string
  nickname: string
}

export default function ProfileHeader({
  image,
  description,
  nickname,
}: ProfileHeaderProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-[30px]">
      <NextSeo title={`모가조아 - ${nickname} 프로필`} />
      <ProfileImage
        url={image}
        size={180}
        className="w-[180px] h-[180px] tablet:w-[120px] tablet:h-[120px]"
      />
      <div className="flex flex-col items-center gap-2.5">
        <h2 className="text-white text-xl">{nickname}</h2>
        <p className="text-black-30 text-sm">{description}</p>
      </div>
    </div>
  )
}
