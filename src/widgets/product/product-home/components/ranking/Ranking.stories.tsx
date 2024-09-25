import { Meta, StoryObj } from '@storybook/react'
import Ranking from './Ranking'

const meta: Meta<typeof Ranking> = {
  title: 'Components/RankingExample',
  component: Ranking,
  decorators: [
    (Story) => (
      <div className=" bg-black-50 ">
        <div className="h-[1000px] ml-[500px] ">
          <Story />
        </div>
      </div>
    ),
  ],
}

export default meta

type RankingStory = StoryObj<typeof Ranking>

export const RankingExample: RankingStory = {
  name: 'RankingExample',
  render: () => <Ranking />,
}
