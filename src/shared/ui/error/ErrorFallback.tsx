import { Button } from '@shared/ui'

interface ErrorFallbackProps {
  onRefetch: () => void
}

export default function ErrorFallback({ onRefetch }: ErrorFallbackProps) {
  return (
    <div className="mx-auto flex flex-col items-center gap-y-5 px-5 py-7">
      <h3 className="text-xl font-semibold">잠시 후 다시 시도해주세요.</h3>
      <p className="text-base text-black-30">
        현재 일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주시기 바랍니다.
      </p>
      <Button variant="primary" className="w-[400px]" onClick={onRefetch}>
        다시 시도
      </Button>
    </div>
  )
}
