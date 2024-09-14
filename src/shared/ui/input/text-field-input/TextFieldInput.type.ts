import { UseFormSetValue, ChangeHandler } from 'react-hook-form'
import type { SendProductType } from '@shared/types'

// UseFormSetValue<ProductAddType> | UseFormSetValue<ProductAddType> |
type SetValueTypes = UseFormSetValue<SendProductType>

export interface TextFieldInputProps {
  placeholder: string
  setValue: SetValueTypes
  onBlur: ChangeHandler
  name: keyof SendProductType
  errors: Record<string, any>
  className?: string
}
