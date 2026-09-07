import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'
import { View } from 'react-native'
import { AuthProvider, useAuth } from '../context/AuthContext'

const RootNavigation = () => {
  const { user } = useAuth()

  if (!user) {
    return <Redirect href="/(auth)/login" />
  }

  return <Redirect href="/(tabs)" />
}

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    CaveatBrush: require("../assets/fonts/CaveatBrush.ttf"),
    "Kalam-Bold": require("../assets/fonts/Kalam-Bold.ttf"),
    "Kalam-Regular": require("../assets/fonts/Kalam-Regular.ttf")
  })

  if (!fontsLoaded) {
    return <View />
  }

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name='(auth)' />
          <Stack.Screen name='(tabs)' />
          <Stack.Screen name="exam" options={{ gestureEnabled: false }} />
        </Stack>
        <RootNavigation />
      </AuthProvider>
    </SafeAreaProvider>
  )
}

export default RootLayout