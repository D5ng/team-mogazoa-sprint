import { Meta, StoryObj } from '@storybook/react'
import ProductCardItem from './ProductCardItem'
import { ProductCardSkeletonItem } from './ProductCardSkeleton'
import { ProductHot } from '@/src/widgets/product/product-home/components'

const meta: Meta<typeof ProductCardItem> = {
  title: 'UI/ProductCardItem',
  component: ProductCardItem,
  argTypes: {
    id: {
      description: 'fetching된 데이터에서 전달받는 상품 id 입니다',
    },
    image: {
      description:
        '상품 이미지 url 입니다. 이미지가 존재하지 않거나 오류 발생시 디폴트 이미지로 대체됩니다.',
    },
    name: {
      description: '상품 이름입니다.',
    },
    reviewCount: {
      description: '상품 id에 등록되어있는 리뷰 개수입니다.',
    },
    favoriteCount: {
      description: '상품 id에 등록되어있는 좋아요 개수입니다.',
    },
    rating: {
      description: '상품 평점입니다.',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[280px] tablet:w-[230px] mobile:w-[150px]">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof ProductCardItem>

export const ProductCardItemExample: Story = {
  name: 'Card Example',
  args: {
    image: '',
    name: '카드 샘플',
    reviewCount: 200,
    favoriteCount: 200,
    rating: 5,
  },
}

type SkeletonStory = StoryObj<typeof ProductCardSkeletonItem>

export const ProductCardSkeletonItemExample: SkeletonStory = {
  name: 'Card Skeleton Example',
  render: () => <ProductCardSkeletonItem />,
}

type CardListExampleStory = StoryObj<typeof ProductHot>

export const CardListExample: CardListExampleStory = {
  name: 'CardListExample',
  render: () => (
    <div className="w-[46vw] tablet:w-[68vw]  mobile:w-[89vw] -ml-[230px]">
      <ProductHot />
    </div>
  ),
}
