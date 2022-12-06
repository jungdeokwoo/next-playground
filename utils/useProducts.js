import { useQuery } from '@tanstack/react-query'
import { getProductLists } from './getProductLists'

const useProducts = () => {
  return useQuery(['about'], () => getProductLists())
}

export { useProducts }
