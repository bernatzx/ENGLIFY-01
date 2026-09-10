import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts } from '../../../styles/global'
import { useAuth } from '../../../context/AuthContext'
import { getGrammars } from '../../../services/lesson'
import { useRouter } from 'expo-router'

const Grammar = () => {
  const { token } = useAuth()
  const router = useRouter()

  const [grammars, setGrammars] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchGrammars = async () => {
      try {
        const data = await getGrammars(token)
        setGrammars(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchGrammars()
  }, [token])

  const renderGrammar = ({ item }) => (
    <Pressable onPress={() => router.push(`/lessons/grammars/${item.id}`)} style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>
        {item.description}
      </Text>
    </Pressable>
  )

  return (
    <>
      <View style={styles.container}>

        {/* HEAD */}
        <View style={styles.head}>
          <Text style={{
            fontFamily: fonts.PRIMARY,
            color: colors.PRIMARY,
            fontSize: 52
          }}>Grammar</Text>
          <Text style={{
            fontFamily: fonts.SECONDARY,
            color: colors.PRIMARY_LIGTH,
            fontSize: 22
          }}>Master grammar, write with confidence</Text>
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
            data={grammars}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderGrammar}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.list}
          />
        )}

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
  list: {
    gap: 14,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 16,
    gap: 8,
  },
  name: {
    fontFamily: fonts.PRIMARY,
    color: colors.PRIMARY,
    fontSize: 24,
  },
  description: {
    fontFamily: fonts.SECONDARY,
    fontSize: 16,
    color: colors.PRIMARY_LIGTH,
  },

})