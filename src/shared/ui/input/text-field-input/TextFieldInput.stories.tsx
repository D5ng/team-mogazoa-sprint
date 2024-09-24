import {
  useForm,
  UseFormRegister,
  FieldErrors,
  UseFormSetValue,
} from 'react-hook-form'
import TextFieldInput from './TextFieldInput'
import { nameValidation } from '@shared/utils'
import type { InputHTMLAttributes } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

type Story = StoryObj<typeof TextFieldInput>

export interface TextFieldInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
  register: UseFormRegister<any>
  errors: FieldErrors
  setValue: UseFormSetValue<any>
}

const meta: Meta<typeof TextFieldInput> = {
  title: 'shared/ui/input/TextFieldInput',
  component: TextFieldInput,
  tags: ['autodocs'],
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
