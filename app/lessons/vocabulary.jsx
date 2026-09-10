import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../styles/global'

const Vocabulary = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Vocabulary</Text>
      </View>
    </>
  )
}

export default Vocabulary

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.BG,
    paddingHorizontal: 20,
    paddingTop: 40,
    gap: 14
  }
})