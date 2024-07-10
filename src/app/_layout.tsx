import React from 'react'
import {Feather} from '@expo/vector-icons'
import {Link, Stack} from 'expo-router'
import {QueryClientProvider} from 'react-query'
import {queryClient} from '@/lib/react-query'

import '../styles/global.css'

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
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
              <Link href="/cart" suppressHighlighting asChild>
                <Feather name="shopping-cart" size={24} color="white" />
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
    </QueryClientProvider>
  )
}
