import {
  AutocompleteDropdown,
  AutocompleteField,
  AutocompleteInput,
} from '@/src/shared/ui/autocomplete-field/AutocompleteField'
import React from 'react'

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
    <AutocompleteField
      suggestionList={SUGGESTION_LIST}
      className="w-[360px] h-[70px]"
    >
      <AutocompleteInput />
      <AutocompleteDropdown />
    </AutocompleteField>
  )
}
