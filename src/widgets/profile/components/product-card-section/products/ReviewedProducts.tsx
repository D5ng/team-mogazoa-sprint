import MockCardItem from '@/src/widgets/profile/MockCardItem'

const MOCK_DATA = [
  {
    updatedAt: '2024-09-16T13:36:44.867Z',
    createdAt: '2024-09-16T13:36:44.867Z',
    writerId: 1,
    categoryId: 1,
    favoriteCount: 0,
    reviewCount: 0,
    rating: 0,
    image:
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Mogazoa/user/512/1726493654147/XL.jfif',
    name: 'Item One',
    id: 1,
  },
  {
    updatedAt: '2024-09-16T14:15:22.123Z',
    createdAt: '2024-09-16T14:15:22.123Z',
    writerId: 2,
    categoryId: 2,
    favoriteCount: 5,
    reviewCount: 2,
    rating: 4.5,
    image:
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Mogazoa/user/512/1726493654147/XL.jfif',
    name: 'Item Two',
    id: 2,
  },
  {
    updatedAt: '2024-09-16T15:30:10.456Z',
    createdAt: '2024-09-16T15:30:10.456Z',
    writerId: 3,
    categoryId: 1,
    favoriteCount: 10,
    reviewCount: 5,
    rating: 4.2,
    image:
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Mogazoa/user/512/1726493654147/XL.jfif',
    name: 'Item Three',
    id: 3,
  },
  {
    updatedAt: '2024-09-16T16:45:33.789Z',
    createdAt: '2024-09-16T16:45:33.789Z',
    writerId: 4,
    categoryId: 3,
    favoriteCount: 3,
    reviewCount: 1,
    rating: 5,
    image:
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Mogazoa/user/512/1726493654147/XL.jfif',
    name: 'Item Four',
    id: 4,
  },
  {
    updatedAt: '2024-09-16T17:20:55.321Z',
    createdAt: '2024-09-16T17:20:55.321Z',
    writerId: 5,
    categoryId: 2,
    favoriteCount: 8,
    reviewCount: 3,
    rating: 4.7,
    image:
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Mogazoa/user/512/1726493654147/XL.jfif',
    name: 'Item Five',
    id: 5,
  },
  {
    updatedAt: '2024-09-16T18:10:11.654Z',
    createdAt: '2024-09-16T18:10:11.654Z',
    writerId: 1,
    categoryId: 3,
    favoriteCount: 15,
    reviewCount: 7,
    rating: 4.8,
    image:
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Mogazoa/user/512/1726493654147/XL.jfif',
    name: 'Item Six',
    id: 6,
  },
  {
    updatedAt: '2024-09-16T19:25:40.987Z',
    createdAt: '2024-09-16T19:25:40.987Z',
    writerId: 2,
    categoryId: 1,
    favoriteCount: 2,
    reviewCount: 1,
    rating: 3.5,
    image:
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Mogazoa/user/512/1726493654147/XL.jfif',
    name: 'Item Seven',
    id: 7,
  },
  {
    updatedAt: '2024-09-16T20:40:18.741Z',
    createdAt: '2024-09-16T20:40:18.741Z',
    writerId: 3,
    categoryId: 2,
    favoriteCount: 20,
    reviewCount: 10,
    rating: 4.9,
    image:
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Mogazoa/user/512/1726493654147/XL.jfif',
    name: 'Item Eight',
    id: 8,
  },
  {
    updatedAt: '2024-09-16T21:55:29.159Z',
    createdAt: '2024-09-16T21:55:29.159Z',
    writerId: 4,
    categoryId: 3,
    favoriteCount: 1,
    reviewCount: 1,
    rating: 2.0,
    image:
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Mogazoa/user/512/1726493654147/XL.jfif',
    name: 'Item Nine',
    id: 9,
  },
  {
    updatedAt: '2024-09-16T23:05:37.852Z',
    createdAt: '2024-09-16T23:05:37.852Z',
    writerId: 5,
    categoryId: 1,
    favoriteCount: 7,
    reviewCount: 4,
    rating: 4.3,
    image:
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Mogazoa/user/512/1726493654147/XL.jfif',
    name: 'Item Ten',
    id: 10,
  },
]

export default function ReviewedProducts() {
  return (
    <ul className="grid grid-cols-3 gap-5 tablet:grid-cols-2 mobile:grid-cols-2 mobile:gap-3">
      {MOCK_DATA.map((MOCK) => (
        <MockCardItem key={MOCK.id} data={MOCK} />
      ))}
    </ul>
  )
}
