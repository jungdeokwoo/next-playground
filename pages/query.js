import { useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { getProductLists } from 'utils/getProductLists'

const Query = ({ data }) => {
  const query = useQuery(['about'], () => getProductLists(), {
    refetchOnWindowFocus: false,
    initialData: data,
  })
  return query.data.map(item => <div key={item.id}>{item.name}</div>)
}

export default Query

export async function getServerSideProps() {
  const data = await getProductLists()
  return { props: { data } }
}
