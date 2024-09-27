import { SignInField } from '@widgets/auth/components'
import { OauthField } from '@widgets/auth/components'

export default function SingInPage() {
  return (
    <main className="flex flex-col gap-14 justify-center items-center mt-48 bg-black-80">
      <SignInField />
      <OauthField />
    </main>
  )
}
