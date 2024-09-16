import { create } from 'zustand'

interface CompareState {
  inputValues: { [id: string]: string }
  setInputValues: (id: string, value: string) => void
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
}))
