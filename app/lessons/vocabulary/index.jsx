import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../styles/global'

const Vocabulary = () => {
  return (
    <>
      <View style={styles.container}>

        {/* HEAD */}
        <View style={styles.head}>
          <Text style={{
            fontFamily: fonts.PRIMARY,
            color: colors.PRIMARY,
            fontSize: 52
          }}>Vocabulary</Text>
          <Text style={{
            fontFamily: fonts.SECONDARY,
            color: colors.PRIMARY_LIGTH,
            fontSize: 22
          }}>Discover words and use them naturally</Text>
        </View>

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