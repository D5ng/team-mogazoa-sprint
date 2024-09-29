import { useSearchParams } from 'next/navigation'
import { CATEGORY_CHIPS } from '../ui'

export default function useCategoryQuery() {
  const _searchParams = useSearchParams()
  const searchParams = new URLSearchParams(_searchParams?.toString())
  const categoryQuery = searchParams.get('category')

  const category = categoryQuery
    ? CATEGORY_CHIPS.find((category) => category.id === +categoryQuery) || null
    : null

  return {
    category,
  }
}
