import { SignInField } from '@/src/widgets/auth/components'
import Gnb from '@/src/widgets/product/gnb/Gnb'

export default function SingUpPage() {
  return (
    <div className="h-screen">
      <Gnb />
      <main className="w-full h-full flex justify-center items-center bg-black-80">
        <SignInField />
      </main>
    </div>
  )
}
