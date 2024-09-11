import { useForm } from 'react-hook-form'
import { Button, Form } from '@shared/ui'
import {
  FormField,
  FieldLabel,
  FieldInput,
  FieldErrorMessage,
} from '@shared/ui/form-field/FormField'
import { nicknameValidation } from '@/src/widgets/auth/lib/form-validation'
import type { NicknameFieldData } from '@/src/widgets/auth/types/auth.type'

interface NicknameFieldProps {
  onSubmit: (data: NicknameFieldData) => Promise<void>
}

export default function NicknameField({ onSubmit }: NicknameFieldProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useForm<NicknameFieldData>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: {
      nickname: '',
    },
  })

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[640px] flex flex-col gap-y-10 tablet:w-[440px] mobile:w-[335px]"
    >
      <FormField {...register('nickname', nicknameValidation)} errors={errors}>
        <FieldLabel>닉네임</FieldLabel>
        <FieldInput type="text" placeholder="닉네임을 입력해주세요" />
        <FieldErrorMessage />
      </FormField>

      <Button
        variant="primary"
        type="submit"
        disabled={!(isValid && isDirty)}
        isLoading={isSubmitting}
      >
        가입하기
      </Button>
    </Form>
  )
}
