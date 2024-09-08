import Image from 'next/image'
import { emptyHeart, heart } from '@/src/app/icons'

export default function LikeButton() {
  return (
    <button>
      <Image src={emptyHeart} alt="좋아요" />
    </button>
  )
}
