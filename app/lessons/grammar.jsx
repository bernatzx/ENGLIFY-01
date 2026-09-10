import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../styles/global'

const Grammar = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Grammar</Text>
      </View>
    </>
  )
}

export default Grammar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.BG,
    paddingHorizontal: 20,
    paddingTop: 40,
    gap: 14
  },
})