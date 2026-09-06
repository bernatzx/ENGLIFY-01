import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import LessonsCard from './LessonsCard'
import { globalStyles } from '../styles/global'
import { fontStyles } from '../styles/fonts';

const LessonsSection = () => {

  return (
    <View style={{ paddingBottom: 35 }}>
      <View style={styles.title}>
        <Text style={[
          fontStyles.subtitle_bold,
          fontStyles.secondary_color,
          {
            fontSize: 18
          }
        ]}>
          Let's improve your english skill
        </Text>
      </View>
      <LessonsCard />
    </View>
  )
}

export default LessonsSection

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 15,
    paddingTop: 35
  }
})