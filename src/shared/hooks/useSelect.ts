import { useState } from 'react'

interface UseSelect<T> {
  defaultValue: T
}

export default function useSelect<T>({ defaultValue }: UseSelect<T>) {
  const [selectedItem, handleSelectedCategoryItem] = useState<T>(defaultValue)
  const onSelect = (select: T) => handleSelectedCategoryItem(select)
  const resetSelect = () => handleSelectedCategoryItem(defaultValue)

  return {
    selectedItem,
    onSelect,
    resetSelect,
  }
}
