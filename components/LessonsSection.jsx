import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import LessonsCard from './LessonsCard'
import { globalStyles } from '../styles/global'

const LessonsSection = () => {

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{
          fontSize: 18,
          fontWeight: '500'
        }}>
          Let's improve your english skill
        </Text>
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
  }
})