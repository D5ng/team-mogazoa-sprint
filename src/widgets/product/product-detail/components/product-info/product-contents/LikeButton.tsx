import Image from 'next/image'
import { emptyHeart, heart } from '@shared/icons'
import type { ProductDetailResponse } from '@shared/types'
import { useProductCancelFavorite, useProductFavorite } from '@shared/hooks'

interface LikeButtonProps extends Pick<ProductDetailResponse, 'isFavorite'> {
  productId: number
}

export default function LikeButton({ isFavorite, productId }: LikeButtonProps) {
  const { mutate: favoriteMutate } = useProductFavorite({ productId })
  const { mutate: cancelFavoriteMutate } = useProductCancelFavorite({
    productId,
  })

  const handleFavoriteClick = () =>
    isFavorite
      ? cancelFavoriteMutate({ productId })
      : favoriteMutate({ productId })

  return (
    <button
      className="w-[28px] h-[28px] tablet:w-[24px] tablet:h-[24px]"
      onClick={handleFavoriteClick}
    >
      <Image src={isFavorite ? heart : emptyHeart} alt="좋아요" />
    </button>
  )
}
