import { MouseEventHandler, useEffect, useRef } from 'react'

interface UseOutsideProps {
  onCloseToggle: () => void
}

export default function useOutsideClick<T extends HTMLElement>({
  onCloseToggle,
}: UseOutsideProps) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const outsideClick = (event: Event) => {
      const target = event.target as HTMLElement
      if (!ref.current || ref.current.contains(target)) return
      onCloseToggle()
    }
    document.addEventListener('mousedown', outsideClick)

    return () => document.addEventListener('mousedown', outsideClick)
  }, [])

  return ref
}
