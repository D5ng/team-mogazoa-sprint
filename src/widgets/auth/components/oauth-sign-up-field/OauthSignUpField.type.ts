import { NicknameFieldData } from '@shared/types'

export interface NicknameFieldProps {
  onSubmit: (data: NicknameFieldData) => Promise<void>
}
