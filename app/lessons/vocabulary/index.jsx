import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts, globalStyles } from '../../../styles/global'
import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { useAuth } from '../../../context/AuthContext'
import { getVocabularies } from '../../../services/lesson'

const Vocabulary = () => {
  const { token } = useAuth()
  const router = useRouter()

  const [vocabularies, setVocabularies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const coloring = [colors.BLUE, colors.LIGHT_RED, colors.SECONDARY]

  useEffect(() => {
    const fetchVocabularies = async () => {
      try {
        const data = await getVocabularies(token)
        setVocabularies(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchVocabularies()
  }, [token])

  const renderVocabularies = ({ item }) => {
    const randomColor = coloring[Math.floor(Math.random() * coloring.length)]
    return (
      <Pressable onPress={() => router.push({
        pathname: `/lessons/vocabulary/${item.id}`,
        params: {
          word: item.word,
          meaning: item.meaning,
          part_of_speech: item.part_of_speech,
          example: item.example,
        },
      })} style={[globalStyles.shadow, styles.card, { backgroundColor: randomColor }]}>
        <View style={{ width: '80%' }}>
          <Text style={styles.word}>{item.word}</Text>
          <Text style={styles.meaning}>{item.meaning}</Text>
        </View>
        <AntDesign name='right' color={colors.PRIMARY_LIGTH} size={14} />
      </Pressable>
    )
  }

  return (
    <>
      <View style={styles.container}>

        {/* HEAD */}
        <View style={styles.head}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <AntDesign color={colors.PRIMARY_LIGTH} name='left' size={20} />
          </Pressable>
          <View>
            <Text style={{
              fontFamily: fonts.PRIMARY,
              color: colors.PRIMARY,
              fontSize: 28
            }}>Vocabulary</Text>
            <Text style={{
              fontFamily: fonts.SECONDARY,
              color: colors.PRIMARY_LIGTH,
              fontSize: 16
            }}>Discover words and use them naturally</Text>
          </View>
        </View>


        {/* CONTENT */}
        {loading ? (
          <ActivityIndicator size="large" />
        ) : error ? (
          <Text style={styles.error}>
            {error}
          </Text>
        ) : (
          <FlatList
            data={vocabularies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderVocabularies}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.list}
          />
        )}

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
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  backButton: {
    backgroundColor: 'rgba(136, 136, 136, 0.2)',
    padding: 10,
    borderRadius: 14
  },
  list: {
    width: '100%',
    gap: 14,
    paddingBottom: 20,
  },
  card: {
    padding: 18,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  word: {
    fontFamily: fonts.PRIMARY,
    color: colors.PRIMARY,
    fontSize: 24,
    textTransform: 'capitalize'
  },
  meaning: {
    fontFamily: fonts.SECONDARY,
    fontSize: 16,
    color: colors.PRIMARY_LIGTH,
    textTransform: 'capitalize'
  }
})