import { useForm } from 'react-hook-form'
import { Button, Form } from '@shared/ui'
import {
  FormField,
  FieldLabel,
  FieldInput,
  FieldErrorMessage,
} from '@/src/shared/ui/form-field/FormField'
import {
  emailValidation,
  nicknameValidation,
  passwordValidation,
  passwordConfirmationValidation,
} from '@features/auth/lib/form-validation'
import { signUp } from '@app/api'
import type { SignUpFieldData } from '@features/auth/types/auth.type'
import { useSignUp } from '@/src/features/auth/hooks/useSignUp'

export default function SignUpField() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignUpFieldData>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      nickname: '',
      password: '',
      passwordConfirmation: '',
    },
  })

  const { onSubmit, isLoading } = useSignUp(signUp, setError)

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[640px] flex flex-col gap-y-10 tablet:w-[440px] mobile:w-[335px]"
    >
      <FormField {...register('email', emailValidation)} errors={errors}>
        <FieldLabel>이메일</FieldLabel>
        <FieldInput type="text" placeholder="이메일을 입력해주세요" />
        <FieldErrorMessage />
      </FormField>

      <FormField {...register('nickname', nicknameValidation)} errors={errors}>
        <FieldLabel>닉네임</FieldLabel>
        <FieldInput type="text" placeholder="닉네임을 입력해주세요" />
        <FieldErrorMessage />
      </FormField>

      <FormField {...register('password', passwordValidation)} errors={errors}>
        <FieldLabel>비밀번호</FieldLabel>
        <FieldInput type="password" placeholder="비밀번호를 입력해주세요" />
        <FieldErrorMessage />
      </FormField>

      <FormField
        {...register('passwordConfirmation', passwordConfirmationValidation)}
        errors={errors}
      >
        <FieldLabel>비밀번호 확인</FieldLabel>
        <FieldInput
          type="password"
          placeholder="비밀번호를 한번 더 입력해주세요"
        />
        <FieldErrorMessage />
      </FormField>

      <Button variant="primary" type="submit" isLoading={isLoading}>
        회원가입
      </Button>
    </Form>
  )
}
