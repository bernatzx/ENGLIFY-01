import { ScrollView, StyleSheet, Text, View, Pressable, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeHeader from '../../components/HomeHeader'
import LessonsSection from '../../components/LessonsSection'
import { colors, fonts, globalStyles } from '../../styles/global'
import { useRouter } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useAuth } from '../../context/AuthContext'
import { getTodayPracticeStatus } from '../../services/practice'

const Home = () => {
  const router = useRouter()
  const { token } = useAuth()

  const [practiceCompleted, setPracticeCompleted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const status = await getTodayPracticeStatus(token)
        setPracticeCompleted(status.completed)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    if (token) {
      checkStatus()
    }
  }, [token])

  const startPractice = async () => {
    await AsyncStorage.setItem('practice_active', 'true')
    router.push('/practice')
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
          {loading ? (
            <ActivityIndicator size="small" color={colors.WHITE} />
          ) : (
            <>
              <Text style={{ fontFamily: fonts.BOLD, color: colors.PRIMARY_LIGTH, fontSize: 18, paddingBottom: 15 }}>
                {practiceCompleted
                  ? "You already finished today's practice"
                  : 'Ready for your daily practice?'}
              </Text>
              <Pressable onPress={startPractice} disabled={practiceCompleted} style={[
                styles.ready_btn,
                globalStyles.shadow,
                practiceCompleted && { opacity: 0.5 }
              ]}>
                <Text style={{ fontFamily: fonts.PRIMARY, fontSize: 36, textAlign: 'center', color: colors.WHITE }}>
                  {practiceCompleted ? 'Completed ✓' : 'Ready'}
                </Text>
              </Pressable>
            </>
          )}

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
    borderColor: colors.PRIMARY,
    marginHorizontal: 50,
    borderWidth: 1,
    backgroundColor: colors.PRIMARY
  }
})