import { Meta, StoryObj } from '@storybook/react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FormField, FieldLabel, FieldInput } from './FormField'
import { Button } from '@shared/ui'
import {
  emailValidation,
  nicknameValidation,
  passwordValidation,
  passwordConfirmationValidation,
} from '@widgets/auth/lib/form-validation'
import { registerHandler } from '@shared/mocks/auth'
import { SignUp } from '@shared/types'

const meta: Meta<typeof FormField> = {
  title: 'UI/FormField',
  component: FormField,
  argTypes: {
    errors: {
      description: 'React Hook Form의 errors 객체입니다.',
    },
  },
  parameters: {
    msw: {
      handlers: [registerHandler],
    },
  },
}

export default meta

type Story = StoryObj<typeof FormField>

export const SignUpForm: Story = {
  name: 'Sign Up Form',
  render: () => {
    const {
      register,
      handleSubmit,
      formState: { errors, isValid, isSubmitting },
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

    const onSubmit = async (data: any) => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signUp`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          },
        )
        const result = await response.json()
        alert(result.message)
      } catch (error) {
        console.error(error)
        alert('회원가입 중 오류가 발생했습니다.')
      }
    }

    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[640px] flex flex-col gap-y-10 "
      >
        <FormField {...register('email', emailValidation)} errors={errors}>
          <FieldLabel>이메일</FieldLabel>
          <FieldInput type="text" placeholder="이메일을 입력해주세요" />
        </FormField>
        <FormField
          {...register('nickname', nicknameValidation)}
          errors={errors}
        >
          <FieldLabel>닉네임</FieldLabel>
          <FieldInput type="text" placeholder="닉네임을 입력해주세요" />
        </FormField>
        <FormField
          {...register('password', passwordValidation)}
          errors={errors}
        >
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
          isLoading={isSubmitting}
          className="mt-4"
        >
          회원가입
        </Button>
      </form>
    )
  },
}
