import { Meta, StoryObj } from '@storybook/react'
import ProductHot from './ProductHot'

const meta: Meta<typeof ProductHot> = {
  title: 'Components',
  component: ProductHot,
  decorators: [
    (Story) => (
      <div className="w-[46vw] tablet:w-[68vw]  mobile:w-[89vw]">
        <Story />
      </div>
    ),
  ],
}

export default meta

type CardListExampleStory = StoryObj<typeof ProductHot>

export const CardListExample: CardListExampleStory = {
  name: 'CardListExample',
  render: () => <ProductHot />,
}
