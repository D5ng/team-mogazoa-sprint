import { create } from 'zustand'

interface ProductState {
  inputValue: string
  selectedKey: number | null
  setInputValue: (value: string) => void
  setSelectedKey: (key: number) => void
}

export const useProductStore = create<ProductState>((set) => ({
  inputValue: '',
  selectedKey: null,
  setInputValue: (value) => set({ inputValue: value }),
  setSelectedKey: (key: number) => set({ selectedKey: key }),
}))
