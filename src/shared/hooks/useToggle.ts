import { MouseEvent, useState } from 'react'

export default function useToggle() {
  const [isToggle, setIsToggle] = useState(false)
  const onOpenToggle = () => {
    setIsToggle(true)
  }
  const onCloseToggle = () => setIsToggle(false)
  const onToggle = () => setIsToggle((prevToggle) => !prevToggle)

  return {
    isToggle,
    onToggle,
    onOpenToggle,
    onCloseToggle,
  }
}
