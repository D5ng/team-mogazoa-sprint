import { ProfileImage } from '@shared/ui'
import { ProfileImageSectionProps } from './ProfileImageSection.type'

export default function ProfileImageSection({
  image,
  description,
  nickname,
}: ProfileImageSectionProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-[30px]">
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
