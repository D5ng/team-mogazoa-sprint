import { useState, useEffect, useCallback } from 'react'
import debounce from 'lodash/debounce'

export default function useWindowResize() {
  const [windowWidth, setWindowWidth] = useState<number>(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1280,
  )

  const handleResize = useCallback(
    debounce(() => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth)
      }
    }, 100),
    [],
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      handleResize()

      return () => {
        window.removeEventListener('resize', handleResize)
        handleResize.cancel()
      }
    }
  }, [handleResize])

  return windowWidth
}
