import { ReactNode } from 'react'

export type ModalContextType = {
  onCloseModal: () => void
}

export interface ModalProps {
  children: ReactNode
  onCloseModal: () => void
  className?: string
}

export interface TitleProps {
  title: string
}
