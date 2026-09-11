import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'
import { View, Text, ActivityIndicator } from 'react-native'
import { AuthProvider, useAuth } from '../context/AuthContext'

const AppStack = () => {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <ActivityIndicator size='large' />
    )
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={!user}>
          <Stack.Screen name="(auth)" />
        </Stack.Protected>

        <Stack.Protected guard={!!user}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="lessons" />
          <Stack.Screen
            name="practice"
            options={{ gestureEnabled: false }}
          />
        </Stack.Protected>
      </Stack>

      {user ? (
        <Redirect href="/(tabs)" />
      ) : (
        <Redirect href="/(auth)/login" />
      )}
    </>
  )
}

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    CaveatBrush: require('../assets/fonts/CaveatBrush.ttf'),
    'Kalam-Bold': require('../assets/fonts/Kalam-Bold.ttf'),
    'Kalam-Regular': require('../assets/fonts/Kalam-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <AppStack />
      </AuthProvider>
    </SafeAreaProvider>
  )
}

export default RootLayout