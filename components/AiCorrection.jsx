import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { colors, fonts, globalStyles } from '../styles/global'
import { Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

const AiCorrection = () => {
  const explanation = [
    "The sentence is in simple past tense (went, not go).",
    "The words 'pretty', 'car', and 'BBQ' are used correctly.",
    "The sentence is grammatically correct and natural."
  ]
  return (
    <View style={[styles.container, globalStyles.shadow]}>

      {/* HEADER */}
      <View style={styles.header}>
        <MaterialCommunityIcons style={styles.robotIcon} name='robot-happy-outline' size={28} />
        <View>
          <Text style={styles.textH1}>Ai Correction</Text>
          <Text style={styles.textLight}>Here's your correction and explanation:</Text>
        </View>
      </View>
      {/* ENDHEADER */}

      {/* BODY */}
      <View style={styles.body}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 7 }}>
          <Entypo style={styles.checkIcon} name='check' size={20} />
          <Text style={styles.textH2}>Correct Answer</Text>
        </View>
        <View style={[globalStyles.shadow, styles.correctAnswer]}>
          <Text style={styles.textMedium}>I went to a pretty car BBQ yesterday.</Text>
        </View>
        <View style={styles.explanation}>
          <View>
            <FontAwesome name='lightbulb-o' size={22} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.textH2}>Explanation</Text>
            {explanation.map((exp, i) => (
              <Text style={styles.expText} key={i}>• {exp}</Text>
            ))}
          </View>
        </View>
      </View>
      {/* ENDBODY */}
    </View>
  )
}

export default AiCorrection

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 14,
    borderWidth: 1,
    borderRadius: 14,
    backgroundColor: colors.SECONDARY_LIGHT,
    borderColor: colors.SECONDARY_LIGHT,
    marginVertical: 20,
    gap: 14
  },
  header: {
    flexDirection: 'row',
    gap: 14
  },
  robotIcon: {
    backgroundColor: colors.PRIMARY_LIGTH,
    color: colors.WHITE,
    padding: 8,
    borderRadius: 28,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  body: {
    flexDirection: 'column',
    padding: 14,
    backgroundColor: colors.WHITE,
    borderRadius: 14
  },
  checkIcon: {
    color: colors.WHITE,
    backgroundColor: '#f08080',
    padding: 4,
    borderRadius: 20
  },
  correctAnswer: {
    backgroundColor: '#ffdfdfdf',
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 14,
    marginTop: 7,
    marginBottom: 14
  },
  explanation: {
    flexDirection: 'row',
    gap: 7
  },
  expText: {
    fontFamily: fonts.SECONDARY,
    color: colors.PRIMARY
  },
  textH1: {
    fontFamily: fonts.PRIMARY,
    color: colors.PRIMARY,
    fontSize: 28
  },
  textH2: {
    fontFamily: fonts.BOLD,
    color: colors.PRIMARY,
    fontSize: 18
  },
  textMedium: {
    fontFamily: fonts.BOLD,
    color: colors.PRIMARY
  },
  textLight: {
    fontFamily: fonts.SECONDARY,
    color: colors.PRIMARY_LIGTH
  },
})