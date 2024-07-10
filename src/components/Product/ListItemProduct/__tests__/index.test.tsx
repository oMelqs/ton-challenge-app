import React from 'react'
import {render, fireEvent, RenderAPI} from '@testing-library/react-native'
import {CartProvider} from '@/contexts/Cart/CartContext'
import {ListItemProduct} from '../index'
import {mockProduct} from '@/mocks/products'

describe('ListItemProduct', () => {
  let renderApi: RenderAPI

  beforeEach(() => {
    renderApi = render(
      <CartProvider>
        <ListItemProduct product={mockProduct} />
      </CartProvider>,
    )
  })

  it('renders correctly', () => {
    const {getByText, getByTestId} = renderApi

    expect(getByText('Test Product')).toBeTruthy()
    expect(getByText('Test Category')).toBeTruthy()
    expect(getByText('$29.99')).toBeTruthy()
    expect(getByTestId('list-item-product')).toBeTruthy()
    expect(getByTestId('remove-button')).toBeTruthy()
  })

  it('removes product from cart on button press', () => {
    const {getByTestId} = renderApi

    const button = getByTestId('remove-button')
    fireEvent.press(button)

    // Additional assertions to check if the product was removed from the cart
  })
})
