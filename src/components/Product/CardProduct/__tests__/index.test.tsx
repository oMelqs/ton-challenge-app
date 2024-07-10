import React from 'react'
import {render, fireEvent} from '@testing-library/react-native'
import {CardProduct} from '../index'
import {CartProvider} from '@/contexts/Cart/CartContext'
import {mockProduct} from '@/mocks/products'

describe('CardProduct', () => {
  it('renders correctly', () => {
    const {getByText} = render(
      <CartProvider>
        <CardProduct product={mockProduct} />
      </CartProvider>,
    )

    expect(getByText('Test Product')).toBeTruthy()
    expect(getByText('Test Category')).toBeTruthy()
    expect(getByText('$29.99')).toBeTruthy()
  })

  it('adds product to cart on button press', () => {
    const {getByTestId} = render(
      <CartProvider>
        <CardProduct product={mockProduct} />
      </CartProvider>,
    )

    const button = getByTestId('add-button')
    fireEvent.press(button)
  })
})
