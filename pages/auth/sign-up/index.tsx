import { SignUpPage } from '@/src/pages/'
import { NextSeo } from 'next-seo'

export default function SignUp() {
  return (
    <>
      <NextSeo title="모가조아 - 회원가입" />
      <SignUpPage />
    </>
  )
}
