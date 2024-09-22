import { useForm, SubmitHandler } from 'react-hook-form'
import { FormField, FieldLabel, FieldInput } from './FormField'
import { Button } from '@shared/ui'
import {
  emailValidation,
  nicknameValidation,
  passwordValidation,
  passwordConfirmationValidation,
} from '@widgets/auth/lib/form-validation'
import type { Meta, StoryObj } from '@storybook/react'

type FormData = {
  email: string
  nickname: string
  password: string
  passwordConfirmation: string
}

type Story = StoryObj<typeof FormField>

const meta: Meta<typeof FormField> = {
  title: 'shared/ui/FormField',
  component: FormField,
  tags: ['autodocs'],
}

const FormFieldExample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onTouched',
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[400px]">
      <FormField {...register('email', emailValidation)} errors={errors}>
        <FieldLabel>이메일</FieldLabel>
        <FieldInput type="text" placeholder="이메일을 입력해주세요" />
      </FormField>
      <Button type="submit" variant="primary" className="mt-4">
        제출
      </Button>
    </form>
  )
}

export const Default: Story = {
  render: () => <FormFieldExample />,
  parameters: {
    docs: {
      description: '기본 이메일 입력 폼 필드입니다.',
    },
  },
}

export const WithNickname: Story = {
  render: () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>()
    const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[640px] flex flex-col gap-y-10 tablet:w-[440px] mobile:w-[335px]"
      >
        <FormField
          {...register('nickname', nicknameValidation)}
          errors={errors}
        >
          <FieldLabel>닉네임</FieldLabel>
          <FieldInput type="text" placeholder="닉네임을 입력해주세요" />
        </FormField>
        <Button type="submit" variant="primary">
          제출
        </Button>
      </form>
    )
  },
  parameters: {
    docs: {
      description: '닉네임 입력 폼 필드입니다.',
    },
  },
}

export const WithPassword: Story = {
  render: () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>()
    const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[640px] flex flex-col gap-y-10 tablet:w-[440px] mobile:w-[335px]"
      >
        <FormField
          {...register('password', passwordValidation)}
          errors={errors}
        >
          <FieldLabel>비밀번호</FieldLabel>
          <FieldInput type="password" placeholder="비밀번호를 입력해주세요" />
        </FormField>
        <Button type="submit" variant="primary">
          제출
        </Button>
      </form>
    )
  },
}

export const WithPasswordConfirmation: Story = {
  render: () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>()

    const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[640px] flex flex-col gap-y-10 tablet:w-[440px] mobile:w-[335px]"
      >
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
        <Button type="submit" variant="primary">
          제출
        </Button>
      </form>
    )
  },
}

export const AllFields: Story = {
  render: () => {
    const {
      register,
      handleSubmit,
      formState: { errors, isValid, isSubmitting },
    } = useForm<FormData>()
    const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[640px] flex flex-col gap-y-10 tablet:w-[440px] mobile:w-[335px]"
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
        >
          회원가입
        </Button>
      </form>
    )
  },
  parameters: {
    docs: {
      description: '모든 폼 필드입니다. 회원가입에서 사용될 수 있습니다.',
    },
  },
}

export default meta
