import { ReactNode } from 'react'

export type ModalContextType = {
  onCloseModal: () => void
}

export interface ModalProps {
  children: ReactNode
  onCloseModal: () => void
}

export interface TitleProps {
  title: string
}
