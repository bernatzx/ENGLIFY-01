import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import LessonsCard from './LessonsCard'
import { useRouter } from 'expo-router'

const LessonsSection = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontSize: 20, fontWeight: '500'}}>Build your english skill</Text>
        <Pressable
          style={styles.titlebutton}
          onPress={() => router.navigate('/lessons')}
        >
          <Text style={{ color: '#b56a52' }} >See all</Text>
          <MaterialCommunityIcons style={{ color: '#b56a52' }} name='arrow-right' size={16} />
        </Pressable>
      </View>
      <LessonsCard />
    </View>
  )
}

export default LessonsSection

const styles = StyleSheet.create({
  container: {
    paddingBottom: 35
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 15,
    paddingTop: 35
  },
  titlebutton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  }
})