import { useEffect, useState } from 'react'

import { StaticImageData } from 'next/image'

export function useImageFallback(src: string, defaultImage: StaticImageData) {
  const [imageSrc, setImageSrc] = useState<StaticImageData | string>(src)

  const onError = () => {
    setImageSrc(defaultImage)
  }

  useEffect(() => {
    setImageSrc(src)
  }, [src])

  return { imageSrc, onError }
}
