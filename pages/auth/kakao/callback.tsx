import { GetServerSideProps } from 'next'
import { serialize } from 'cookie'
import { User } from '@/src/shared/types'
import { socialSignIn } from '@shared/api'

export type OauthToken = string | string[]

export interface SignInWithOauthRequestBody {
  redirectUri: string
  token: OauthToken
}

export interface SignInResponse {
  accessToken: string
  user: User
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { code } = context.query

    if (!code || typeof code !== 'string') {
      throw new Error('유효하지 않은 kakao code입니다.')
    }

    const kakaoRedirectUri = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI

    const result = await socialSignIn({
      social: 'kakao',
      redirectUri: kakaoRedirectUri,
      token: code,
    })

    context.res.setHeader('Set-Cookie', [
      serialize('accessToken', result.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 60 * 60 * 24 * 7,
        sameSite: 'strict',
        path: '/',
      }),
    ])

    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  } catch (error) {
    console.error(error)

    if (error instanceof Error && error.message.includes('403')) {
      return {
        redirect: {
          destination: '/oauth/kakao',
          permanent: false,
        },
      }
    }

    return {
      props: {},
    }
  }
}

export default function AuthCallback() {
  return <div>권한 검사 중</div>
}
