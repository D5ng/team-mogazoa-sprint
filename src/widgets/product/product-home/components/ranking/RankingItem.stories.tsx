import { Meta, StoryObj } from '@storybook/react'
import RankingItem from './RankingItem'

const meta: Meta<typeof RankingItem> = {
  title: 'WIDGETS/Ranking/RankingItem',
  component: RankingItem,
  argTypes: {
    id: {
      description: '해당 하는 유저의 id값 입니다.',
    },
    image: {
      description: '해당 유저가 설정한 profile url 값입니다. ',
    },
    variant: {
      description: 'ranking chip의 색상입니다.',
    },
    rank: {
      description: '해당 유저의 랭킹입니다.',
    },
    nickname: {
      description: '해당 유저의 닉네임 입니다.',
    },
    reviewCount: {
      description: '해당 유저가 등록한 리뷰 개수입니다.',
    },
    followersCount: {
      description: '해당 유저를 팔로우한 유저의 개수입니다.',
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-black-70 p-[10px]">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof RankingItem>

export const RankingItemExample: Story = {
  name: 'Ranking Item',
  args: {
    image: '',
    variant: 'first',
    rank: 1,
    nickname: 'Test',
    followersCount: 200,
    reviewCount: 200,
  },
}
