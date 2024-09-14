import { create } from 'zustand'

interface ProductState {
  inputValue: string
  selectedKey: number | undefined
  selectedName: string
  setInputValue: (value: string) => void
  setSelectedKey: (key: number | undefined) => void
  setSelectedName: (name: string) => void
}

export const useProductStore = create<ProductState>((set) => ({
  inputValue: '',
  selectedKey: undefined,
  selectedName: '',
  setInputValue: (value) => set({ inputValue: value }),
  setSelectedKey: (key: number | undefined) => set({ selectedKey: key }),
  setSelectedName: (name: string) => set({ selectedName: name }),
}))
