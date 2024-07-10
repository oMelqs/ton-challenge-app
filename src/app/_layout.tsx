import React from 'react'
import {View} from 'react-native'
import {Link, Stack} from 'expo-router'
import {QueryClientProvider} from 'react-query'
import {Feather} from '@expo/vector-icons'
import {queryClient} from '@/lib/react-query'
import {CartProvider, useCart} from '@/contexts/Cart/CartContext'

import '../styles/global.css'

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <AppStack />
      </CartProvider>
    </QueryClientProvider>
  )
}

function AppStack() {
  const {cart} = useCart()

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fdba74',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Produtos',
          headerRight: () => (
            <Link href="/cart" suppressHighlighting>
              <Feather name="shopping-cart" size={24} color="white" />
              {cart.length > 0 && (
                <View className="relative flex h-3 w-3">
                  <View className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></View>
                  <View className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></View>
                </View>
              )}
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="cart"
        options={{
          headerTitle: 'Carrinho de Compras',
          headerBackVisible: true,
          headerBackTitleVisible: false,
        }}
      />
    </Stack>
  )
}
