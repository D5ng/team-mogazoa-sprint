import { useForm } from 'react-hook-form'
import formValidations from '@/src/shared/lib/form-validation'

interface SignUpFormData {
  email: string
  nickname: string
  password: string
  confirmPassword: string
}

export default function SignUpForm() {
  const {
    register,
    handleSubmit: onSubmit,
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

  const handleSubmit = (data: SignUpFormData) => {
    console.log(data)
  }

  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      <div>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="text"
          placeholder="이메일을 입력해주세요"
          {...register('email', formValidations.email)}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="nickname">닉네임</label>
        <input
          id="nickname"
          type="text"
          placeholder="닉네임을 입력해주세요"
          {...register('nickname', formValidations.nickname)}
        />
        {errors.nickname && <p>{errors.nickname.message}</p>}
      </div>

      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          {...register('password', formValidations.password)}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <label htmlFor="confirmPassword">비밀번호 확인</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="비밀번호를 한번 더 입력해주세요"
          {...register('confirmPassword', formValidations.confirmPassword)}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      <button type="submit">회원가입</button>
    </form>
  )
}
