import {
  useFetchProductDetail,
  useOutsideClick,
  useToggle,
} from '@shared/hooks'
import useProductAutocomplete from '../hooks/useProductAutocomplete'
import SelectedProduct from './SelectedProduct'
import { twMerge } from 'tailwind-merge'
import { useEffect } from 'react'

export default function CompareInput({
  id,
  setViewCompareSheet,
  productId = undefined,
}: {
  id: string
  setViewCompareSheet: (arg: boolean) => void
  productId?: number | string | undefined
}) {
  const { isToggle, onCloseToggle, onOpenToggle } = useToggle()
  const {
    inputValue,
    suggestions,
    handleClickList,
    handleInputChange,
    selectedProduct,
    deleteSelectedProduct,
    setSelectedProducts,
  } = useProductAutocomplete(id, onCloseToggle)
  const mobile = twMerge('mobile:h-[60px]')
  const ref = useOutsideClick<HTMLUListElement>({ onCloseToggle })
  const fetchProductDetail = () => {
    const { data } = useFetchProductDetail(Number(productId))
    data && setSelectedProducts(id, data.name)
  }

  useEffect(() => {
    productId && fetchProductDetail()
  }, [productId])

  return (
    <div className="relative w-full ">
      <span className="text-white">{id}</span>
      {!selectedProduct ? (
        <input
          className={`input-base ${mobile}`}
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
          className="absolute z-modal bg-black-70 border border-black-40 mt-1 w-full rounded-lg"
        >
          {suggestions.map((name, index) => (
            <li
              key={index}
              className="p-2  cursor-pointer  text-black-30 hover:bg-gray-70 hover:text-white"
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
