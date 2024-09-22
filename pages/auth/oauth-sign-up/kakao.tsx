import OauthSignUpPage from '@/src/pages/auth/oauth-sign-up/OauthSignUpPage'
import { NextSeo } from 'next-seo'

export default function kakao() {
  return (
    <>
      <NextSeo title="모가조아 - 카카오 로그인" />
      <OauthSignUpPage />
    </>
  )
}
