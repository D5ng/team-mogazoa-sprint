import { useForm } from 'react-hook-form'
import TextareaInput from './TextareaInput'
import { descriptionValidation } from '@shared/utils'
import type { Meta, StoryObj } from '@storybook/react'
import type { TextareaInputProps } from './TextareaInput.type'

type Story = StoryObj<typeof TextareaInput>

const meta: Meta<typeof TextareaInput> = {
  title: 'shared/ui/input/TextareaInput',
  component: TextareaInput,
  tags: ['autodocs'],
}

const TextareaInputWrapper = (props: Partial<TextareaInputProps>) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useForm<{ description: string }>({
    defaultValues: { description: props.value || '' },
  })

  const description = watch('description')

  return (
    <TextareaInput
      {...register('description', descriptionValidation)}
      value={description}
      placeholder="example"
      errors={errors}
      {...props}
    />
  )
}

export const Default: Story = {
  render: () => <TextareaInputWrapper />,
}

export const WithValue: Story = {
  render: () => <TextareaInputWrapper value="TextInputArea" />,
}

export const WithError: Story = {
  render: () => {
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
        {...register('description', descriptionValidation)}
        value={description}
        placeholder="example"
        maxLength={500}
        errors={errors}
      />
    )
  },
}

export const WithAdjustMaxLength: Story = {
  render: () => <TextareaInputWrapper maxLength={100} />,
}

export default meta
