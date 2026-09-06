import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/HomeHeader'
import LessonsSection from '../../components/LessonsSection'

const Home = () => {

  return (
    <>
      <View style={{ flex: 1 }}>
        <HomeHeader />
        <ScrollView style={{ flex: 1 }}>
          <LessonsSection />
        </ScrollView>
      </View>
    </>
  )
}

export default Home

const styles = StyleSheet.create({})