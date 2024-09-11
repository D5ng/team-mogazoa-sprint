import Image from 'next/image'
import { emptyHeart, heart } from '@shared/icons'

export default function LikeButton() {
  return (
    <button className="w-[28px] h-[28px] tablet:w-[24px] tablet:h-[24px]">
      <Image src={emptyHeart} alt="좋아요" />
    </button>
  )
}
