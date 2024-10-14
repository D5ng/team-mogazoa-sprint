import { useDeleteProduct } from '@shared/hooks'
import { Button, Modal, ModalDescription, ModalTitle } from '@shared/ui'
import { useRouter } from 'next/router'

export interface ProductDeleteModalProps {
  onCloseToggle: () => void
  productId: number
}

export function ProductDeleteModal({
  onCloseToggle,
  productId,
}: ProductDeleteModalProps) {
  const router = useRouter()
  const { mutateAsync, isPending } = useDeleteProduct()
  const onDelete = async () => {
    await mutateAsync({ productId })
    router.back()
  }

  return (
    <Modal onCloseModal={onCloseToggle}>
      <ModalTitle>상품 삭제</ModalTitle>
      <ModalDescription>
        상품을 삭제하면 관련된 모든 정보가 사라집니다. 계속하시겠습니까?
      </ModalDescription>
      <div className="flex justify-end gap-4">
        <Button
          variant="tertiary"
          className="w-[120px] h-[50px] mobile:w-[100px]"
          onClick={onCloseToggle}
        >
          취소
        </Button>
        <Button
          variant="primary"
          className="w-[120px] h-[50px] mobile:w-[100px]"
          onClick={onDelete}
          isLoading={isPending}
          disabled={isPending}
        >
          확인
        </Button>
      </div>
    </Modal>
  )
}
