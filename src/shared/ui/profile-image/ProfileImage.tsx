import Image from 'next/image'
import { ProfileImgProps } from './ProfileImage.type'

export default function ProfileImage({ size, url, ...props }: ProfileImgProps) {
  return (
    <div style={{ width: size, height: size }} className={` rounded-full `}>
      <div
        {...props}
        className={`overflow-hidden rounded-full ${props.className || ''}`}
      >
        <Image
          src={url}
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
