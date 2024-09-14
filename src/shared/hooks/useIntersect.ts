import { useCallback, useEffect, useRef } from 'react'

type HandleIntersect = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver,
) => void

export default function useIntersect<T extends HTMLElement>(
  onIntersect: HandleIntersect,
) {
  const ref = useRef<T>(null)

  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) onIntersect(entry, observer)
      }),
    [onIntersect],
  )

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(observerCallback)
    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [observerCallback])

  return ref
}
