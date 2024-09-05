import AutocompleteTextFieldInput from '@/src/shared/ui/autocompleteInput/AutocompleteInput'
import TextFieldInput from '@/src/shared/ui/text-field-input/TextFieldInput'

const SUGGESTION_LIST = [
  'Air Pods Max',
  'Air Pods 1',
  'Air Pods Pro',
  'Air Pods Pro 2',
  '갤럭시 S24',
  '갤럭시 S24 Ultra',
  '갤럭시 Z 플립 5',
  '갤럭시 Z 폴드 6',
]

export default function index() {
  return (
    <>
      <TextFieldInput placeholder="상품명" className="w-[360px] h-[70px]" />
      <AutocompleteTextFieldInput
        placeholder="상품명"
        suggestionList={SUGGESTION_LIST}
        className="w-[360px] h-[70px]"
      />
    </>
  )
}
