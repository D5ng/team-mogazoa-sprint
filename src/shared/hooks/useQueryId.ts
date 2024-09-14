import { useRouter } from 'next/router'

export default function useQueryId(queryId: string) {
  const router = useRouter()
  const id = router.query[queryId]
  if (id) throw new Error(`Query Params에 ${queryId}가 없습니다.`)

  const result = id!
  return result
}
