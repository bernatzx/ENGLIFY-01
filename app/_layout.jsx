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
    PatrickHand: require("../assets/fonts/PatrickHand.ttf"),
    Quicksand: require("../assets/fonts/Quicksand.ttf"),
    "Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "Quicksand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
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