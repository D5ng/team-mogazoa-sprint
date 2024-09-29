import { Meta, StoryObj } from '@storybook/react'
import ImageInput from './ImageInput'
import { action } from '@storybook/addon-actions'
import { defaultProduct } from '@shared/icons'
import Loading from '@/src/shared/ui/loading/Loading'

const meta: Meta<typeof ImageInput> = {
  title: 'UI/ImageInput',
  component: ImageInput,
  argTypes: {
    imageIndex: {
      description: '이미지의 인덱스를 나타냅니다.',
    },
    previewImage: {
      description: '미리보기 이미지의 URL입니다.',
      control: 'text',
    },
    isUpdated: {
      description: '이미지가 업데이트되었는지 여부를 나타냅니다.',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    onCancel: {
      description: '이미지 업로드 취소 시 호출됩니다.',
      action: 'cancelled',
    },
    onSuccess: {
      description: '이미지 업로드 성공 시 호출됩니다.',
      action: 'succeeded',
    },
  },
  args: {
    imageIndex: 1,
    isUpdated: false,
  },
}

export default meta

type Story = StoryObj<typeof ImageInput>

export const ImageInputExample: Story = {
  name: 'ImageInput Example',
  args: {
    imageIndex: 1,
    onCancel: action('onCancel'),
    onSuccess: async (file: File, index: number) => {
      action('onSuccess')(file, index)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return Promise.resolve()
    },
  },
  render: (args) => <ImageInput {...args} />,
}

export const WithPreviewImage: Story = {
  name: 'With Preview Image',
  args: {
    ...ImageInputExample.args,
    previewImage: defaultProduct,
  },
  render: (args) => <ImageInput {...args} />,
}

export const WithUpdatedImage: Story = {
  name: 'With Updated Image',
  args: {
    ...ImageInputExample.args,
    previewImage: defaultProduct,
    isUpdated: true,
  },
  render: (args) => <ImageInput {...args} />,
}

export const ImageInputLoading: Story = {
  name: 'Loading State',
  render: () => (
    <div className="relative flex items-center justify-center input-base w-[160px] h-[160px] tablet:w-[135px] mobile:w-[140px]">
      <Loading />
    </div>
  ),
}

export const MultipleImageInputs: Story = {
  name: 'Multiple Image Inputs',
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
