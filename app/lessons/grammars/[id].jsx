import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { colors, fonts, globalStyles } from '../../../styles/global'
import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons'

const GrammarDetail = () => {
  const router = useRouter()
  const { id, name, description, formula, example } = useLocalSearchParams()

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
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>

          <View style={[styles.boxChild, { backgroundColor: colors.LIGHT_RED }]}>
            <Feather name='info' color={colors.PRIMARY_LIGTH} size={16} />
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.textOne}>Formula: </Text>
              <Text style={styles.textTwo}>{formula}</Text>
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
  name: {
    textTransform: 'capitalize',
    fontFamily: fonts.BOLD,
    color: colors.PRIMARY,
    fontSize: 24
  },
  description: {
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