import {useQuery, UseQueryResult} from 'react-query'
import {tProduct} from '@/types/product'

export const useGetProducts = (): UseQueryResult<tProduct[], Error> => {
  return useQuery<tProduct[], Error>(
    'products',
    async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      } catch (error: unknown) {
        throw new Error(`Fetching products failed`)
      }
    },
    {
      onError: (error: Error) => {
        // Log the error or handle it as needed
        console.error('Error fetching products:', error)
        // You can also show a user-friendly message or perform other actions
      },
    },
  )
}
