import { useState } from 'react'
import { defaultProduct } from '@shared/icons'

export function useImageFallback(src: string) {
  const [imageSrc, setImageSrc] = useState(src)

  const onError = () => {
    setImageSrc(defaultProduct)
  }

  return { imageSrc, onError }
}
