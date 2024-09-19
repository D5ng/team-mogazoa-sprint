import { useEffect, useState } from 'react'
import throttle from 'lodash/throttle'

export default function useWindowResize() {
  const [windowSize, setWindowSize] = useState<number>(1440)
  useEffect(() => {
    const handleResize = throttle(() => {
      setWindowSize(window.innerWidth)
    }, 300)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      handleResize.cancel()
    }
  }, [])

  return windowSize
}
