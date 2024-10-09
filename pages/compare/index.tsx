import ComparePage from '@/src/pages/compare'
import { GetServerSideProps } from 'next'

export default function CompareDefault() {
  return <ComparePage />
}

export const getServerSideProps = (async (context) => {
  const cookie = context.req.cookies.auth

  return {
    props: {
      cookie: cookie ? cookie : null,
    },
  }
}) satisfies GetServerSideProps
