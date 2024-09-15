import { NicknameFieldData } from '@shared/types/auth/auth.type'
import NicknameField from '@widgets/auth/components/nickname-field/NicknameField'

export default function SocialSignUpPage() {
  return (
    <main className="w-full min-h-screen flex justify-center items-center mt-24 tablet:mt-48 mobile:mt-20 bg-black-80">
      <NicknameField />
    </main>
  )
}
