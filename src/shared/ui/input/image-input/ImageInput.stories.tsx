import ImageInput from './ImageInput'
import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { defaultProduct } from '@shared/icons'

const meta: Meta<typeof ImageInput> = {
  title: 'UI/ImageInput',
  component: ImageInput,
  tags: ['autodocs'],
  argTypes: {
    imageIndex: {
      control: 'number',
      description: '이미지의 인덱스를 나타냅니다.',
    },
    onCancel: { action: 'cancelled' },
    onSuccess: { action: 'succeeded' },
    previewImage: {
      control: 'text',
      description: '미리보기 이미지의 URL입니다.',
    },
    isUpdated: {
      control: 'boolean',
      description: '이미지가 업데이트되었는지 여부를 나타냅니다.',
    },
  },
}

export default meta

type Story = StoryObj<typeof ImageInput>

const Template: Story = {
  render: (args) => <ImageInput {...args} />,
}

export const ImageInputExample: Story = {
  ...Template,
  args: {
    imageIndex: 1,
    onCancel: action('onCancel'),
    onSuccess: async (file: File, index: number) => {
      action('onSuccess')(file, index)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return Promise.resolve()
    },
  },
}

export const WithPreviewImage: Story = {
  ...Template,
  args: {
    ...ImageInputExample.args,
    previewImage: defaultProduct,
  },
}

export const WithUpdatedImage: Story = {
  ...Template,
  args: {
    ...ImageInputExample.args,
    previewImage: defaultProduct,
    isUpdated: true,
  },
}

export const MultipleImageInputs: Story = {
  render: () => (
    <div className="flex gap-x-2.5 overflow-x-scroll none-scrollbar">
      {[1, 2, 3].map((index) => (
        <ImageInput
          key={index}
          imageIndex={index}
          onCancel={action('onCancel')}
          onSuccess={async (file: File, index: number) => {
            action('onSuccess')(file, index)
            await new Promise((resolve) => setTimeout(resolve, 1000))
            return Promise.resolve()
          }}
        />
      ))}
    </div>
  ),
}
