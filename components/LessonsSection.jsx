import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import LessonsCard from './LessonsCard'
import { useRouter } from 'expo-router'
import { globalStyles } from '../styles/global'

const LessonsSection = () => {
  const router = useRouter();

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
      <Text style={{
        fontSize: 18,
        paddingTop: 35,
        paddingBottom: 15,
        fontWeight: '500'
      }}>
        Ready for your daily exam?
      </Text>
      <Pressable style={[styles.ready_btn, globalStyles.shadow]}>
        <Text style={{
          fontSize: 24,
          textAlign: 'center',
          color: '#d8959b',
          textTransform: 'uppercase',
          fontWeight: '600'
        }}>
          Ready
        </Text>
      </Pressable>
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
  ready_btn: {
    padding: 15,
    borderRadius: 14,
    borderColor: '#f7cace',
    borderWidth: 2,
    backgroundColor: '#f2d1d4'
  }
})