import { useEffect, useState } from 'react'
import { useProductStore } from '../store/productStore'

export default function useProductTitle() {
  const { inputValue } = useProductStore()
  const [searchTitle, setSearchTitle] = useState<string>('')

  // useEffect(() => {
  //   if (selectedCategoryKey && !inputValue) {
  //     setSearchTitle(`${selectedCategoryName}의 모든상품`)
  //   }
  //   if (!selectedCategoryKey && inputValue) {
  //     setSearchTitle(`'${inputValue}'로 검색한 상품`)
  //   }
  //   if (selectedCategoryKey && inputValue) {
  //     setSearchTitle(`${selectedCategoryName}의 ${inputValue}로 검색한 상품`)
  //   }
  // }, [selectedCategoryKey, inputValue])

  return { searchTitle }
}
