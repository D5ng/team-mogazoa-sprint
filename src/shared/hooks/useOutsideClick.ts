import { useEffect, useRef } from 'react'

interface UseOutsideParams {
  onCloseToggle: () => void
  callback?: (ref: any) => boolean
}

export default function useOutsideClick<T extends HTMLElement>({
  onCloseToggle,
  callback,
}: UseOutsideParams) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const outsideClick = (event: Event) => {
      event.stopPropagation()
      const target = event.target as HTMLElement
      if (callback && callback(event.target)) {
        return
      }
      if (!ref.current || ref.current.contains(target)) {
        return
      }

      onCloseToggle()
    }
    document.addEventListener('mousedown', outsideClick)

    return () => document.removeEventListener('mousedown', outsideClick)
  }, [])

  return ref
}
