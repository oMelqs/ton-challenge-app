import React from 'react'
import {Text, View, Image, Pressable} from 'react-native'
import {tProduct} from '@/types/product'
import {Feather} from '@expo/vector-icons'

interface CardProductProps {
  product: tProduct
}

export function CardProduct({product}: CardProductProps) {
  return (
    <View className="flex-1 m-2 p-4 bg-white rounded-lg">
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
        <Pressable className="bg-orange-300 p-1 px-2 rounded-lg">
          <Feather name="plus" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  )
}
