import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { colors, fonts, globalStyles } from '../../styles/global'
import { AntDesign } from '@expo/vector-icons'

const Lessons = () => {
  const coloring = [colors.BLUE, colors.LIGHT_RED, colors.SECONDARY]
  const practices = Array.from({ length: 4 }, () => ({
    title: "Make a sentencee",
    date: '15 November 2003',
    score: 89,
    bg: coloring[Math.floor(Math.random() * coloring.length)]
  }))

  return (
    <>
      <View style={styles.container}>

        {/* HEAD */}
        <View style={styles.head}>
          <Text style={{
            fontFamily: fonts.PRIMARY,
            color: colors.PRIMARY,
            fontSize: 52
          }}>History</Text>
          <Text style={{
            fontFamily: fonts.SECONDARY,
            color: colors.PRIMARY_LIGTH,
            fontSize: 24
          }}>Keep track of your progress</Text>
        </View>



        {/* BODY */}
        <View>
          <Text style={{
            fontFamily: fonts.PRIMARY,
            color: colors.PRIMARY_LIGTH,
            fontSize: 24
          }}>Practices</Text>
        </View>

        {/* LISTS */}
        <ScrollView>
          {practices.map((item, index) => (
            <Pressable key={index} style={[styles.list, globalStyles.shadow, { backgroundColor: item.bg }]}>
              <View>
                <Text style={{
                  fontFamily: fonts.PRIMARY,
                  color: colors.PRIMARY,
                  fontSize: 24
                }}>{item.title}</Text>
                <Text style={{
                  fontFamily: fonts.SECONDARY,
                  color: colors.PRIMARY_LIGTH,
                  fontSize: 16
                }}>{item.date}</Text>
              </View>
              <View style={styles.listR}>
                <View style={styles.score}>
                  <Text style={{
                    fontFamily: fonts.BOLD,
                    color: colors.PRIMARY_LIGTH,
                    fontSize: 16
                  }}>Score</Text>
                  <Text style={{
                    fontFamily: fonts.BOLD,
                    fontSize: 20
                  }}>{item.score}%</Text>
                </View>
                <AntDesign color={colors.PRIMARY} name='right' size={18} />
              </View>
            </Pressable>
          ))}
        </ScrollView>

      </View>
    </>
  )
}

export default Lessons

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.BG,
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 14
  },
  list: {
    marginBottom: 14,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 14
  },
  listR: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14
  },
  score: {
    backgroundColor: 'rgba(136, 136, 136, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 25
  }
})