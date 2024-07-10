import {ListItemProduct} from '@/components/Product/ListItemProduct'
import {useCart} from '@/contexts/Cart/CartContext'
import {tProduct} from '@/types/product'
import {FlatList, Text, View} from 'react-native'

export default function Cart() {
  const {cart} = useCart()

  const renderItem = ({item}: {item: tProduct}) => (
    <ListItemProduct key={item.id} product={item} />
  )

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price, 0)
      .toLocaleString('en-US', {style: 'currency', currency: 'USD'})
  }
  return (
    <View className="flex-1">
      <View className="py-2 pb-4 flex-row justify-around bg-orange-300">
        <Text className="text-lg font-bold text-white">
          {cart.length} Added products
        </Text>
        <Text className="text-lg font-bold text-white">
          Total: {calculateTotal()}
        </Text>
      </View>
      <View className="px-2">
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{paddingBottom: 10}}
        />
      </View>
    </View>
  )
}
