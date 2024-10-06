import TextareaInput from './TextareaInput'
import { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { descriptionValidation } from '@shared/utils'

const meta: Meta<typeof TextareaInput> = {
  title: 'UI/TextareaInput',
  component: TextareaInput,
  argTypes: {
    placeholder: {
      control: 'text',
      description: '입력 필드의 플레이스홀더 텍스트입니다.',
    },
    maxLength: {
      control: 'number',
      description: '입력 가능한 최대 문자 수입니다.',
    },
  },
}

export default meta

type Story = StoryObj<typeof TextareaInput>

const Template: Story = {
  render: (args) => {
    const {
      register,
      formState: { errors },
      watch,
    } = useForm<{ description: string }>({
      defaultValues: { description: args.value || '' },
    })

    const description = watch('description')

    return (
      <TextareaInput
        {...args}
        {...register('description', descriptionValidation)}
        value={description}
        errors={errors}
      />
    )
  },
}

export const TextareaInputExample: Story = {
  ...Template,
  args: {
    placeholder: '상품 설명을 입력해주세요',
  },
}

export const WithError: Story = {
  ...Template,
  args: {
    placeholder: '상품 설명을 입력해주세요',
    maxLength: 500,
  },
  render: (args) => {
    const {
      register,
      formState: { errors },
      watch,
    } = useForm<{ description: string }>({
      mode: 'all',
      defaultValues: { description: '' },
    })

    const description = watch('description')

    return (
      <TextareaInput
        {...args}
        {...register('description', descriptionValidation)}
        value={description}
        errors={errors}
      />
    )
  },
}

export const WithAdjustMaxLength: Story = {
  ...Template,
  args: {
    placeholder: '상품 설명을 입력해주세요',
    maxLength: 100,
  },
}
