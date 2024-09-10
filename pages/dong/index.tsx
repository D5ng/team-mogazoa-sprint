import ProductAddModal from '@features/product-add-modal/components/modal/ProductAddModal'
import { useToggle } from '@/src/shared/hooks'

export default function index() {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()

  return (
    <>
      <button onClick={onOpenToggle}>Open toggle</button>
      {isToggle && <ProductAddModal onCloseToggle={onCloseToggle} />}
    </>
  )
}
