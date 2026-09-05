import React from 'react'
import { Tabs } from 'expo-router'
import { TabBarButton } from '../../components/TabBarButton'
import { SafeAreaView } from 'react-native-safe-area-context'

const TabLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 20, paddingHorizontal: 20 }}>
      <Tabs tabBar={(props) => <TabBarButton {...props} />} screenOptions={{ headerShown: false }}>
        <Tabs.Screen name='index' options={{ title: 'Home' }} />
        <Tabs.Screen name='lessons' options={{ title: 'Lessons' }} />
        <Tabs.Screen name='quiz' options={{ title: 'Quiz' }} />
        <Tabs.Screen name='profile' options={{ title: 'Profile' }} />
      </Tabs>
    </SafeAreaView>
  )
}

export default TabLayout
