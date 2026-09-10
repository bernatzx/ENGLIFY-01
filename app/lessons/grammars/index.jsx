import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts, globalStyles } from '../../../styles/global'
import { useAuth } from '../../../context/AuthContext'
import { getGrammars } from '../../../services/lesson'
import { useRouter } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'

const Grammar = () => {
  const { token } = useAuth()
  const router = useRouter()

  const [grammars, setGrammars] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const coloring = [colors.BLUE, colors.LIGHT_RED, colors.SECONDARY]

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

  const renderGrammar = ({ item }) => {
    const randomColor = coloring[Math.floor(Math.random() * coloring.length)]
    return (
      <Pressable onPress={() => router.push({
        pathname: `/lessons/grammars/${item.id}`,
        params: {
          name: item.name,
          description: item.description,
          formula: item.formula,
          example: item.example,
        },
      })} style={[globalStyles.shadow, styles.card, { backgroundColor: randomColor }]}>
        <View style={{ width: '80%' }}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
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
          <View style={{
            flexDirection: 'column'
          }}>
            <Text style={{
              fontFamily: fonts.PRIMARY,
              color: colors.PRIMARY,
              fontSize: 28
            }}>Grammar</Text>
            <Text style={{
              fontFamily: fonts.SECONDARY,
              color: colors.PRIMARY_LIGTH,
              fontSize: 16
            }}>Master grammar, write with confidence</Text>
          </View>
        </View>

        {/* CONTENT */}
        {loading ? (
          <ActivityIndicator size="large" />
        ) : error ? (
          <Text>
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
  name: {
    fontFamily: fonts.PRIMARY,
    color: colors.PRIMARY,
    fontSize: 22,
    textTransform: 'capitalize'
  },
  description: {
    fontFamily: fonts.SECONDARY,
    fontSize: 14,
    color: colors.PRIMARY_LIGTH
  }
})