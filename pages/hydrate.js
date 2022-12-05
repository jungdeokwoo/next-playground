import {
  dehydrate,
  QueryClient,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import React from 'react'
import { getProductLists } from 'utils/getProductLists'

const Hydrate = () => {
  // const { data } = useQuery(['about'], getProductLists)

  return (
    <>
      <div>hydrate</div>
      {/* {data} */}
    </>
  )
}

export default Hydrate

export async function getServerSideProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['about'], () => getProductLists())

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
