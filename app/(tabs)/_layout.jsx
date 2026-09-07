import React from 'react'
import { Tabs } from 'expo-router'
import { TabBarButton } from '../../components/TabBarButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../styles/global'

const TabLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.BG }}>
      <Tabs tabBar={(props) => <TabBarButton {...props} />} screenOptions={{ headerShown: false }}>
        <Tabs.Screen name='index' options={{ title: 'Home' }} />
        <Tabs.Screen name='history' options={{ title: 'History' }} />
        <Tabs.Screen name='profile' options={{ title: 'Profile' }} />
      </Tabs>
    </SafeAreaView>
  )
}

export default TabLayout
