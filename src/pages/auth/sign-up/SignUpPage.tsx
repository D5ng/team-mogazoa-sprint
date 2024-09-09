import { SignUpField } from '@features/auth/components'
import Gnb from '@widgets/Gnb/Gnb'

export default function SingUpPage() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <Gnb />
      <SignUpField />
    </main>
  )
}
