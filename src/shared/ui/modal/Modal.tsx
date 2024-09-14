import Image from 'next/image'
import { createContext, PropsWithChildren, useContext } from 'react'
import { createPortal } from 'react-dom'
import { twMerge } from 'tailwind-merge'
import { close } from '@shared/icons'
import type { ModalContextType, ModalProps } from './Modal.type'

const ModalContext = createContext<ModalContextType>({
  onCloseModal: () => {},
})

const useModalContext = () => {
  const modalContext = useContext(ModalContext)
  if (!modalContext) throw new Error('Modal Context에서 사용해주세요.')
  return modalContext
}

export function Modal(props: ModalProps) {
  const portalElement = document.getElementById('modal')!
  return createPortal(
    <ModalContext.Provider value={{ onCloseModal: props.onCloseModal }}>
      <div
        className={twMerge(
          'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[120] w-[620px] p-[40px] bg-black-80 text-white rounded-2xl tablet:w-[590px] mobile:w-[calc(100%-40px)] mobile:px-5',
          props.className,
        )}
      >
        <ModalBackdrop />
        <ModalExit />
        {props.children}
      </div>
    </ModalContext.Provider>,
    portalElement,
  )
}

export function ModalBackdrop() {
  const { onCloseModal } = useModalContext()
  const portalElement = document.getElementById('backdrop')!
  return createPortal(
    <div
      className="fixed w-screen h-screen left-0 top-0 bg-[#000000b3] z-[110]"
      onClick={onCloseModal}
    ></div>,
    portalElement,
  )
}

export function ModalExit() {
  const { onCloseModal } = useModalContext()
  return (
    <button onClick={onCloseModal} className="absolute right-[20px] top-[20px]">
      <Image
        src={close}
        alt="모달 창 닫기"
        width="40"
        height="40"
        className="tablet:w-[36px] tablet:h-[36px] mobile:w-[24px] mobile:h-[24px]"
      />
    </button>
  )
}

export function ModalTitle({ children }: PropsWithChildren) {
  return <h2 className="text-2xl font-semibold tablet:text-xl">{children}</h2>
}
