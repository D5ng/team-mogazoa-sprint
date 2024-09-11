import { SignUpField } from '@features/auth/components'
import Gnb from '@widgets/Gnb/Gnb'

export default function SingUpPage() {
  return (
    <div className="h-screen">
      <Gnb />
      <main className="w-full h-full flex justify-center items-center bg-black-80">
        <SignUpField />
      </main>
    </div>
  )
}
