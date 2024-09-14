import { SignInField } from '@widgets/auth/components'
import SnsField from '@widgets/auth/components/sns-field/SnsField'

export default function SingInPage() {
  return (
    <main className="flex flex-col gap-14 justify-center items-center mt-48 bg-black-80">
      <SignInField />
      <SnsField />
    </main>
  )
}