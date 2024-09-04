import { ImageProps } from 'next/image'
import { HTMLAttributes } from 'react'

export interface ProfileImgProps extends HTMLAttributes<HTMLDivElement> {
  url: string
  size: number
}
