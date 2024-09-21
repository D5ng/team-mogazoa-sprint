import { useImageFallback } from '@shared/hooks/useImageFallback'
import Image from 'next/image'

interface ProductImageProps {
  image: string
}

export default function ProductImage({ image }: ProductImageProps) {
  const { imageSrc, onError } = useImageFallback(image)

  return (
    <div className="relative w-[355px] tablet:w-[37.634vw] mobile:w-full mobile:h-[62.933vw]">
      <Image
        src={imageSrc}
        alt=""
        fill
        className="object-cover object-center"
        priority
        onError={onError}
      />
    </div>
  )
}
