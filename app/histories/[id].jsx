import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const HistoryDetail = () => {
  const { id } = useLocalSearchParams()
  return (
    <View style={{ paddingTop: 50 }}>
      <Text>{id}</Text>
    </View>
  )
}

export default HistoryDetail

const styles = StyleSheet.create({})