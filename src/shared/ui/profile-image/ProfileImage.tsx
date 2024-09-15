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
    <div className={`rounded-full overflow-hidden ${className || ''}`}>
      <Image
        src={url || defaultImage}
        width={size}
        height={size}
        alt="프로필 이미지"
        className="object-cover w-full h-full"
        {...props}
      />
    </div>
  )
}
