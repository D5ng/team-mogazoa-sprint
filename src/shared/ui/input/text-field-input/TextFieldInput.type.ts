import { UseFormSetValue } from 'react-hook-form'
import type { SendProductType } from '@shared/types'

// UseFormSetValue<ProductAddType> | UseFormSetValue<ProductAddType> |
type SetValueTypes = UseFormSetValue<SendProductType>

export interface TextFieldInputProps {
  placeholder: string
  setValue: SetValueTypes
  name: keyof SendProductType
  className?: string
}
