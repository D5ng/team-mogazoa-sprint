import { GetServerSideProps } from 'next'
import axios from 'axios'
import { serialize } from 'cookie'
import { socialSignIn } from '@shared/api'

interface GoogleTokenResponse {
  id_token: string
}

const REDIRECT_URI =
  process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI ||
  'http://localhost:3000/auth/callback'

const exchangeCodeForToken = async (code: string): Promise<string> => {
  const tokenEndpoint = 'https://accounts.google.com/o/oauth2/token'
  const data = {
    code,
    client_id: process.env.NEXT_PUBLIC_GOOGLE_ID,
    client_secret: process.env.GOOGLE_SECRET,
    redirect_uri: REDIRECT_URI,
    grant_type: 'authorization_code',
  }

  try {
    const response = await axios.post<GoogleTokenResponse>(tokenEndpoint, data)
    return response.data.id_token
  } catch (error) {
    console.error('Failed to exchange code for token:', error)
    throw new Error('Token exchange failed')
  }
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
    console.error('Invalid or missing code in query parameters')
    return {
      redirect: {
        destination: '/error?message=invalid_code',
        permanent: false,
      },
    }
  }

  try {
    const idToken = await exchangeCodeForToken(code)

    const authResponse = await socialSignIn({
      social: 'google',
      token: idToken,
      redirectUri: REDIRECT_URI,
    })

    setAccessTokenCookie(context.res, authResponse.accessToken)

    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  } catch (error) {
    console.error('Authentication failed:', error)
    return {
      redirect: {
        destination: '/error?message=auth_failed',
        permanent: false,
      },
    }
  }
}

export default function AuthCallback() {
  return <div>권한 검사 중</div>
}
