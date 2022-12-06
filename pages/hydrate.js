import {
  dehydrate,
  QueryClient,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import Items from 'components/Items'
import React from 'react'
import { getProductLists } from 'utils/getProductLists'

const Hydrate = () => {
  const { data } = useQuery({ queryKey: ['about'], queryFn: getProductLists })

  return (
    <>
      <div>hydrate</div>
      {data?.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
      <Items />
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
