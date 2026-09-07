import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/HomeHeader'
import LessonsSection from '../../components/LessonsSection'
import { colors, fonts, globalStyles } from '../../styles/global'
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
      <View style={{ flex: 1, backgroundColor: colors.BG, paddingTop: 20, paddingHorizontal: 20 }}>

        {/* HOME HEADER UI */}
        <HomeHeader />

        <ScrollView style={{ flex: 1 }}>

          {/* LESSONS SECTION */}
          <LessonsSection />

          {/* READY ASKING SECTION */}
          <Text style={{ fontFamily: fonts.BOLD, color: colors.PRIMARY_LIGTH, fontSize: 18, paddingBottom: 15 }}>
            Ready for your daily exam?
          </Text>
          <Pressable onPress={startExam} style={[
            styles.ready_btn,
            globalStyles.shadow
          ]}>
            <Text style={{ fontFamily: fonts.PRIMARY, fontSize: 36, textAlign: 'center', color: '#eee' }}>
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