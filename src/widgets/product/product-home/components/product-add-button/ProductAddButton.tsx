import Image from 'next/image'
import { add } from '@shared/icons'
import { useToggle } from '@shared/hooks'
import { toastCheckAuth } from '@shared/utils'
import { ProductAddModal } from '@widgets/product/product-home/components/product-add-modal'

export default function ProductAddButton() {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()

  const handleOpenModal = () => toastCheckAuth() && onOpenToggle()

  return (
    <>
      <button
        type="button"
        onClick={handleOpenModal}
        className="fixed w-[60px] h-[60px] rounded-full gradient flex items-center justify-center right-[80px] bottom-[80px] mobile:right-[50px] mobile:bottom-[50px]"
      >
        <Image src={add} alt="제품 추가하기" width={40} height={40} />
      </button>
      {isToggle && <ProductAddModal onCloseToggle={onCloseToggle} />}
    </>
  )
}
