export const LATEST_DROPDOWN_ITEMS = [
  { name: '최신순', value: 'recent' } as const,
  {
    name: '별점 높은순',
    value: 'ratingDesc',
  } as const,
  {
    name: '별점 낮은순',
    value: 'ratingAsc',
  } as const,
  {
    name: '좋아요순',
    value: 'likeCount',
  } as const,
] as const

export type ReviewSortOptions = (typeof LATEST_DROPDOWN_ITEMS)[number]['value']
