import { useOutsideClick, useToggle } from '@/src/shared/hooks'
import useProductAutocomplete from '../hooks/useProductAutocomplete'
import SelectedProduct from './SelectedProduct'

export default function CompareInput({
  id,
  setViewCompareSheet,
}: {
  id: string
  setViewCompareSheet: (arg: boolean) => void
}) {
  const { isToggle, onCloseToggle, onOpenToggle } = useToggle()
  const {
    inputValue,
    suggestions,
    handleClickList,
    handleInputChange,
    selectedProduct,
    deleteSelectedProduct,
  } = useProductAutocomplete(id, onCloseToggle)
  const ref = useOutsideClick<HTMLUListElement>({ onCloseToggle })
  return (
    <div className="relative mt-[200px]">
      {!selectedProduct ? (
        <input
          className="input-base"
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="상품명을 입력하세요"
          onClick={onOpenToggle}
        />
      ) : (
        <SelectedProduct
          id={id}
          deleteSelectedProduct={deleteSelectedProduct}
          setViewCompareSheet={setViewCompareSheet}
        >
          {selectedProduct}
        </SelectedProduct>
      )}
      {isToggle && inputValue.length >= 2 && suggestions.length > 0 && (
        <ul
          ref={ref}
          className="absolute bg-white border border-gray-300 mt-1 w-full"
        >
          {suggestions.map((name, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleClickList(name)}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
