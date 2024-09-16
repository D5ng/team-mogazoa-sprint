import CompareInput from '@/src/widgets/compare/components/CompareInput'
import CompareSheet from '@/src/widgets/compare/components/CompareSheet'
import { Button } from '@shared/ui'
import { useState } from 'react'

export default function ComparePage() {
  const [viewCompareSheet, setViewCompareSheet] = useState(false)
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex items-center gap-[20px]">
        <CompareInput id="input1" setViewCompareSheet={setViewCompareSheet} />
        <CompareInput id="input2" setViewCompareSheet={setViewCompareSheet} />
        <div>
          <Button
            onClick={() => setViewCompareSheet(true)}
            className="mt-[20px]"
            variant="primary"
          >
            비교하기
          </Button>
        </div>
        {viewCompareSheet && <CompareSheet />}
      </div>
    </div>
  )
}
