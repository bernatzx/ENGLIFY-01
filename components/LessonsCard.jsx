import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { colors, fonts, globalStyles } from '../styles/global'
import { useRouter } from 'expo-router'
import AnimatedPressable from './AnimatedPressable'

const LessonsCard = () => {
  const router = useRouter()

  const lessons = [
    {
      id: 1,
      title: 'Grammar',
      subtitle: 'Learn how sentences work.',
      primarybgcolor: '#f3c3b2',
      iconcolor: '#e78967',
      bordercolor: '#f7c1ae',
      icon: 'edit-3',
      route: '/lessons/grammars/'
    },
    {
      id: 2,
      title: 'Vocabulary',
      subtitle: 'Build your vocabulary.',
      primarybgcolor: '#99cdd8',
      iconcolor: '#4996b5',
      bordercolor: '#94d0dc',
      icon: 'book-open',
      route: '/lessons/vocabulary/'
    }
  ]
  return (
    <View style={styles.container}>
      {lessons.map((lesson) => (
        <AnimatedPressable
          onPress={() => router.push(lesson.route)}
          key={lesson.id}
          style={[
            styles.cards,
            globalStyles.shadow,
            {
              backgroundColor: lesson.primarybgcolor,
              borderColor: lesson.bordercolor,
              borderWidth: 2
            }
          ]}
        >
          <View style={styles.cardheader}>
            <Feather style={{
              color: colors.WHITE,
              backgroundColor: lesson.iconcolor,
              padding: 12,
              borderRadius: 14
            }} name={lesson.icon} size={20} />
            <Feather style={{
              backgroundColor: colors.WHITE,
              color: lesson.iconcolor,
              padding: 6,
              borderRadius: 20
            }} name='arrow-right' size={20} />
          </View>
          <Text style={{ fontSize: 26, marginBottom: 5, fontFamily: fonts.PRIMARY, color: colors.PRIMARY }}>
            {lesson.title}
          </Text>
          <Text style={{ color: colors.PRIMARY, fontFamily: fonts.SECONDARY }}>{lesson.subtitle}</Text>
        </AnimatedPressable>
      ))}
    </View>
  )
}

export default LessonsCard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 15
  },
  cards: {
    padding: 18,
    borderRadius: 20
  },
  cardheader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8
  }
})