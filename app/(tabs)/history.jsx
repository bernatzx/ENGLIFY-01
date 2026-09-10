import { ActivityIndicator, FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack, useRouter } from 'expo-router'
import { colors, fonts, globalStyles } from '../../styles/global'
import { AntDesign } from '@expo/vector-icons'
import { useAuth } from '../../context/AuthContext'
import { getPracticeHistory } from '../../services/practice'

const Lessons = () => {
  const { token } = useAuth()
  const router = useRouter()

  const [histories, setHistories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const coloring = [colors.BLUE, colors.LIGHT_RED, colors.SECONDARY]

  useEffect(() => {
    const loadHistory = async () => {
      try {
        setLoading(true)
        setError(null)

        if (!token) return

        const data = await getPracticeHistory(token)
        setHistories(data)
      } catch (error) {
        console.error('Failed to load history:', error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    loadHistory()
  }, [token])

  const renderBox = ({ item }) => {
    const randomColor = coloring[Math.floor(Math.random() * coloring.length)]
    return (
      <Pressable onPress={() => router.push(`/histories/${item.id}`)} style={[styles.card, globalStyles.shadow, { backgroundColor: randomColor }]}>
        <View>
          <Text style={{
            fontFamily: fonts.PRIMARY,
            color: colors.PRIMARY,
            fontSize: 24
          }}>{item.instruction}</Text>
          <Text style={{
            fontFamily: fonts.SECONDARY,
            color: colors.PRIMARY_LIGTH,
            fontSize: 16
          }}>
            {new Date(`${item.completed_at}Z`).toLocaleDateString('id-ID', {
              timeZone: 'Asia/Jakarta',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </Text>
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
    )
  }

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

        {/* CONTENT */}
        {loading ? (
          <ActivityIndicator size="large" />
        ) : error ? (
          <Text style={styles.error}>
            {error}
          </Text>
        ) : (
          <FlatList
            data={histories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderBox}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.list}
          />
        )}

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