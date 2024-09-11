import { Controller, useForm } from 'react-hook-form'
import { SendProductType } from '@shared/types'
import {
  Button,
  Form,
  ImageInput,
  TextareaInput,
  TextFieldInput,
  Modal,
  ModalTitle,
} from '@shared/ui'
import { CategoryDropdown } from '@widgets/product-add-modal/components'

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
  } = useForm<SendProductType>()

  const description = watch('description')

  const onSubmit = (data: SendProductType) => console.log(data)

  return (
    <Modal onCloseModal={onCloseToggle}>
      <ModalTitle>상품 추가</ModalTitle>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-5 my-[40px] tablet:gap-y-[15px] mobile:gap-y-2.5 mobile:my-5"
      >
        <div className="flex items-center gap-x-5 tablet:gap-x-[15px] mobile:flex-col-reverse mobile:items-start mobile:gap-y-2.5">
          <div className="flex flex-col gap-y-5 tablet:gap-y-[15px] mobile:w-full mobile:gap-y-2.5">
            <TextFieldInput
              placeholder="상품명 (상품 등록 여부를 확인해 주세요)"
              className="h-[70px] tablet:h-[60px] mobile:w-full"
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
          <ImageInput
            {...register('image')}
            setValue={setValue}
            className="tablet:w-[135px] tablet:h-[135px] mobile:w-[140px] mobile:h-[140px]"
          />
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
