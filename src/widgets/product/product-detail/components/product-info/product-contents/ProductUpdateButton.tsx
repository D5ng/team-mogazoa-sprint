import { Button } from '@shared/ui'
import { useToggle } from '@shared/hooks'
import { ProductUpdateModal } from '@widgets/product/product-detail/components'

interface ProductUpdateButtonProps {
  productId: number
}

export default function ProductUpdateButton({
  productId,
}: ProductUpdateButtonProps) {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()

  return (
    <>
      <Button
        variant="tertiary"
        onClick={onOpenToggle}
        className="w-[180px] h-[65px] tablet:w-[16.532vw] tablet:h-[55px] mobile:w-full"
      >
        편집하기
      </Button>
      {isToggle && (
        <ProductUpdateModal
          onCloseToggle={onCloseToggle}
          productId={productId}
        />
      )}
    </>
  )
}
