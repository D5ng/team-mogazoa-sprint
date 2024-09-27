import React, { ComponentType, ErrorInfo } from 'react'
import { PropsWithChildren } from 'react'

interface ErrorBoundaryProps extends PropsWithChildren {
  fallback: ComponentType<any>
  onReset: () => void
}

interface ErrorBoundaryState {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
    this.resetErrorBoundary = this.resetErrorBoundary.bind(this)
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo)
  }

  resetErrorBoundary() {
    this.props.onReset()
    this.setState({
      hasError: false,
    })
  }

  render() {
    if (this.state.hasError) {
      return <this.props.fallback onRefetch={this.resetErrorBoundary} />
    }

    return this.props.children
  }
}
