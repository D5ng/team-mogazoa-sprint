import { HTMLAttributes } from 'react'

export interface ProfileImgProps extends HTMLAttributes<HTMLDivElement> {
  url: string | null
  size?: number
}
