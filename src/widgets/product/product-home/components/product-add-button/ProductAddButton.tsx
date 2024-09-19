import Image from 'next/image'
import { toast } from 'react-toastify'
import { add } from '@shared/icons'
import { useToggle } from '@shared/hooks'
import { useUserStore } from '@shared/store'
import { ProductAddModal } from '@widgets/product/product-home/components/product-add-modal'

export default function ProductAddButton() {
  const { user } = useUserStore()
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()

  const openModal = () =>
    user ? onOpenToggle() : toast.error('로그인이 필요합니다')

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="fixed w-[60px] h-[60px] rounded-full gradient flex items-center justify-center right-[80px] bottom-[80px] mobile:right-[50px] mobile:bottom-[50px]"
      >
        <Image src={add} alt="제품 추가하기" width={40} height={40} />
      </button>
      {isToggle && <ProductAddModal onCloseToggle={onCloseToggle} />}
    </>
  )
}
