import Button from '@shared/ui/button/Button'
import CategoryChip from '@widgets/category-chip/CategoryChip'
import {
  ClipBoardButton,
  KaKaoShareButton,
  LikeButton,
} from '@features/product-detail/components'

export default function ProductContents() {
  return (
    <div className="w-[calc(100%-355px-40px)] text-white">
      <CategoryChip name="전자기기" />
      <div className="flex justify-between items-center mt-2.5">
        <div className="flex items-center gap-x-[15px]">
          <p>Sony WH-1000XM3</p>
          <LikeButton />
        </div>
        <div className="flex gap-x-2.5">
          <KaKaoShareButton />
          <ClipBoardButton />
        </div>
      </div>
      <p className="mt-[50px] mb-[60px] text-base">
        한층 업그레이드된 고급 노이즈 캔슬과 상황에 맞게 조정되는 스마트 청취
        기능을 갖춘 WH-1000XM3 헤드폰으로 더욱 깊은 고요 속에서 청취할 수
        있습니다.
      </p>
      <div className="flex gap-x-5">
        <Button variant="primary" className="!w-[345px] h-[65px]">
          리뷰 작성하기
        </Button>
        <Button variant="secondary" className="!w-[180px] h-[65px]">
          비교하기
        </Button>
      </div>
    </div>
  )
}
