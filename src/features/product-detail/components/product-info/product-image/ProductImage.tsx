import Image from 'next/image'
import TestProductImage from '@/public/test/product_image.png'

export default function ProductImage() {
  return (
    <div className="relative w-[355px] h-[250px]">
      <Image src={TestProductImage} alt="" fill />
    </div>
  )
}
