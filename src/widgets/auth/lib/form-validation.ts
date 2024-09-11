import type { RegisterOptions } from 'react-hook-form'
import type { SignUpFieldData } from '@/src/widgets/auth/types/auth.type'

export const emailValidation = {
  required: '이메일은 필수 입력입니다.',
  pattern: {
    value:
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    message: '잘못된 이메일입니다.',
  },
} as const

export const nicknameValidation = {
  required: '닉네임은 필수 입력입니다.',
  minLength: {
    value: 2,
    message: '닉네임은 2자 이상이어야 합니다.',
  },
  maxLength: {
    value: 10,
    message: '닉네임은 10자 이하여야 합니다.',
  },
} as const

export const passwordValidation = {
  required: '비밀번호를 입력해주세요.',
  minLength: {
    value: 8,
    message: '최소 8자 이상의 비밀번호를 입력해주세요.',
  },
  maxLength: {
    value: 64,
    message: '비밀번호는 64자를 초과하면 안됩니다.',
  },
  pattern: {
    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,64}$/,
    message:
      '비밀번호는 8자 이상이며, 영문, 숫자, 특수문자(@$!%*#?&)를 포함해야 합니다.',
  },
} as const

export const passwordConfirmationValidation: RegisterOptions<
  SignUpFieldData,
  'passwordConfirmation'
> = {
  required: '비밀번호를 입력해주세요.',
  validate: (value, formValues) =>
    value === formValues.password || '비밀번호가 일치하지 않습니다.',
} as const
