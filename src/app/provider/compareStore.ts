import SelectedProduct from '@widgets/compare/components/SelectedProduct'
import { create } from 'zustand'

interface CompareState {
  inputValues: { [id: string]: string }
  setInputValues: (id: string, value: string) => void
  selectedProducts: { [id: string]: string }
  setSelectedProducts: (id: string, autoCompleteValue: string) => void
}

export const useCompareStore = create<CompareState>((set) => ({
  inputValues: {},
  setInputValues: (id, value) =>
    set((state) => ({
      inputValues: {
        ...state.inputValues,
        [id]: value,
      },
    })),
  selectedProducts: {},
  setSelectedProducts: (id, autoCompleteValue) =>
    set((state) => ({
      selectedProducts: { ...state.selectedProducts, [id]: autoCompleteValue },
    })),
}))
