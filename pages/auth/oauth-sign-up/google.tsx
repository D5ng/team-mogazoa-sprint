import OauthSignUpPage from '@/src/pages/auth/oauth-sign-up/OauthSignUpPage'
import { NextSeo } from 'next-seo'

export default function Google() {
  return (
    <>
      <NextSeo title="모가조아 - 구글 로그인" />
      <OauthSignUpPage />
    </>
  )
}
