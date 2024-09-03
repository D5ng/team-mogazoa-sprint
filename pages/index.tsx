import React from 'react'
import { useForm } from 'react-hook-form'
import formValidations from '@/src/shared/lib/form-validation'
import {
  FormField,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@/src/shared/ui/form-field/FormField'

interface SignUpFormData {
  email: string
  nickname: string
  password: string
  confirmPassword: string
}

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      nickname: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = (data: SignUpFormData) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        name="email"
        register={register}
        errors={errors}
        validation={formValidations.email}
      >
        <FormLabel>이메일</FormLabel>
        <Input type="text" placeholder="이메일을 입력해주세요" />
        <FormErrorMessage />
      </FormField>

      <FormField
        name="nickname"
        register={register}
        errors={errors}
        validation={formValidations.nickname}
      >
        <FormLabel>닉네임</FormLabel>
        <Input type="text" placeholder="닉네임을 입력해주세요" />
        <FormErrorMessage />
      </FormField>

      <FormField
        name="password"
        register={register}
        errors={errors}
        validation={formValidations.password}
      >
        <FormLabel>비밀번호</FormLabel>
        <Input type="password" placeholder="비밀번호를 입력해주세요" />
        <FormErrorMessage />
      </FormField>

      <FormField
        name="confirmPassword"
        register={register}
        errors={errors}
        validation={formValidations.confirmPassword}
      >
        <FormLabel>비밀번호 확인</FormLabel>
        <Input type="password" placeholder="비밀번호를 한번 더 입력해주세요" />
        <FormErrorMessage />
      </FormField>

      <button type="submit">회원가입</button>
    </form>
  )
}
