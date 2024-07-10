import {useQuery} from 'react-query'
export const useGetProducts = () => {
  return useQuery('products', async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    return response.json()
  })
}
