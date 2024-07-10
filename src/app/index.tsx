import React from 'react'
import {View, FlatList, Text} from 'react-native'
import {CardProduct} from '@/components/Product/CardProduct'
import {useGetProducts} from '@/hooks/products/useGetProducts'
import {tProduct} from '@/types/product'
import SkeletonCardProduct from '@/components/Product/CardProduct/Skeleton'
import {Entypo} from '@expo/vector-icons'

export default function Home() {
  const {data, isLoading, isError} = useGetProducts()
  const renderItem = ({item}: {item: tProduct}) => (
    <CardProduct key={item.id} product={item} />
  )

  if (isLoading) {
    return (
      <View className="flex-1 bg-white px-2">
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={() => <SkeletonCardProduct />}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={{paddingBottom: 10}}
        />
      </View>
    )
  }

  if (isError) {
    return (
      <View className="flex-1 bg-white justify-center items-center">
        <View className="pb-32">
          <Entypo name="emoji-sad" size={32} color="red" className="pb-4" />
          <Text className="font-bold text-4xl pb-4">Ops...</Text>
          <Text className="text-xl">Something went wrong!</Text>
          <Text className="text-xl">Try again later.</Text>
        </View>
      </View>
    )
  }

  if (data && data.length === 0) {
    return (
      <View className="flex-1 bg-white justify-center items-center">
        <View className="pb-32">
          <Entypo name="emoji-sad" size={32} color="red" className="pb-4" />
          <Text className="font-bold text-4xl pb-4">Ops...</Text>
          <Text className="text-xl">No products found!</Text>
          <Text className="text-xl">Try again later.</Text>
        </View>
      </View>
    )
  }

  return (
    <View className="flex-1 px-2 bg-slate-50">
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{paddingBottom: 10}}
      />
    </View>
  )
}
