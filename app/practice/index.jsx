import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, StyleSheet, BackHandler, ScrollView, TextInput, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRouter } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import { colors, fonts, globalStyles } from '../../styles/global'
import AiCorrection from '../../components/AiCorrection'
import { useAuth } from '../../context/AuthContext'
import { getDailyPractice, correctPractice, savePracticeHistory } from '../../services/practice'

const Practice = () => {
  const router = useRouter()
  const { token, loading: authLoading } = useAuth()

  const [answer, setAnswer] = useState('')
  const [finish, setFinish] = useState(false);
  const [correction, setCorrection] = useState(null);
  const [correctionLoading, setCorrectionLoading] = useState(false)
  const [correctionError, setCorrectionError] = useState(null)

  const [practice, setPractice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    if (!authLoading) {
      loadDailyPractice();
    }
  }, [token, authLoading])

  const loadDailyPractice = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!token) {
        router.replace("/login");
        return;
      }

      const data = await getDailyPractice(token);
      setPractice(data);

    } catch (error) {
      console.error("Failed to load practice:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const finishPractice = async () => {
    await AsyncStorage.removeItem('exam_active')
    router.replace('/(tabs)')
  }

  const submitAnswer = async () => {
    if (!answer.trim() || !token || !practice) {
      return
    }

    try {
      setCorrectionLoading(true)
      setCorrectionError(null)

      const data = await correctPractice(token, {
        answer: answer.trim(),
        instruction: practice.instruction,
        grammar: practice.grammar,
        vocabulary: practice.vocabulary,
      })

      await savePracticeHistory(token, {
        practice_id: practice.id,
        answer: answer.trim(),
        corrected_answer: data.corrected_answer,
        score: data.score,
        explanation: data.explanation,
      })

      setCorrection(data)
      setFinish(true)

    } catch (error) {
      console.error('Failed to correct practice:', error)
      setCorrectionError(error.message)

    } finally {
      setCorrectionLoading(false)
    }
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.PRIMARY} />
        <Text style={styles.loadingText}> Loading practice... </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.errorText}> {error} </Text>
        <Pressable style={[globalStyles.shadow, styles.submitButton]} onPress={loadDailyPractice} >
          <Text style={{ fontFamily: fonts.PRIMARY, color: colors.WHITE, fontSize: 28, }} > Try Again </Text>
        </Pressable>
      </View>
    );
  }

  if (!practice) {
    return null;
  }

  const practices = [
    {
      type: "use grammar",
      value: practice.grammar,
    },
    {
      type: "use vocab",
      value: practice.vocabulary,
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
            }}>{practice.instruction}</Text>
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
                  {(item.value || []).map((value, subIndex) => (
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
          {!finish ? (
            <Pressable
              style={[
                globalStyles.shadow,
                styles.submitButton,
                correctionLoading && { opacity: 0.7 }
              ]}
              onPress={submitAnswer}
              disabled={correctionLoading}
            >
              {correctionLoading ? (
                <ActivityIndicator
                  size="small"
                  color={colors.WHITE}
                />
              ) : (
                <Text
                  style={{
                    fontFamily: fonts.PRIMARY,
                    color: colors.WHITE,
                    fontSize: 28
                  }}
                >
                  Submit →
                </Text>
              )}
            </Pressable>
          ) : (
            <Pressable onPress={finishPractice}>
              <Text>Kembali</Text>
            </Pressable>
          )}
        </View>
        {/* END */}

        {/* AI CORRECTION */}
        {finish && correction && <AiCorrection result={correction} />}
        {/* END */}

        {correctionError && (
          <Text style={styles.errorText}>
            {correctionError}
          </Text>
        )}

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
  errorText: {
    color: 'red',
    fontFamily: fonts.SECONDARY,
    marginTop: 15,
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