import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const AuthLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeAreaView>
  )
}

export default AuthLayout