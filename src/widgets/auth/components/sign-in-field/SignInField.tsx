import { useForm, SubmitHandler } from 'react-hook-form'
import { useSignIn } from '@widgets/auth/hooks'
import { Button, Form } from '@shared/ui'
import {
  FormField,
  FieldLabel,
  FieldInput,
} from '@shared/ui/form-field/FormField'
import {
  emailValidation,
  passwordValidation,
} from '@widgets/auth/lib/form-validation'
import type { SignIn } from '@shared/types'

export default function SignInField() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<SignIn>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { mutate, isPending } = useSignIn(setError)

  const onSubmit: SubmitHandler<SignIn> = (data) => {
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

      <FormField {...register('password', passwordValidation)} errors={errors}>
        <FieldLabel>비밀번호</FieldLabel>
        <FieldInput type="password" placeholder="비밀번호를 입력해주세요" />
      </FormField>

      <Button
        variant="primary"
        type="submit"
        disabled={!isValid && isPending}
        isLoading={isPending}
      >
        로그인
      </Button>
    </Form>
  )
}
