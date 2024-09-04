import { useEffect, useRef } from 'react'

interface UseOutsideParams {
  onCloseToggle: () => void
}

export default function useOutsideClick<T extends HTMLElement>({
  onCloseToggle,
}: UseOutsideParams) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const outsideClick = (event: Event) => {
      const target = event.target as HTMLElement
      if (!ref.current || ref.current.contains(target)) return
      onCloseToggle()
    }
    document.addEventListener('mousedown', outsideClick)

    return () => document.removeEventListener('mousedown', outsideClick)
  }, [])

  return ref
}
