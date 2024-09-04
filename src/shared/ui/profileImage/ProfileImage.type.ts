import { ImageProps } from 'next/image'

export interface ProfileImgProps extends ImageProps {
  url: string
  size: number
}
