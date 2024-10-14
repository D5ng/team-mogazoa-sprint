import Image from 'next/image'
import { ProductDeleteModal } from '@widgets/product/product-detail/components'
import { useToggle } from '@shared/hooks'
import { trash } from '@shared/icons'

interface ProductDeleteButtonProps {
  productId: number
}

export default function ProductDeleteButton({
  productId,
}: ProductDeleteButtonProps) {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()
  return (
    <>
      {isToggle && (
        <ProductDeleteModal
          onCloseToggle={onCloseToggle}
          productId={productId}
        />
      )}
      <button className="flex justify-center items-center w-[28px] h-[28px] rounded-md bg-black-60 tablet:w-[24px] tablet:h-[24px]">
        <Image
          src={trash}
          alt="상품 삭제하기"
          width={18}
          height={18}
          className="mobile:w-[14px] mobile:h-[14px]"
          onClick={onOpenToggle}
        />
      </button>
    </>
  )
}
