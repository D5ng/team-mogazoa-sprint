import Image from 'next/image'
import { ProfileImgProps } from './ProfileImage.type'

export default function ProfileImage({
  size,
  url = `https://pbs.twimg.com/media/EFHWmyXUEAASe0o.jpg`,
}: ProfileImgProps) {
  return (
    <Image
      className="rounded-full"
      src={url}
      width={size}
      height={size}
      alt="프로필이미지"
    />
  )
}
