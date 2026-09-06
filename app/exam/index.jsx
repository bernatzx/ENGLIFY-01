import React, { useEffect } from 'react'
import { View, Text, Pressable, StyleSheet, BackHandler } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRouter } from 'expo-router'

const Exam = () => {
  const router = useRouter()
  useEffect(() => {
    const backAction = () => {
      return true
    }
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    )

    return () => backHandler.remove()
  }, [])

  const finishExam = async () => {
    await AsyncStorage.removeItem('exam_active')
    router.replace('/(tabs)')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>English Exam</Text>

      <Text style={styles.question}>
        What is the correct answer?
      </Text>

      <Pressable style={styles.option}>
        <Text>A. Answer A</Text>
      </Pressable>

      <Pressable style={styles.option}>
        <Text>B. Answer B</Text>
      </Pressable>

      <Pressable style={styles.option}>
        <Text>C. Answer C</Text>
      </Pressable>

      <Pressable style={styles.option}>
        <Text>D. Answer D</Text>
      </Pressable>

      <Pressable
        style={styles.finishButton}
        onPress={finishExam}
      >
        <Text style={styles.finishText}>
          Finish Exam
        </Text>
      </Pressable>
    </View>
  )
}

export default Exam

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 30,
  },

  question: {
    fontSize: 18,
    marginBottom: 20,
  },

  option: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },

  finishButton: {
    marginTop: 30,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#4F46E5',
    alignItems: 'center',
  },

  finishText: {
    color: 'white',
    fontWeight: '600',
  },
})