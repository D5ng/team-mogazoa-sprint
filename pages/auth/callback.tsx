import { GetServerSideProps } from 'next'
import axios from 'axios'
import { serialize } from 'cookie'
import { socialSignIn } from '@shared/api'
import type { ServerResponse } from 'http'

interface GoogleTokenResponse {
  id_token: string
}

const exchangeCodeForToken = async (code: string): Promise<string> => {
  const tokenEndpoint = 'https://accounts.google.com/o/oauth2/token'
  const data = {
    code,
    client_id: process.env.NEXT_PUBLIC_GOOGLE_ID,
    client_secret: process.env.GOOGLE_SECRET,
    redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
    grant_type: 'authorization_code',
  }

  const response = await axios.post<GoogleTokenResponse>(tokenEndpoint, data)
  return response.data.id_token
}

const setAccessTokenCookie = (res: ServerResponse, token: string) => {
  res.setHeader(
    'Set-Cookie',
    serialize('accessToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 60 * 60 * 24 * 7,
      sameSite: 'strict',
      path: '/',
    }),
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { code } = context.query

    if (typeof code !== 'string') {
      throw new Error('인증 코드가 잘못되었거나 누락되었습니다.')
    }

    const idToken = await exchangeCodeForToken(code)

    const authResponse = await socialSignIn({
      social: 'google',
      token: idToken,
      redirectUri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI!,
    })

    setAccessTokenCookie(context.res, authResponse.accessToken)

    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  } catch (error) {
    console.error(error)
    if (axios.isAxiosError(error)) {
      console.error(error.response?.data)
      console.error(error.response?.status)
    }
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    }
  }
}

export default function AuthCallback() {
  return <div>권한 검사 중</div>
}
