import React from 'react'
import { initialize, mswDecorator, mswLoader } from 'msw-storybook-addon'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { Preview } from '@storybook/react'
import '../src/app/styles/globals.css'
import { themes } from '@storybook/theming'

initialize()
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
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: {
      themes: themes.light,
    },
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
