import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, StyleSheet, BackHandler, ScrollView, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRouter } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import { colors, fonts, globalStyles } from '../../styles/global'
import AiCorrection from '../../components/AiCorrection'

const Practice = () => {
  const router = useRouter()

  const [answer, setAnswer] = useState('')
  const [finish, setFinish] = useState(false);
  const [correction, setCorrection] = useState(null);

  useEffect(() => {
    const backAction = () => {
      return true
    }
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    )

    return () => backHandler.remove()
  }, [])

  const finishPractice = async () => {
    await AsyncStorage.removeItem('exam_active')
    router.replace('/(tabs)')
  }

  const submitAnswer = () => {
    if (answer != '') {
      setFinish(true)
    }
  }

  const practices = [
    {
      type: "use grammar",
      value: ["simple past tense"],
    },
    {
      type: "use vocab",
      value: ["car", "pretty", "bbq"],
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Grammar Practice</Text>
      <ScrollView style={{ flex: 1 }}>

        {/* DIRECTION */}
        <View style={[styles.direction, globalStyles.shadow]}>
          <View>
            <Feather style={styles.directionIcon} name='book' size={20} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{
              fontFamily: fonts.PRIMARY,
              color: colors.PRIMARY,
              fontSize: 28
            }}>Make a sentence</Text>
            <Text style={{
              fontFamily: fonts.SECONDARY,
              color: colors.PRIMARY_LIGTH
            }}>Use the given words to make a correct sentence.</Text>
            {practices.map((item, index) => (
              <View key={index} style={styles.points}>
                <View>
                  <Text style={styles.pointsText}>{index + 1}. </Text>
                </View>
                <View>
                  <Text style={styles.pointsText}>{item.type}</Text>
                </View>
                <View>
                  <Text style={styles.pointsText}> → </Text>
                </View>
                <View style={{ flex: 1 }}>
                  {item.value.map((value, subIndex) => (
                    <Text style={styles.pointsText} key={subIndex}>
                      {value}
                    </Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
        {/* END */}

        {/* ANSWER TEXT FIELD */}
        <View style={styles.answer}>
          <TextInput
            style={[
              styles.answerField,
              finish && { opacity: 0.8 }
            ]}
            placeholderTextColor={colors.PRIMARY_LIGTH}
            placeholder="Type your answer here..."
            value={answer}
            onChangeText={setAnswer}
            keyboardType="default"
            autoCapitalize="none"
            multiline
            maxLength={200}
            editable={!finish}
          />
          <Text style={styles.characterCount}>
            {answer.length}/200
          </Text>
        </View>
        {/* END */}

        {/* SUBMIT BUTTON */}
        <View style={{ alignItems: 'flex-end' }}>
          {!finish
            ?
            <Pressable style={[globalStyles.shadow, styles.submitButton]} onPress={submitAnswer}>
              <Text style={{ fontFamily: fonts.PRIMARY, color: colors.WHITE, fontSize: 28 }}>Submit →</Text>
            </Pressable>
            :
            <Pressable onPress={finishPractice}><Text>Kembali</Text></Pressable>
          }
        </View>
        {/* END */}

        {/* AI CORRECTION */}
        {finish ? <AiCorrection /> : ''}
        {/* END */}

      </ScrollView>
    </View>
  )
}

export default Practice

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: 'center',
    backgroundColor: colors.BG
  },
  header: {
    color: colors.PRIMARY,
    fontFamily: fonts.PRIMARY,
    fontSize: 42,
    paddingBottom: 20
  },
  direction: {
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
    alignItems: 'baseline',
    padding: 14,
    borderRadius: 14,
    gap: 14
  },
  directionIcon: {
    backgroundColor: colors.PRIMARY_LIGTH,
    color: colors.WHITE,
    padding: 10,
    borderRadius: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  points: {
    flexDirection: 'row',
    gap: 1
  },
  pointsText: {
    fontFamily: fonts.BOLD,
    color: colors.PRIMARY,
    textTransform: 'capitalize',
    fontSize: 16
  },
  answer: {
    backgroundColor: colors.SECONDARY_LIGHT,
    borderColor: colors.PRIMARY_LIGTH,
    borderWidth: 1,
    marginVertical: 20,
    borderRadius: 14,
    padding: 10
  },
  answerField: {
    fontSize: 16,
    flex: 1,
    color: colors.PRIMARY,
    fontFamily: fonts.BOLD,
    height: 100,
    textAlignVertical: 'top'
  },
  characterCount: {
    fontFamily: fonts.SECONDARY,
    color: colors.PRIMARY_LIGTH,
    fontSize: 14,
    textAlign: 'right',
    marginTop: 5,
  },
  submitButton: {
    fontFamily: fonts.PRIMARY,
    backgroundColor: colors.PRIMARY,
    alignContent: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 26,
    borderRadius: 50
  }
})