import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/HomeHeader'
import LessonsSection from '../../components/LessonsSection'
import { globalStyles } from '../../styles/global'
import { useRouter } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { fontStyles } from '../../styles/fonts'

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
          <Text style={[
            styles.ready_qstn,
            fontStyles.subtitle_bold,
            fontStyles.secondary_color,
            { fontSize: 18, paddingBottom: 15 }
          ]}>
            Ready for your daily exam?
          </Text>
          <Pressable onPress={startExam} style={[
            styles.ready_btn,
            globalStyles.shadow
          ]}>
            <Text style={[
              fontStyles.title,
              { fontSize: 36, textAlign: 'center', color: '#eee' }
            ]}>
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
  ready_btn: {
    padding: 8,
    borderRadius: 50,
    borderColor: '#f7cace',
    marginHorizontal: 50,
    borderWidth: 2,
    backgroundColor: '#f2d1d4'
  }
})