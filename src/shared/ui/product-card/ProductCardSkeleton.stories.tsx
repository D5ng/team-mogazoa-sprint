import { Meta, StoryObj } from '@storybook/react'
import { ProductCardSkeletonItem } from './ProductCardSkeleton'

const SkeletonMeta: Meta<typeof ProductCardSkeletonItem> = {
  title: 'UI/ProductCardItem',
  component: ProductCardSkeletonItem,
  decorators: [
    (Story) => (
      <div className="w-[280px] tablet:w-[230px] mobile:w-[150px]">
        <Story />
      </div>
    ),
  ],
}

export default SkeletonMeta

type Story = StoryObj<typeof ProductCardSkeletonItem>

export const ProductCardSkeletonExample: Story = {
  name: 'Card Skeleton',
}
