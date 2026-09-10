import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { colors, fonts, globalStyles } from '../../../styles/global'
import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons'

const GrammarDetail = () => {
  const router = useRouter()
  const { id, word, meaning, part_of_speech, example } = useLocalSearchParams()

  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={() => router.back()} style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 20
        }}>
          <AntDesign style={styles.backButton} color={colors.PRIMARY_LIGTH} name='left' size={20} />
          <Text style={{
            fontFamily: fonts.PRIMARY,
            color: colors.PRIMARY,
            fontSize: 28
          }}>Return</Text>
        </Pressable>

        <View style={[globalStyles.shadow, styles.box]}>
          <Text style={styles.word}>{word}</Text>
          <Text style={styles.meaning}>{meaning}</Text>

          <View style={[styles.boxChild, { backgroundColor: colors.LIGHT_RED }]}>
            <Feather name='info' color={colors.PRIMARY_LIGTH} size={16} />
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.textOne}>Part of Speech: </Text>
              <Text style={styles.textTwo}>{part_of_speech}</Text>
            </View>
          </View>

          <View style={[styles.boxChild, { backgroundColor: colors.BLUE }]}>
            <MaterialCommunityIcons name='pencil' color={colors.PRIMARY_LIGTH} size={16} />
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.textOne}>Example: </Text>
              <Text style={styles.textTwo}>{example}</Text>
            </View>
          </View>

        </View>
      </View>
    </>
  )
}

export default GrammarDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.BG,
    paddingHorizontal: 20,
    paddingTop: 40,
    gap: 14
  },
  backButton: {
    backgroundColor: 'rgba(136, 136, 136, 0.2)',
    padding: 10,
    borderRadius: 14
  },
  box: {
    flexDirection: 'column',
    gap: 7,
    backgroundColor: colors.WHITE,
    padding: 14,
    borderRadius: 14
  },
  word: {
    textTransform: 'capitalize',
    fontFamily: fonts.BOLD,
    color: colors.PRIMARY,
    fontSize: 24
  },
  meaning: {
    textTransform: 'capitalize',
    fontFamily: fonts.BOLD,
    color: colors.PRIMARY_LIGTH,
    fontSize: 18
  },
  boxChild: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 5,
    padding: 7,
    borderRadius: 7
  },
  textOne: {
    fontFamily: fonts.PRIMARY,
    color: colors.PRIMARY_LIGTH,
    fontSize: 24
  },
  textTwo: {
    fontFamily: fonts.BOLD,
    color: colors.PRIMARY,
    fontSize: 20
  }
})