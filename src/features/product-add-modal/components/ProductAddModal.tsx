import Button from '@/src/shared/ui/button/Button'
import {
  Dropdown,
  DropdownMenu,
  DropdownMenuItem,
  DropdownTrigger,
} from '@/src/shared/ui/dropdown/Dropdown'

import { Modal, ModalTitle } from '@/src/shared/ui/modal/Modal'
import { CATEGORY_CHIPS } from '@/src/widgets/category-chip/CategoryChip.constants'
import { useForm } from 'react-hook-form'
import { Form, ImageInput, TextBoxInput, TextFieldInput } from '@/src/shared/ui'

interface ProductAddModalProps {
  onCloseToggle: () => void
}

type ProductAddType = {
  categoryId: number
  image: string
  description: string
  name: string
}

export default function ProductAddModal({
  onCloseToggle,
}: ProductAddModalProps) {
  const {
    formState: { errors },
    register,
    handleSubmit,
    control,
  } = useForm<ProductAddType>()
  const onSubmit = (data: ProductAddType) => console.log(data)

  return (
    <Modal onCloseModal={onCloseToggle}>
      <ModalTitle>상품 추가</ModalTitle>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-5 my-[40px]"
      >
        <div className="flex items-center gap-5">
          <div className="flex flex-col gap-y-5">
            <TextFieldInput
              placeholder="상품명 (상품 등록 여부를 확인해 주세요)"
              className="h-[70px]"
            />
            <Dropdown>
              <DropdownTrigger>카테고리 선택</DropdownTrigger>
              <DropdownMenu>
                {CATEGORY_CHIPS.map((category) => (
                  <DropdownMenuItem>{category}</DropdownMenuItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
          <ImageInput image={null} register={register('image')} />
        </div>
        <TextBoxInput
          control={control}
          placeholder="상품에 대한 설명을 입력해 주세요."
          register={register('description')}
        />
      </Form>
      <Button variant="primary">추가하기</Button>
    </Modal>
  )
}
