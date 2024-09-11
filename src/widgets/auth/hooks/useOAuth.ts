import { useRouter } from 'next/router'

export default function useOAuth() {
  const router = useRouter()

  const googleSignIn = () => {
    const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ID
    const REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI
    const SCOPE = encodeURIComponent(
      'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
    )

    if (!CLIENT_ID || !REDIRECT_URI) {
      console.error('Google OAuth 구성이 누락되었습니다.')
      return
    }

    const googleOAuthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}`

    router.push(googleOAuthUrl)
  }
  return { googleSignIn }
}
