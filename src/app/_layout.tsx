import React from 'react'
import {Feather} from '@expo/vector-icons'
import {Link, Stack} from 'expo-router'

import '../styles/global.css'

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Produtos',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Link href="/cart">
              <Feather name="shopping-cart" size={24} color="white" />
            </Link>
          ),
        }}
      />

      <Stack.Screen
        name="cart"
        options={{
          headerTitle: 'Carrinho de Compras',
          headerStyle: {
            backgroundColor: '#4CAF50',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackVisible: true,
          headerBackTitleVisible: false,
        }}
      />
    </Stack>
  )
}
