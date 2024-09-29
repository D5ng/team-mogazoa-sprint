import Image from 'next/image'
import { kakao } from '@shared/icons'
import { useRouter } from 'next/router'
import { useFetchProductDetail } from '@/src/shared/hooks'

interface KaKaoShareButtonProps {
  productId: number
}

export default function KaKaoShareButton({ productId }: KaKaoShareButtonProps) {
  const router = useRouter()
  const detailQuery = useFetchProductDetail(productId)
  const data = detailQuery.data!

  const handleKaKaoShare = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `모가조아 - ${data.name}`,
        description: data.description,
        imageUrl: data.image,
        link: {
          mobileWebUrl: `${process.env.NEXT_PUBLIC_URL}${router.asPath}`,
          webUrl: `${process.env.NEXT_PUBLIC_URL}${router.asPath}`,
        },
      },
      social: {
        likeCount: data.favoriteCount,
        commentCount: data.reviewCount,
      },
      buttons: [
        {
          title: '웹으로 이동',
          link: {
            mobileWebUrl: `${process.env.NEXT_PUBLIC_URL}${router.asPath}`,
            webUrl: `${process.env.NEXT_PUBLIC_URL}${router.asPath}`,
          },
        },
      ],
    })
  }
  return (
    <button
      id="kakaotalk-sharing-btn"
      className="flex justify-center items-center w-[28px] h-[28px] rounded-md bg-black-60 tablet:w-[24px] tablet:h-[24px]"
      onClick={handleKaKaoShare}
    >
      <Image
        src={kakao}
        alt="카카오로 공유하기"
        width={18}
        height={18}
        className="mobile:w-[14px] mobile:h-[14px]"
      />
    </button>
  )
}
