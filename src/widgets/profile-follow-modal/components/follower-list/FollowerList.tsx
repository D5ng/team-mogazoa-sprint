import Follower from '@/src/widgets/profile-follow-modal/components/follower-list/Follower'

const MOCK = [
  {
    id: 1889,
    follower: {
      id: 524,
      nickname: 'qoqo0090',
      description: '',
      image: null,
      createdAt: '2024-09-14T15:26:31.757Z',
      updatedAt: '2024-09-14T15:26:31.757Z',
      teamId: '4-wdj',
    },
  },
  {
    id: 1888,
    follower: {
      id: 523,
      nickname: 'qoqo089',
      description: '',
      image: null,
      createdAt: '2024-09-14T15:26:06.451Z',
      updatedAt: '2024-09-14T15:26:06.451Z',
      teamId: '4-wdj',
    },
  },
  {
    id: 1887,
    follower: {
      id: 522,
      nickname: 'qoqo0088',
      description: '',
      image: null,
      createdAt: '2024-09-14T15:25:44.472Z',
      updatedAt: '2024-09-14T15:25:44.472Z',
      teamId: '4-wdj',
    },
  },
  {
    id: 1886,
    follower: {
      id: 520,
      nickname: 'qoqo0086',
      description: '',
      image: null,
      createdAt: '2024-09-14T15:24:53.484Z',
      updatedAt: '2024-09-14T15:24:53.484Z',
      teamId: '4-wdj',
    },
  },
  {
    id: 1885,
    follower: {
      id: 519,
      nickname: 'qoqo0085',
      description: '',
      image: null,
      createdAt: '2024-09-14T15:24:25.544Z',
      updatedAt: '2024-09-14T15:24:25.544Z',
      teamId: '4-wdj',
    },
  },
  {
    id: 1884,
    follower: {
      id: 518,
      nickname: 'qoqo0084',
      description: '',
      image: null,
      createdAt: '2024-09-14T15:23:46.664Z',
      updatedAt: '2024-09-14T15:23:46.664Z',
      teamId: '4-wdj',
    },
  },
  {
    id: 1883,
    follower: {
      id: 517,
      nickname: 'qoqo0083',
      description: '',
      image: null,
      createdAt: '2024-09-14T15:23:14.312Z',
      updatedAt: '2024-09-14T15:23:14.312Z',
      teamId: '4-wdj',
    },
  },
  {
    id: 1882,
    follower: {
      id: 516,
      nickname: 'qoqo0082',
      description: '',
      image: null,
      createdAt: '2024-09-14T15:22:48.917Z',
      updatedAt: '2024-09-14T15:22:48.917Z',
      teamId: '4-wdj',
    },
  },
  {
    id: 1881,
    follower: {
      id: 515,
      nickname: 'qoqo0081',
      description: '',
      image: null,
      createdAt: '2024-09-14T15:22:10.906Z',
      updatedAt: '2024-09-14T15:22:10.906Z',
      teamId: '4-wdj',
    },
  },
  {
    id: 1880,
    follower: {
      id: 514,
      nickname: 'qoqo0080',
      description: '',
      image: null,
      createdAt: '2024-09-14T15:20:37.325Z',
      updatedAt: '2024-09-14T15:20:37.325Z',
      teamId: '4-wdj',
    },
  },
  {
    id: 1881,
    follower: {
      id: 515,
      nickname: 'qoqo0081',
      description: '',
      image: null,
      createdAt: '2024-09-14T15:20:37.325Z',
      updatedAt: '2024-09-14T15:20:37.325Z',
      teamId: '4-wdj',
    },
  },
  {
    id: 1882,
    follower: {
      id: 516,
      nickname: 'qoqo0082',
      description: '',
      image: null,
      createdAt: '2024-09-14T15:21:37.325Z',
      updatedAt: '2024-09-14T15:21:37.325Z',
      teamId: '4-wdj',
    },
  },
  {
    id: 1883,
    follower: {
      id: 517,
      nickname: 'qoqo0083',
      description: '',
      image: null,
      createdAt: '2024-09-14T15:22:37.325Z',
      updatedAt: '2024-09-14T15:22:37.325Z',
      teamId: '4-wdj',
    },
  },
  {
    id: 1884,
    follower: {
      id: 518,
      nickname: 'qoqo0084',
      description: '',
      image: null,
      createdAt: '2024-09-14T15:23:37.325Z',
      updatedAt: '2024-09-14T15:23:37.325Z',
      teamId: '4-wdj',
    },
  },
  {
    id: 1885,
    follower: {
      id: 519,
      nickname: 'qoqo0085',
      description: '',
      image: null,
      createdAt: '2024-09-14T15:24:37.325Z',
      updatedAt: '2024-09-14T15:24:37.325Z',
      teamId: '4-wdj',
    },
  },
  {
    id: 1886,
    follower: {
      id: 520,
      nickname: 'qoqo0086',
      description: '',
      image: null,
      createdAt: '2024-09-14T15:25:37.325Z',
      updatedAt: '2024-09-14T15:25:37.325Z',
      teamId: '4-wdj',
    },
  },
  {
    id: 1887,
    follower: {
      id: 521,
      nickname: 'qoqo0087',
      description: '',
      image: null,
      createdAt: '2024-09-14T15:26:37.325Z',
      updatedAt: '2024-09-14T15:26:37.325Z',
      teamId: '4-wdj',
    },
  },
  {
    id: 1888,
    follower: {
      id: 522,
      nickname: 'qoqo0088',
      description: '',
      image: null,
      createdAt: '2024-09-14T15:27:37.325Z',
      updatedAt: '2024-09-14T15:27:37.325Z',
      teamId: '4-wdj',
    },
  },
  {
    id: 1889,
    follower: {
      id: 523,
      nickname: 'qoqo0089',
      description: '',
      image: null,
      createdAt: '2024-09-14T15:28:37.325Z',
      updatedAt: '2024-09-14T15:28:37.325Z',
      teamId: '4-wdj',
    },
  },
  {
    id: 1890,
    follower: {
      id: 524,
      nickname: 'qoqo0090',
      description: '',
      image: null,
      createdAt: '2024-09-14T15:29:37.325Z',
      updatedAt: '2024-09-14T15:29:37.325Z',
      teamId: '4-wdj',
    },
  },
]

export default function FollowerList() {
  return (
    <ul className="flex flex-col gap-6 mt-10 tablet:gap-5 mobile:mt-5">
      {MOCK.map(({ id, follower }) => (
        <Follower
          key={id}
          nickname={follower.nickname}
          image={follower.image}
        />
      ))}
    </ul>
  )
}
