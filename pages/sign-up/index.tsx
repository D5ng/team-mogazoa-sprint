import { useForm } from 'react-hook-form'
import { Form } from '@/src/shared/ui/form/Form'
import {
  FormField,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@/src/shared/ui/form-field/FormField'
import {
  emailValidation,
  nicknameValidation,
  passwordValidation,
  confirmPasswordValidation,
} from '@/src/shared/lib/form-validation'

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
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[640px] flex flex-col gap-y-10"
    >
      <FormField
        name="email"
        register={register}
        errors={errors}
        validation={emailValidation}
      >
        <FormLabel>이메일</FormLabel>
        <Input type="text" placeholder="이메일을 입력해주세요" />
        <FormErrorMessage />
      </FormField>

      <FormField
        name="nickname"
        register={register}
        errors={errors}
        validation={nicknameValidation}
      >
        <FormLabel>닉네임</FormLabel>
        <Input type="text" placeholder="닉네임을 입력해주세요" />
        <FormErrorMessage />
      </FormField>

      <FormField
        name="password"
        register={register}
        errors={errors}
        validation={passwordValidation}
      >
        <FormLabel>비밀번호</FormLabel>
        <Input type="password" placeholder="비밀번호를 입력해주세요" />
        <FormErrorMessage />
      </FormField>

      <FormField
        name="confirmPassword"
        register={register}
        errors={errors}
        validation={confirmPasswordValidation}
      >
        <FormLabel>비밀번호 확인</FormLabel>
        <Input type="password" placeholder="비밀번호를 한번 더 입력해주세요" />
        <FormErrorMessage />
      </FormField>

      <button type="submit">회원가입</button>
    </Form>
  )
}
