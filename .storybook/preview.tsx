import React from 'react'
import { initialize, mswLoader } from 'msw-storybook-addon'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { Preview } from '@storybook/react'
import '../src/app/styles/globals.css'

initialize({
  onUnhandledRequest: 'bypass',
})
const queryClient = new QueryClient()

const preview: Preview = {
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
  parameters: {
    actions: { fn: '^on[A-Z].*' },
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
}

export default preview
