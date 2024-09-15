import { useForm } from 'react-hook-form'
import { Button, Form } from '@shared/ui'
import {
  FormField,
  FieldLabel,
  FieldInput,
} from '@shared/ui/form-field/FormField'
import { nicknameValidation } from '@widgets/auth/lib/form-validation'
import type { NicknameFieldData } from '@shared/types'
import type { NicknameFieldProps } from '@widgets/auth/components/nickname-field/NicknameField.type'

export default function NicknameField() {
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

  const onSubmit = async (data: NicknameFieldData) => {
    const uri = `https://kauth.kakao.com/oauth/authorize?client_id=ca3528350b4d4fd6a868e561b970f195&redirect_uri=http://localhost:3000/api/kakao/signUp&response_type=code&state=${encodeURIComponent(data.nickname)}`
    window.location.href = uri
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[640px] flex flex-col gap-y-10 tablet:w-[440px] mobile:w-[335px]"
    >
      <FormField {...register('nickname', nicknameValidation)} errors={errors}>
        <FieldLabel>닉네임</FieldLabel>
        <FieldInput type="text" placeholder="닉네임을 입력해주세요" />
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
