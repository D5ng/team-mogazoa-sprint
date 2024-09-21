import Image from 'next/image'
import { defaultProfile } from '@shared/icons'
import { ProfileImgProps } from './ProfileImage.type'

export default function ProfileImage({
  size,
  url,
  className,
}: ProfileImgProps) {
  return (
    <div
      className={`relative w-[${size}px] h-[${size}px] rounded-full overflow-hidden ${className || ''}`}
    >
      <Image
        src={url || defaultProfile}
        fill
        alt="프로필 이미지"
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  )
}
