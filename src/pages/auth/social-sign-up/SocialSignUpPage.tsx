import { NicknameFieldData } from '@shared/types/auth/auth.type'
import NicknameField from '@widgets/auth/components/nickname-field/NicknameField'

interface SocialSignUpPageProps {
  handleSubmit: (data: NicknameFieldData) => Promise<void>
}

export default function SocialSignUpPage({
  handleSubmit,
}: SocialSignUpPageProps) {
  return (
    <main className="w-full min-h-screen flex justify-center items-center mt-24 tablet:mt-48 mobile:mt-20 bg-black-80">
      <NicknameField onSubmit={handleSubmit} />
    </main>
  )
}
