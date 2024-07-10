import React from 'react'
import {Text, View, Image, Pressable} from 'react-native'
import {tProduct} from '@/types/product'
import {Feather} from '@expo/vector-icons'
import {useCart} from '@/contexts/Cart/CartContext'

interface CardProductProps {
  product: tProduct
}

export function CardProduct({product}: CardProductProps) {
  const {cart, addToCart, removeFromCart} = useCart()

  const isInCart = cart.some((item: tProduct) => item.id === product.id)

  return (
    <View testID="card-product" className="flex-1 m-2 p-4 bg-white rounded-lg">
      <Image
        source={{uri: product.image}}
        alt={product.title}
        resizeMode="contain"
        className="w-24 h-24 mb-2 self-center"
      />
      <Text className="text-lg font-bold" numberOfLines={2}>
        {product.title}
      </Text>
      <Text className="text-md font-light" numberOfLines={2}>
        {product.category}
      </Text>
      <View className="justify-between flex-row mt-2">
        <Text className="text-green-500 pt-1 text-lg">
          {product.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </Text>
        {isInCart ? (
          <Pressable
            testID="remove-button"
            className="bg-red-500 p-1 px-2 rounded-lg"
            onPress={() => removeFromCart(product.id)}>
            <Feather name="minus" size={24} color="white" />
          </Pressable>
        ) : (
          <Pressable
            testID="add-button"
            className="bg-orange-300 p-1 px-2 rounded-lg"
            onPress={() => addToCart(product)}>
            <Feather name="plus" size={24} color="white" />
          </Pressable>
        )}
      </View>
    </View>
  )
}
