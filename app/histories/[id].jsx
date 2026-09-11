import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { colors, fonts, globalStyles } from '../../styles/global'
import { AntDesign, Entypo, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'

const HistoryDetail = () => {
  const router = useRouter()
  const {
    answer,
    explanation,
    corrected_answer,
    score,
    grammar,
    completed_at,
    vocabulary,
  } = useLocalSearchParams()

  const explanations = JSON.parse(explanation)
  const grammars = JSON.parse(grammar)
  const vocabularies = JSON.parse(vocabulary)

  const completedDate = new Date(`${completed_at}Z`).toLocaleDateString('id-ID', {
    timeZone: 'Asia/Jakarta',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
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
        }}>History Details</Text>
      </Pressable>

      <View style={[globalStyles.shadow, styles.box]}>

        {/* Your Answer */}
        <View style={styles.row}>
          <Ionicons
            style={styles.iconPrimary}
            color={colors.WHITE}
            size={18}
            name="chatbox-ellipses-outline"
          />

          <View style={styles.content}>
            <Text style={styles.title}>Your answer</Text>
            <Text style={styles.answer}>
              {answer}
            </Text>
          </View>
        </View>

        {/* Corrected Answer */}
        <View style={styles.row}>
          <Entypo
            style={styles.iconRed}
            color={colors.WHITE}
            size={18}
            name="check"
          />

          <View style={styles.content}>
            <Text style={styles.title}>Corrected answer</Text>
            <Text style={[styles.answer, styles.corrected]}>
              {corrected_answer}
            </Text>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Score & Date */}
        <View style={styles.infoContainer}>

          <View style={styles.info}>
            <AntDesign
              style={styles.infoIcon}
              name="star"
              size={18}
              color={colors.PRIMARY}
            />

            <View>
              <Text style={styles.infoLabel}>Score</Text>
              <Text style={styles.infoValue}>{score}%</Text>
            </View>
          </View>

          <View style={styles.verticalDivider} />

          <View style={styles.info}>
            <MaterialIcons
              style={styles.infoIcon}
              name="date-range"
              size={18}
              color={colors.PRIMARY}
            />

            <View>
              <Text style={styles.infoLabel}>Completed at</Text>
              <Text style={styles.infoValue}>{completedDate}</Text>
            </View>
          </View>

        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.row}>
          <Feather
            style={styles.iconBlue}
            color={colors.WHITE}
            size={18}
            name="book-open"
          />

          <View style={[styles.content, { flexDirection: 'column', gap: 7 }]}>
            <View>
              <Text style={{
                fontFamily: fonts.BOLD,
                fontSize: 20,
                color: colors.PRIMARY,
              }}>Explanations</Text>
              <View style={styles.divider} />
              {explanations.map((item, i) => (
                <Text style={{
                  flexShrink: 1,
                  fontFamily: fonts.BOLD,
                  fontSize: 16,
                  color: colors.PRIMARY
                }} key={i}>• {item}</Text>
              ))}
            </View>
            <View>
              <Text style={{
                fontFamily: fonts.BOLD,
                fontSize: 20,
                color: colors.PRIMARY,
              }}>Use Grammar</Text>
              <View style={styles.divider} />
              {grammars.map((item, i) => (
                <Text style={{
                  flexShrink: 1,
                  fontFamily: fonts.BOLD,
                  fontSize: 16,
                  color: colors.PRIMARY,
                  textTransform: 'capitalize'
                }} key={i}>• {item}</Text>
              ))}
            </View>
            <View>
              <Text style={{
                fontFamily: fonts.BOLD,
                fontSize: 20,
                color: colors.PRIMARY,
              }}>Use Vocab</Text>
              <View style={styles.divider} />
              {vocabularies.map((item, i) => (
                <Text style={{
                  flexShrink: 1,
                  fontFamily: fonts.BOLD,
                  fontSize: 16,
                  color: colors.PRIMARY,
                  textTransform: 'capitalize'
                }} key={i}>• {item}</Text>
              ))}
            </View>
          </View>
        </View>


      </View>
    </View>
  )
}

export default HistoryDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG,
    paddingHorizontal: 20,
    paddingTop: 40,
    gap: 14,
  },
  backButton: {
    backgroundColor: 'rgba(136, 136, 136, 0.2)',
    padding: 10,
    borderRadius: 14
  },

  box: {
    width: '100%',
    backgroundColor: colors.WHITE,
    padding: 14,
    gap: 14,
    borderRadius: 14,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 7,
  },

  content: {
    flex: 1,
    minWidth: 0,
  },

  title: {
    fontFamily: fonts.BOLD,
    fontSize: 20,
    color: colors.PRIMARY,
  },

  answer: {
    textTransform: 'capitalize',
    backgroundColor: colors.SECONDARY_LIGHT,
    color: colors.PRIMARY_LIGTH,
    fontFamily: fonts.BOLD,
    fontSize: 18,
    flexShrink: 1,
    paddingVertical: 4,
    paddingHorizontal: 7,
    borderRadius: 7,
  },

  corrected: {
    backgroundColor: colors.LIGHT_RED,
    color: colors.RED,
  },

  iconPrimary: {
    backgroundColor: colors.PRIMARY,
    padding: 7,
    borderRadius: 18,
  },

  iconRed: {
    backgroundColor: colors.RED,
    padding: 7,
    borderRadius: 18,
  },

  iconBlue: {
    backgroundColor: colors.DARK_BLUE,
    padding: 7,
    borderRadius: 18,
  },

  divider: {
    height: 1,
    backgroundColor: colors.SECONDARY,
  },

  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  info: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 14,
  },

  infoIcon: {
    backgroundColor: colors.SECONDARY_LIGHT,
    padding: 7,
    borderRadius: 18,
  },

  infoLabel: {
    fontFamily: fonts.PRIMARY,
    color: colors.PRIMARY_LIGTH,
    fontSize: 18,
  },

  infoValue: {
    fontFamily: fonts.PRIMARY,
    color: colors.PRIMARY,
    fontSize: 22,
  },

  verticalDivider: {
    width: 2,
    backgroundColor: colors.SECONDARY,
  },
})