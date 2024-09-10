import { useForm } from 'react-hook-form'
import { useAuth } from '@features/auth/hooks'
import { Button, Form } from '@shared/ui'
import {
  FormField,
  FieldLabel,
  FieldInput,
  FieldErrorMessage,
} from '@shared/ui/form-field/FormField'
import {
  emailValidation,
  passwordValidation,
} from '@features/auth/lib/form-validation'
import type { SignInFieldData } from '@features/auth/types/auth.type'

export default function SignInField() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignInFieldData>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { signIn } = useAuth()

  return (
    <Form
      handleSubmit={handleSubmit}
      apiRequest={signIn}
      setError={setError}
      className="w-[640px] flex flex-col gap-y-10 tablet:w-[440px] mobile:w-[335px]"
    >
      <FormField {...register('email', emailValidation)} errors={errors}>
        <FieldLabel>이메일</FieldLabel>
        <FieldInput type="text" placeholder="이메일을 입력해주세요" />
        <FieldErrorMessage />
      </FormField>

      <FormField {...register('password', passwordValidation)} errors={errors}>
        <FieldLabel>비밀번호</FieldLabel>
        <FieldInput type="password" placeholder="비밀번호를 입력해주세요" />
        <FieldErrorMessage />
      </FormField>

      <Button variant="primary" type="submit">
        로그인
      </Button>
    </Form>
  )
}
