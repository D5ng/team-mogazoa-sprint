export const CATEGORY_CHIPS = [
  {
    id: 1,
    name: '음악',
  },
  {
    id: 2,
    name: '영화/드라마',
  },
  {
    id: 3,
    name: '강의/책',
  },
  {
    id: 4,
    name: '호텔',
  },
  {
    id: 5,
    name: '가구/인테리어',
  },
  {
    id: 6,
    name: '전자기기',
  },
  {
    id: 7,
    name: '식당',
  },
  {
    id: 8,
    name: '화장품',
  },
  {
    id: 9,
    name: '의류/악세서리',
  },
  {
    id: 10,
    name: '앱',
  },
  {
    id: 11,
    name: '없음',
  },
] as const

export const CATEGORY_COLOR_VARIANTS: Record<string, string> = {
  음악: 'bg-[#C5D17C1A] text-[#C5D17C]',
  '영화/드라마': 'bg-[#F755321A] text-[#F75532]',
  '강의/책': 'bg-[#A953FF1A] text-[#A953FF]',
  호텔: 'bg-[#49AF1A1A] text-[#49AF1A]',
  '가구/인테리어': 'bg-[#D676C11A] text-[#FF7E46]',
  식당: 'bg-[#FF7E461A] text-[#F75532]',
  전자기기: 'bg-[#23B5811A] text-[#23B581]',
  화장품: 'bg-[#FD529A1A] text-[#FD529A]',
  '의류/악세서리': 'bg-[#757AFF1A] text-[#757AFF]',
  앱: 'bg-[#3098E31A] text-[#3098E3]',
  없음: 'text-white text-base',
}
