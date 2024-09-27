import { SignInPage } from '@/src/pages/'
import { NextSeo } from 'next-seo'

export default function SignIn() {
  return (
    <>
      <NextSeo title="모가조아 - 로그인" />
      <SignInPage />
    </>
  )
}
