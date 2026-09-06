import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/HomeHeader'
import LessonsSection from '../../components/LessonsSection'
import { globalStyles } from '../../styles/global'
import { useRouter } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = () => {
  const router = useRouter()
  const startExam = async () => {
    await AsyncStorage.setItem('exam_active', 'true')
    router.push('/exam')
  }

  return (
    <>
      <View style={{ flex: 1 }}>
        
        {/* HOME HEADER UI */}
        <HomeHeader />

        <ScrollView style={{ flex: 1 }}>

          {/* LESSONS SECTION */}
          <LessonsSection />

          {/* READY ASKING SECTION */}
          <Text style={styles.ready_qstn}>
            Ready for your daily exam?
          </Text>
          <Pressable onPress={startExam} style={[styles.ready_btn, globalStyles.shadow]}>
            <Text style={styles.ready_txt}>
              Ready
            </Text>
          </Pressable>

        </ScrollView>
      </View>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  ready_qstn: {
    fontSize: 18,
    paddingBottom: 15,
    fontWeight: '500'
  },
  ready_btn: {
    padding: 15,
    borderRadius: 14,
    borderColor: '#f7cace',
    borderWidth: 2,
    backgroundColor: '#f2d1d4'
  },
  ready_txt: {
    fontSize: 24,
    textAlign: 'center',
    color: '#d8959b',
    textTransform: 'uppercase',
    fontWeight: '600'
  }
})