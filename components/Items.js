import React from 'react'
import { useProducts } from 'utils/useProducts'

const Items = () => {
  const { data, isLoading } = useProducts()
  return data?.map(item => <div key={item.id}>{item.name}</div>)
}

export default Items
