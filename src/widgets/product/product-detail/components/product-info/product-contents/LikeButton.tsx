import Image from 'next/image'
import { emptyHeart, heart } from '@shared/icons'
import type { ProductDetailResponse } from '@shared/types'
import { useProductCancelFavorite, useProductFavorite } from '@shared/hooks'
import { toastCheckAuth } from '@shared/utils'

interface LikeButtonProps extends Pick<ProductDetailResponse, 'isFavorite'> {
  productId: number
}

export default function LikeButton({ isFavorite, productId }: LikeButtonProps) {
  const { mutate: favoriteMutate } = useProductFavorite()
  const { mutate: cancelFavoriteMutate } = useProductCancelFavorite()

  const handleFavoriteClick = () =>
    toastCheckAuth() &&
    (isFavorite
      ? cancelFavoriteMutate({ productId })
      : favoriteMutate({ productId }))

  return (
    <button
      className="relative w-[28px] h-[28px] tablet:w-[24px] tablet:h-[24px] flex-shrink-0"
      onClick={handleFavoriteClick}
    >
      <Image src={isFavorite ? heart : emptyHeart} alt="좋아요" fill />
    </button>
  )
}
