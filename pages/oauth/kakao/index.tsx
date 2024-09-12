import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { serialize } from 'cookie'
import { User } from '@shared/types'
import { socialSignUp } from '@shared/api'
import SocialSignUpPage from '@/src/pages/auth/social-sign-up/SocialSignUpPage'

export interface SignInResponse {
  accessToken: string
  user: User
}

export default function KakaoSocialAuth() {
  const router = useRouter()
  const { code } = router.query

  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (data: { nickname: string }) => {
    try {
      if (!code || typeof code !== 'string') {
        throw new Error('유효하지 않은 kakao code입니다.')
      }

      const kakaoRedirectUri = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI

      const result = await socialSignUp({
        social: 'kakao',
        nickname: data.nickname,
        redirectUri: kakaoRedirectUri,
        token: code,
      })

      document.cookie = serialize('accessToken', result.accessToken, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
      })

      router.push('/')
    } catch (error) {
      console.error(error)
      setError(
        error instanceof Error
          ? error.message
          : '알 수 없는 오류가 발생했습니다.',
      )
    }
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return <SocialSignUpPage handleSubmit={handleSubmit} />
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { code } = context.query

  if (!code) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
