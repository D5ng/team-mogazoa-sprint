import { useState, useEffect, useRef } from 'react'

export default function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)
  const timerRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    timerRef.current = setTimeout(() => setDebouncedValue(value), delay)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [value, delay])

  return debouncedValue
}
