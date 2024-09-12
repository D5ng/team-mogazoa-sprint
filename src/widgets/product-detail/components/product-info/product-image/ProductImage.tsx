import Image from 'next/image'

interface ProductImageProps {
  image: string
}

export default function ProductImage({ image }: ProductImageProps) {
  return (
    <div className="relative w-[355px] h-[250px] tablet:w-[37.634vw] tablet:h-[197px] mobile:w-full mobile:h-[62.933vw]">
      <Image
        src={image}
        alt=""
        fill
        className="object-cover object-center"
        priority
      />
    </div>
  )
}
