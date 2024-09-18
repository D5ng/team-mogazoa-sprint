import CompareInput from '@/src/widgets/compare/components/CompareInput'
import CompareSheet from '@/src/widgets/compare/components/CompareSheet'
import useProductAutocomplete from '@/src/widgets/compare/hooks/useProductAutocomplete'
import { Button } from '@shared/ui'
import { useState } from 'react'

export default function ComparePage() {
  const [viewCompareSheet, setViewCompareSheet] = useState(false)
  const { selectedProduct: product1 } = useProductAutocomplete('상품1')
  const { selectedProduct: product2 } = useProductAutocomplete('상품2')
  const isDisabled = !product1 || !product2
  console.log(isDisabled)
  return (
    <div className="flex flex-col w-screen h-screen  items-center">
      <div className="w-[60vw] flex justify-between items-end gap-[20px]">
        <CompareInput id="상품1" setViewCompareSheet={setViewCompareSheet} />
        <CompareInput id="상품2" setViewCompareSheet={setViewCompareSheet} />
        <Button
          className="w-[500px] h-[61px]"
          onClick={() => setViewCompareSheet(true)}
          variant="primary"
          disabled={isDisabled}
        >
          비교하기
        </Button>
      </div>
      {viewCompareSheet && <CompareSheet />}
    </div>
  )
}
