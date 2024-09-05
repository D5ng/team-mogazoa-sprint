import type { TextFieldInputProps } from '@shared/ui/text-field-input/TextFieldInput.type'

export interface AutocompleteInputProps extends TextFieldInputProps {
  suggestionList: string[]
}
