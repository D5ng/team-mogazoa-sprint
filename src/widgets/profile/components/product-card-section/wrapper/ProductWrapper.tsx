import { Suspense, PropsWithChildren } from 'react'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary, ErrorFallback } from '@shared/ui'

export default function ProductWrapper({ children }: PropsWithChildren) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} fallback={ErrorFallback}>
          <Suspense fallback={<div></div>}>{children}</Suspense>)
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}
