import { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useSignUp } from '@widgets/auth/hooks'
import { Button, Form } from '@shared/ui'
import {
  FormField,
  FieldLabel,
  FieldInput,
} from '@shared/ui/form-field/FormField'
import {
  emailValidation,
  nicknameValidation,
  passwordValidation,
  passwordConfirmationValidation,
} from '@widgets/auth/lib/form-validation'
import { SignUp } from '@shared/types'

export default function SignUpField() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    trigger,
    watch,
  } = useForm<SignUp>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      nickname: '',
      password: '',
      passwordConfirmation: '',
    },
  })

  const password = watch('password')

  useEffect(() => {
    if (password !== '') {
      trigger('passwordConfirmation')
    }
  }, [password, trigger])

  const { mutate, isPending } = useSignUp(setError)

  const onSubmit: SubmitHandler<SignUp> = (data) => {
    mutate(data)
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[640px] flex flex-col gap-y-10 tablet:w-[440px] mobile:w-[335px]"
    >
      <FormField {...register('email', emailValidation)} errors={errors}>
        <FieldLabel>이메일</FieldLabel>
        <FieldInput type="text" placeholder="이메일을 입력해주세요" />
      </FormField>

      <FormField {...register('nickname', nicknameValidation)} errors={errors}>
        <FieldLabel>닉네임</FieldLabel>
        <FieldInput type="text" placeholder="닉네임을 입력해주세요" />
      </FormField>

      <FormField {...register('password', passwordValidation)} errors={errors}>
        <FieldLabel>비밀번호</FieldLabel>
        <FieldInput type="password" placeholder="비밀번호를 입력해주세요" />
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
      </FormField>

      <Button
        variant="primary"
        type="submit"
        disabled={!isValid}
        isLoading={isPending}
      >
        회원가입
      </Button>
    </Form>
  )
}
