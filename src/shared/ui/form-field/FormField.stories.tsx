import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { FormField, FieldLabel, FieldInput } from './FormField'
import { Button } from '@shared/ui'
import {
  emailValidation,
  nicknameValidation,
  passwordValidation,
  passwordConfirmationValidation,
} from '@widgets/auth/lib/form-validation'

type Story = StoryObj<typeof FormField>

const meta: Meta<typeof FormField> = {
  title: 'form-field',
  component: FormField,
  tags: ['autodocs'],
}

const FormFieldExample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  })

  const onSubmit = (data: any) => {
    console.log(data)
    console.log(errors)
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
  // 1. 유효한 이메일 주소를 입력하고 제출
  // 2. 잘못된 형식의 이메일을 입력하고 에러 메시지 확인
  // 3. 빈 필드로 제출하고 필수 입력 에러 메시지 확인
  // 4. 콘솔 로그 확인하여 제출된 데이터와 에러 확인
}

export const WithNickname: Story = {
  render: () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
    const onSubmit = (data: any) => console.log(data)

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          {...register('nickname', nicknameValidation)}
          errors={errors}
        >
          <FieldLabel>닉네임</FieldLabel>
          <FieldInput type="text" placeholder="닉네임을 입력해주세요" />
        </FormField>
        <Button type="submit" variant="primary" className="mt-4">
          제출
        </Button>
      </form>
    )
  },
  // 1. 2-10자 사이의 유효한 닉네임 입력하고 제출하기
  // 2. 1자 닉네임 입력하고 에러 메시지 확인하기
  // 3. 11자 이상 닉네임 입력하고 에러 메시지 확인하기
  // 4. 빈 필드 제출하고 필수 입력 에러 메시지 확인하기
}

export const WithPassword: Story = {
  render: () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
    const onSubmit = (data: any) => console.log(data)

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          {...register('password', passwordValidation)}
          errors={errors}
        >
          <FieldLabel>비밀번호</FieldLabel>
          <FieldInput type="password" placeholder="비밀번호를 입력해주세요" />
        </FormField>
        <Button type="submit" variant="primary" className="mt-4">
          제출
        </Button>
      </form>
    )
  },
  // 1. 유효한 비밀번호 입력하고 제출
  // 2. 7자 이하 비밀번호 입력하고 에러 메시지 확인
  // 3. 특수문자 없는 비밀번호 입력하고 에러 메시지 확인
  // 4. 숫자 없는 비밀번호 입력하고 에러 메시지 확인
  // 5. 빈 필드 제출하고 필수 입력 에러 메시지 확인
}

export const WithPasswordConfirmation: Story = {
  render: () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
    } = useForm()
    const password = watch('password')
    const onSubmit = (data: any) => console.log(data)

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          {...register('password', passwordValidation)}
          errors={errors}
        >
          <FieldLabel>비밀번호</FieldLabel>
          <FieldInput type="password" placeholder="비밀번호를 입력해주세요" />
        </FormField>
        <FormField
          {...register('passwordConfirmation', {
            ...passwordConfirmationValidation,
            validate: (value) =>
              value === password || '비밀번호가 일치하지 않습니다.',
          })}
          errors={errors}
        >
          <FieldLabel>비밀번호 확인</FieldLabel>
          <FieldInput
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
          />
        </FormField>
        <Button type="submit" variant="primary" className="mt-4">
          제출
        </Button>
      </form>
    )
  },
  // 1. 유효한 비밀번호 입력하고, 확인 필드에 동일한 비밀번호를 입력한 후 제출
  // 2. 비밀번호 확인 필드에 다른 비밀번호를 입력하고 에러 메시지 확인
  // 3. 비밀번호 입력하고 확인 필드는 비워둔 채로 제출하고 에러 메시지 확인
  // 4. 두 필드 모두 비우고 제출하여 필수 입력 에러 메시지 확인
}

export default meta
