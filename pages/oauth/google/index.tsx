import { useRouter } from 'next/router'
import { socialSignUp } from '@shared/api'
import { serialize } from 'cookie'
import SocialSignUpPage from '@/src/pages//auth/social-sign-up/SocialSignUpPage'

export default function SocialAuth({ idToken }: { idToken: string }) {
  const router = useRouter()

  const handleSubmit = async (data: { nickname: string }) => {
    try {
      const response = await socialSignUp({
        social: 'google',
        token: idToken,
        redirectUri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI!,
        nickname: data.nickname,
      })

      document.cookie = serialize('accessToken', response.accessToken, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
      })

      document.cookie = serialize('idToken', '', {
        path: '/',
        maxAge: -1,
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
      })

      router.push('/')
    } catch (error) {
      console.error(error)
      router.push('/error')
    }
  }

  return <SocialSignUpPage handleSubmit={handleSubmit} />
}
