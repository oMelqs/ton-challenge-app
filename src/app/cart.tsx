import {ListItemProduct} from '@/components/Product/ListItemProduct'
import {useCart} from '@/contexts/Cart/CartContext'
import {tProduct} from '@/types/product'
import {FlatList, View} from 'react-native'

export default function Cart() {
  const {cart} = useCart()
  const renderItem = ({item}: {item: tProduct}) => (
    <ListItemProduct key={item.id} product={item} />
  )

  return (
    <View className="flex-1 px-2 bg-slate-50">
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{paddingBottom: 10}}
      />
    </View>
  )
}
