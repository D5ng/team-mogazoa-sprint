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
import { isAxiosError } from 'axios'
import { signUp } from '@app/api'
import type { SignUpFieldData } from '@app/types'

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

  const onSubmit = async (data: SignUpFieldData) => {
    try {
      await signUp(data)
      console.log('회원가입 성공')
    } catch (err) {
      if (isAxiosError(err) && err.response) {
        const error = err as any
        const field = Object.keys(
          error.response.data?.details || {},
        )[0] as keyof SignUpFieldData
        const message = error.response.data.message
        setError(field, { type: 'manual', message })
      } else {
        console.error(err)
      }
    }
  }

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

      <Button variant="primary" type="submit">
        회원가입
      </Button>
    </Form>
  )
}
