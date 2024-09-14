import Image from 'next/image'
import { ProfileImgProps } from './ProfileImage.type'

export default function ProfileImage({ size, url, ...props }: ProfileImgProps) {
  const defaultUrl = `https://pbs.twimg.com/media/EFHWmyXUEAASe0o.jpg`
  return (
    <div style={{ width: size, height: size }} className={` rounded-full `}>
      <div
        {...props}
        className={`overflow-hidden rounded-full ${props.className || ''}`}
      >
        <Image
          src={url || defaultUrl}
          layout="responsive"
          width={size}
          height={size}
          alt="프로필 이미지"
          className={`object-cover`}
        />
      </div>
    </div>
  )
}
