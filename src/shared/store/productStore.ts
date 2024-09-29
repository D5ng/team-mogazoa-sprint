import { create } from 'zustand'

interface ProductState {
  inputValue: string
  selectedCategoryKey: number | undefined
  selectedCategoryName: string
  handleInputValue: (value: any) => void
  handleSelectedCategoryKey: (key: number | undefined) => void
  handleSelectedCategoryName: (name: string) => void
}

export const useProductStore = create<ProductState>((set) => ({
  inputValue: '',
  selectedCategoryKey: undefined,
  selectedCategoryName: '',
  handleInputValue: (value) => set({ inputValue: value }),
  handleSelectedCategoryKey: (key: number | undefined) =>
    set({ selectedCategoryKey: key }),
  handleSelectedCategoryName: (name: string) =>
    set({ selectedCategoryName: name }),
}))
