import { UseFormRegisterReturn, UseFormSetValue } from 'react-hook-form'
import { SendProductType } from '@shared/types'

type SetValueTypes = UseFormSetValue<SendProductType>
export interface ImageInputProps extends UseFormRegisterReturn {
  setValue: SetValueTypes
  className?: string
  name: keyof SendProductType
}
