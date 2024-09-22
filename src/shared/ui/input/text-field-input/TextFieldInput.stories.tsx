import {
  useForm,
  UseFormRegister,
  FieldErrors,
  UseFormSetValue,
} from 'react-hook-form'
import TextFieldInput from './TextFieldInput'
import type { InputHTMLAttributes } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { nameValidation } from '@/src/shared/utils'

type Story = StoryObj<typeof TextFieldInput>

export interface TextFieldInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  placeholder?: string
  register: UseFormRegister<any>
  errors: FieldErrors
  setValue: UseFormSetValue<any>
}

const meta: Meta<typeof TextFieldInput> = {
  title: 'Components/TextFieldInput',
  component: TextFieldInput,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '300px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
}

const TextFieldInputWrapper = (
  props: Partial<React.ComponentProps<typeof TextFieldInput>>,
) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useForm()
  return (
    <TextFieldInput
      placeholder="example"
      setValue={setValue}
      {...register('name', nameValidation)}
      errors={errors}
      {...props}
    />
  )
}

export const Default: Story = {
  render: () => <TextFieldInputWrapper placeholder="Enter text" />,
}

export const WithError: Story = {
  render: () => {
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
        placeholder="example"
        setValue={setValue}
        {...register('name', nameValidation)}
        errors={errors}
      />
    )
  },
}

export const WithLongPlaceholder: Story = {
  render: () => (
    <TextFieldInputWrapper placeholder="Lorem ipsum dolor sit consectetur. Lorem ipsum dolor sit consectetur. Lorem ipsum dolor sit consectetur." />
  ),
}

export default meta
