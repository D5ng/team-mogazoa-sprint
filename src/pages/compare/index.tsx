import CompareInput from '@widgets/compare/components/CompareInput'
import CompareSheet from '@widgets/compare/components/CompareSheet'
import useProductAutocomplete from '@widgets/compare/hooks/useProductAutocomplete'
import { Button } from '@shared/ui'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useParams } from 'next/navigation'
import {
  useFetchProductDetail,
  useFetchProductSearch,
} from '@/src/shared/hooks'

export default function ComparePage() {
  const [viewCompareSheet, setViewCompareSheet] = useState(false)
  const { data: product1Data, selectedProduct: product1 } =
    useProductAutocomplete('상품1')
  const { selectedProduct: product2 } = useProductAutocomplete('상품2')
  const isDisabled = !product1 || !product2
  const router = useRouter()
  const { id } = router.query
  const { data } = useFetchProductDetail(Number(id))

  return (
    <div className="flex flex-col items-center h-[78vh] mt-[200px] mobile:pr-[20px] overflow-hidden">
      <div className="w-[60vw] tablet:w-[80vw] mobile:w-[90vw] mobile:flex-col flex justify-between  items-end gap-[20px] mpbile:gap-[5px]">
        <CompareInput
          id="상품1"
          setViewCompareSheet={setViewCompareSheet}
          productName={data?.name}
        />
        <CompareInput id="상품2" setViewCompareSheet={setViewCompareSheet} />
        <Button
          className="w-[500px] h-[61px] tablet:h-[61px] mobile:w-[90vw]"
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
