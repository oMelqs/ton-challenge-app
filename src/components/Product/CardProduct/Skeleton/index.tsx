import React from 'react'
import {View} from 'react-native'

export function SkeletonCardProduct() {
  return (
    <View className="flex-1 m-2 p-4 bg-white rounded-lg items-center">
      <View className="w-48 h-48 mb-2 bg-gray-300 animate-pulse" />
      <View className="h-8 w-48 bg-gray-300 animate-pulse" />
      <View className="h-8 w-48 bg-gray-300 mt-2 animate-pulse" />
    </View>
  )
}

export default SkeletonCardProduct
