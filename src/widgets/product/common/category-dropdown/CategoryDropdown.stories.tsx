import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Meta, StoryObj } from '@storybook/react'
import { ProductPayload } from '@shared/types'
import CategoryDropdown from './CategoryDropdown'
import { defaultValues } from '@widgets/product/product-home/components/product-create-modal/form/defaultValues'

function CategoryDropdownWrapper() {
  const {
    formState: { errors },
    control,
  } = useForm<ProductPayload>({
    defaultValues,
    mode: 'onTouched',
  })

  return (
    <CategoryDropdown error={errors.categoryId?.message} control={control} />
  )
}

const meta: Meta<typeof CategoryDropdownWrapper> = {
  title: 'UI/CategoryDropdown',
  component: CategoryDropdownWrapper,
}

type Story = StoryObj<typeof CategoryDropdownWrapper>

export const CategoryDropdownExample: Story = {
  name: 'Category Dropdown Example',
  argTypes: {
    control: {
      description: 'useForm의 control을 받아 value값을 제어합니다.',
      type: {
        required: true,
      },
    },
    error: {
      description: 'useForm의 errors를 받습니다.',
      type: {
        required: true,
      },
    },
  },
  render: () => {
    const {
      formState: { errors },
      control,
    } = useForm<ProductPayload>({
      defaultValues,
      mode: 'onTouched',
    })

    return (
      <CategoryDropdown error={errors.categoryId?.message} control={control} />
    )
  },
}

export const CategoryDropdownError: Story = {
  name: 'Category Dropdown Error',
  argTypes: {
    control: {
      description: 'useForm의 control을 받아 value값을 제어합니다.',
    },
    error: {
      description: 'useForm의 errors를 받습니다.',
    },
  },
  render: () => {
    const {
      formState: { errors },
      setError,
      control,
    } = useForm<ProductPayload>({
      defaultValues,
      mode: 'onTouched',
    })

    useEffect(() => {
      setError('categoryId', {
        message: '필수 입력 값입니다.',
      })
    }, [])

    return (
      <CategoryDropdown error={errors.categoryId?.message} control={control} />
    )
  },
}

export const CategoryDropdownSelected: Story = {
  name: 'Category Dropdown Selected',
  argTypes: {
    control: {
      description: 'useForm의 control을 받아 value값을 제어합니다.',
    },
    error: {
      description: 'useForm의 errors를 받습니다.',
    },
  },
  render: () => {
    const {
      formState: { errors },
      setError,
      control,
    } = useForm<ProductPayload>({
      defaultValues: {
        ...defaultValues,
        categoryId: 3,
      },
      mode: 'onTouched',
    })

    return (
      <CategoryDropdown error={errors.categoryId?.message} control={control} />
    )
  },
}

export default meta
