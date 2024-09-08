import { useForm } from 'react-hook-form'
import {
  AutocompleteDropdown,
  AutocompleteField,
  AutocompleteInput,
  Form,
} from '@shared/ui'
import {
  FormField,
  FieldLabel,
  FieldInput,
  FieldErrorMessage,
} from '@features/auth/components/form-field/FormField'
import {
  emailValidation,
  nicknameValidation,
  passwordValidation,
  confirmPasswordValidation,
} from '@features/auth/lib/form-validation'

export interface SignUpFormData {
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

  const SUGGESTION_LIST = [
    '갤럭시 S21 Ultra',
    '아이폰 13 Pro',
    '갤럭시 Z Fold3',
    '아이폰 12',
    '갤럭시 A52',
    '아이폰 SE',
    '갤럭시 S22+',
    '아이폰 14 Pro Max',
    '갤럭시 Z Flip4',
    '아이폰 11',
  ]

  return (
    // <Form
    //   onSubmit={handleSubmit(onSubmit)}
    //   className="w-[640px] flex flex-col gap-y-10"
    // >
    //   <FormField {...register('email', emailValidation)} errors={errors}>
    //     <FieldLabel>이메일</FieldLabel>
    //     <FieldInput type="text" placeholder="이메일을 입력해주세요" />
    //     <FieldErrorMessage />
    //   </FormField>

    //   <FormField {...register('nickname', nicknameValidation)} errors={errors}>
    //     <FieldLabel>닉네임</FieldLabel>
    //     <FieldInput type="text" placeholder="닉네임을 입력해주세요" />
    //     <FieldErrorMessage />
    //   </FormField>

    //   <FormField {...register('password', passwordValidation)} errors={errors}>
    //     <FieldLabel>비밀번호</FieldLabel>
    //     <FieldInput type="password" placeholder="비밀번호를 입력해주세요" />
    //     <FieldErrorMessage />
    //   </FormField>

    //   <FormField
    //     {...register('confirmPassword', confirmPasswordValidation)}
    //     errors={errors}
    //   >
    //     <FieldLabel>비밀번호 확인</FieldLabel>
    //     <FieldInput
    //       type="password"
    //       placeholder="비밀번호를 한번 더 입력해주세요"
    //     />
    //     <FieldErrorMessage />
    //   </FormField>

    //   <button type="submit">회원가입</button>
    // </Form>
    <AutocompleteField suggestionList={SUGGESTION_LIST}>
      <AutocompleteInput />
      <AutocompleteDropdown />
    </AutocompleteField>
  )
}
