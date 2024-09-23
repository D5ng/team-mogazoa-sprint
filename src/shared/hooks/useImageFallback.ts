import { useEffect, useState } from 'react'
import { defaultProduct } from '@shared/icons'

export function useImageFallback(src: string) {
  const [imageSrc, setImageSrc] = useState(src)

  const onError = () => {
    setImageSrc(defaultProduct)
  }

  useEffect(() => {
    setImageSrc(src)
  }, [src])

  return { imageSrc, onError }
}
