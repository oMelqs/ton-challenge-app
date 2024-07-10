import {tProduct} from '@/types/product'

export const mockProduct: tProduct = {
  id: 1,
  title: 'Test Product',
  price: 29.99,
  description: 'This is a test product',
  category: 'Test Category',
  image: 'https://via.placeholder.com/150',
  rating: {
    rate: 4.5,
    count: 10,
  },
}
