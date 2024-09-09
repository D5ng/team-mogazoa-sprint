import { Controller, useForm } from 'react-hook-form'
import { ProductAddType } from '@app/types'
import {
  Button,
  Form,
  ImageInput,
  TextareaInput,
  TextFieldInput,
  Modal,
  ModalTitle,
} from '@shared/ui'
import { CategoryDropdown } from '@features/product-add-modal/components'

interface ProductAddModalProps {
  onCloseToggle: () => void
}

export default function ProductAddModal({
  onCloseToggle,
}: ProductAddModalProps) {
  const {
    formState: { errors },
    register,
    handleSubmit,
    watch,
    setValue,
    control,
  } = useForm<ProductAddType>()

  const description = watch('description')

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
              setValue={setValue}
              {...register('name')}
            />

            <Controller
              name="categoryId"
              control={control}
              render={({ field }) => {
                const { onChange } = field
                return <CategoryDropdown onChange={onChange} />
              }}
            />
          </div>
          <ImageInput {...register('image')} setValue={setValue} />
        </div>
        <TextareaInput
          {...register('description')}
          value={description}
          placeholder="상품 설명을 입력해주세요"
        />
      </Form>
      <Button variant="primary">추가하기</Button>
    </Modal>
  )
}
