import { useToggle } from '@shared/hooks'
import { Button, Categories, CategoryName } from '@shared/ui'
import { toastCheckAuth } from '@shared/utils'
import { ProductCreateModal } from '@widgets/product/product-home/components'

interface ProductEmptyProps {
  category: Categories
}

export default function ProductEmpty({ category }: ProductEmptyProps) {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()
  const handleOpenModal = () => toastCheckAuth() && onOpenToggle()

  return (
    <div className="mt-[50px] mx-auto flex flex-col items-center gap-y-5 px-5 py-7 text-white">
      <h3 className="text-xl font-semibold">상품이 없어요!</h3>
      <p className="text-base text-black-30 text-center">
        {category.name}에 해당하는 상품이 없어요. <br />
        제일 먼저 상품을 추가해보세요!
      </p>

      <Button
        variant="primary"
        className="w-[400px] mobile:w-full"
        onClick={handleOpenModal}
      >
        상품 추가하기
      </Button>
      {isToggle && (
        <ProductCreateModal
          onCloseToggle={onCloseToggle}
          categoryId={category.id}
        />
      )}
    </div>
  )
}
