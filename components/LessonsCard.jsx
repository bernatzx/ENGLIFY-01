import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { globalStyles } from '../styles/global'
import { fontStyles } from '../styles/fonts'

const LessonsCard = () => {
  const lessons = [
    {
      id: 1,
      title: 'Grammar',
      subtitle: 'Learn how sentences work.',
      primarybgcolor: '#f8d8ca',
      iconcolor: '#b55c49',
      bordercolor: '#efd0c3',
      icon: 'edit-3'
    },
    {
      id: 2,
      title: 'Vocabulary',
      subtitle: 'Build your vocabulary.',
      primarybgcolor: '#d9e2ea',
      iconcolor: '#4996b5',
      bordercolor: '#d2dbe2',
      icon: 'book-open'
    }
  ]
  return (
    <View style={styles.container}>
      {lessons.map((lesson) => (
        <View
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
              backgroundColor: '#f5f1dc',
              color: lesson.iconcolor,
              padding: 12,
              borderRadius: 14
            }} name={lesson.icon} size={20} />
            <Feather style={{
              backgroundColor: '#f5f1dc',
              color: lesson.iconcolor,
              padding: 6,
              borderRadius: 20
            }} name='arrow-right' size={20} />
          </View>
          <Text style={[
            fontStyles.title,
            fontStyles.primary_color,
            {
              fontSize: 26,
              marginBottom: 5
            }
          ]}>{lesson.title}</Text>
          <Text style={[
            fontStyles.subtitle,
            fontStyles.primary_color
          ]}>{lesson.subtitle}</Text>
        </View>
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