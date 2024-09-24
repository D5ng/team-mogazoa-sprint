import ImageInput from './ImageInput'
import { action } from '@storybook/addon-actions'
import { defaultProduct } from '@shared/icons'
import type { Meta, StoryObj } from '@storybook/react'

type Story = StoryObj<typeof ImageInput>

const meta: Meta<typeof ImageInput> = {
  title: 'shared/ui/input/ImageInput',
  component: ImageInput,
  tags: ['autodocs'],
  argTypes: {
    onCancel: { action: 'cancelled' },
    onSuccess: { action: 'succeeded' },
    onFailed: { action: 'failed' },
    imageIndex: { control: 'number' },
    previewImage: { control: 'text' },
  },
}

export const Default: Story = {
  args: {
    onCancel: action('onCancel'),
    onSuccess: async (file, index) => {
      action('onSuccess')(file, index)
      return Promise.resolve()
    },
    onFailed: action('onFailed'),
    imageIndex: 0,
  },
}

export const WithPreviewImage: Story = {
  args: {
    ...Default.args,
    previewImage: defaultProduct,
  },
}

export default meta
