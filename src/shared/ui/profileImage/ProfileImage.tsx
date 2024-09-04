import Image from 'next/image'
import { ProfileImgProps } from './ProfileImage.type'

export default function ProfileImage({
  size,
  url = `https://pbs.twimg.com/media/EFHWmyXUEAASe0o.jpg`,
  ...props
}: ProfileImgProps) {
  return (
    <Image
      {...props}
      className={`rounded-full ${props.className || ''}`}
      src={url}
      width={size}
      height={size}
      alt="프로필이미지"
    />
  )
}
