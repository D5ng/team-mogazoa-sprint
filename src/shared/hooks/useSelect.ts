import { useState } from 'react'

interface UseSelect<T> {
  defaultValue: T
}

export default function useSelect<T>({ defaultValue }: UseSelect<T>) {
  const [selectedItem, setSelectedItem] = useState<T>(defaultValue)
  const onSelect = (select: T) => setSelectedItem(select)
  const resetSelect = () => setSelectedItem(defaultValue)

  return {
    selectedItem,
    onSelect,
    resetSelect,
  }
}
