import { SignUpField } from '@features/auth/components'
import Gnb from '@widgets/Gnb/Gnb'

export default function SingUpPage() {
  return (
    <>
      <Gnb />
      <main className="w-screen h-screen flex justify-center items-center bg-black-80">
        <SignUpField />
      </main>
    </>
  )
}
