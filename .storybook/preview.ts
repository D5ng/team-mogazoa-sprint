import type { Preview } from '@storybook/react'
import '../src/app/styles/globals.css'
import { themes } from '@storybook/theming'

const preview: Preview = {
  parameters: {
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
}

export default preview
