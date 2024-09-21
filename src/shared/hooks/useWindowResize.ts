import { useState, useEffect, useCallback } from 'react'
import debounce from 'lodash/debounce'

export default function useWindowResize(breakpoint: number = 1280) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = useCallback(
    debounce(() => {
      const newWidth = window.innerWidth
      setWindowWidth((prev) => {
        if (
          (prev < breakpoint && newWidth >= breakpoint) ||
          (prev >= breakpoint && newWidth < breakpoint)
        ) {
          return newWidth
        }
        return prev
      })
    }, 100),
    [breakpoint],
  )

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      handleResize.cancel()
    }
  }, [handleResize])

  return windowWidth
}
