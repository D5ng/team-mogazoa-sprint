import { useForm } from 'react-hook-form'

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
    watch,
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

  const password = watch('password')

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
          {...register('email', {
            required: '이메일은 필수 입력입니다.',
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: '잘못된 이메일입니다.',
            },
          })}
        />
        {errors?.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="nickname">닉네임</label>
        <input
          id="nickname"
          type="text"
          {...register('nickname', {
            required: '닉네임은 필수 입력입니다.',
            minLength: { value: 2, message: '닉네임은 2자 이상이어야 합니다.' },
            maxLength: { value: 10, message: '닉네임은 10자 이하여야 합니다.' },
          })}
        />
        {errors?.nickname && <p>{errors.nickname.message}</p>}
      </div>

      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              message:
                '비밀번호는 8자 이상이며, 영문, 숫자, 특수문자(@$!%*#?&)를 포함해야 합니다.',
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <label htmlFor="confirmPassword">비밀번호 확인</label>
        <input
          id="confirmPassword"
          type="password"
          {...register('confirmPassword', {
            required: '비밀번호를 입력해주세요.',
            validate: (value) =>
              value === password || '비밀번호가 일치하지 않습니다.',
          })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>
    </form>
  )
}
