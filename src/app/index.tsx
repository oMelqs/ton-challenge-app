import React from 'react'
import {View, FlatList} from 'react-native'
import {CardProduct} from '@/components/Product/CardProduct'
import {useGetProducts} from '@/hooks/products/useGetProducts'
import {tProduct} from '@/types/product'
import SkeletonCardProduct from '@/components/Product/CardProduct/Skeleton'

export default function Home() {
  const {data, isLoading} = useGetProducts()
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
