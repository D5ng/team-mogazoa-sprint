import { GetServerSideProps } from 'next'
import axios from 'axios'
import { axiosInstance } from '@/src/shared/config'
import { serialize } from 'cookie'

interface GoogleTokenResponse {
  id_token: string
}

interface OAuthData {
  redirectUri: string
  token: string
}

const REDIRECT_URI = 'http://localhost:3000/auth/callback'

const exchangeCodeForToken = async (code: string): Promise<string> => {
  const tokenEndpoint = 'https://accounts.google.com/o/oauth2/token'
  const data = {
    code,
    client_id: process.env.NEXT_PUBLIC_GOOGLE_ID,
    client_secret: process.env.GOOGLE_SECRET,
    redirect_uri: REDIRECT_URI,
    grant_type: 'authorization_code',
  }

  const response = await axios.post<GoogleTokenResponse>(tokenEndpoint, data)
  return response.data.id_token
}

const signInWithGoogle = async (token: string): Promise<string> => {
  const oAuthData: OAuthData = {
    redirectUri: REDIRECT_URI,
    token,
  }

  const response = await axiosInstance.post('/auth/signIn/google', oAuthData)
  return response.data.accessToken
}

const setAccessTokenCookie = (res: any, token: string) => {
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
  const { code } = context.query

  if (typeof code !== 'string') {
    return { props: {} }
  }

  try {
    const idToken = await exchangeCodeForToken(code)
    const accessToken = await signInWithGoogle(idToken)
    setAccessTokenCookie(context.res, accessToken)

    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  } catch (error) {
    console.error(error)
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
