import Image from 'next/image'
import defaultImage from 'public/images/default-profile.webp'
import { ProfileImgProps } from './ProfileImage.type'

export default function ProfileImage({
  size,
  url,
  className,
  ...props
}: ProfileImgProps) {
  return (
    <div
      className={`relative w-[${size}px] h-[${size}px] rounded-full overflow-hidden ${className || ''}`}
    >
      <Image
        src={url || defaultImage}
        fill
        alt="프로필 이미지"
        className="object-cover w-full h-full"
        {...props}
      />
    </div>
  )
}
