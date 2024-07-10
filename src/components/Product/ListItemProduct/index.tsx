import React from 'react'
import {Text, View, Pressable, Image} from 'react-native'
import {tProduct} from '@/types/product'
import {Feather} from '@expo/vector-icons'
import {useCart} from '@/contexts/Cart/CartContext'

interface ListItemProductProps {
  product: tProduct
}

export function ListItemProduct({product}: ListItemProductProps) {
  const {removeFromCart} = useCart()

  return (
    <View className="flex-1 flex-row justify-between m-2 p-4 bg-white rounded-lg">
      <Image
        source={{uri: product.image}}
        alt={product.title}
        resizeMode="contain"
        className="w-24 h-24 mb-2 self-center"
      />
      <View className="pl-2 w-2/3">
        <Text className="text-lg font-bold">{product.title}</Text>
        <Text className="text-md font-light">{product.category}</Text>
        <Text className="text-green-500 pt-1 text-lg">
          {product.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </Text>
      </View>
      <View className="justify-end">
        <Pressable
          className="bg-red-500 p-1 px-2 rounded-lg"
          onPress={() => removeFromCart(product.id)}>
          <Feather name="minus" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  )
}
