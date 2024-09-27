import TextFieldInput from './TextFieldInput'
import { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { nameValidation } from '@shared/utils'

const meta: Meta<typeof TextFieldInput> = {
  title: 'UI/TextFieldInput',
  component: TextFieldInput,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: '입력 필드의 플레이스홀더 텍스트입니다.',
    },
  },
}

export default meta

type Story = StoryObj<typeof TextFieldInput>

const Template: Story = {
  render: (args) => {
    const {
      register,
      formState: { errors },
      setValue,
    } = useForm()
    return (
      <TextFieldInput
        {...args}
        setValue={setValue}
        {...register('name', nameValidation)}
        errors={errors}
      />
    )
  },
}

export const TextFieldInputExample: Story = {
  ...Template,
  args: {
    placeholder: '상품명',
  },
}

export const WithError: Story = {
  ...Template,
  args: {
    placeholder: '상품명',
  },
  render: (args) => {
    const {
      register,
      formState: { errors },
      setValue,
    } = useForm({
      defaultValues: { name: '' },
      mode: 'all',
    })
    return (
      <TextFieldInput
        {...args}
        setValue={setValue}
        {...register('name', nameValidation)}
        errors={errors}
      />
    )
  },
}

export const WithLongPlaceholder: Story = {
  ...Template,
  args: {
    placeholder:
      'Lorem ipsum dolor sit consectetur. Lorem ipsum dolor sit consectetur. Lorem ipsum dolor sit consectetur.',
  },
}
