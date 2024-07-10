import React from 'react'
import {View} from 'react-native'

const SkeletonLoading = () => (
  <View className="p-2">
    <View className="bg-white p-4 rounded-lg mb-2 shadow-md">
      <View className="w-full h-40 bg-gray-300 rounded" />
      <View className="w-3/4 h-4 bg-gray-300 mb-2" />
      <View className="w-1/2 h-3 bg-gray-300 mb-2" />
      <View className="w-1/4 h-4 bg-gray-300" />
    </View>
  </View>
)

export default SkeletonLoading
