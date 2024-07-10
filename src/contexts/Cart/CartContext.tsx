/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {createContext, useContext, useState} from 'react'
import {tProduct} from '@/types/product'

type CartContextType = {
  cart: tProduct[]
  addToCart: (product: tProduct) => void
  removeFromCart: (productId: number) => void
}

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: (product: tProduct) => {},
  removeFromCart: (productId: number) => {},
})

export const useCart = () => useContext(CartContext)

export const CartProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [cart, setCart] = useState<tProduct[]>([])

  const addToCart = (product: tProduct) => {
    setCart((prevCart) => [...prevCart, product])
  }

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  )
}
