import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { globalStyles } from '../styles/global'
import { useRouter } from 'expo-router'

const QuizCard = () => {
  const router = useRouter();

  return (
    <View style={[
      styles.container,
      globalStyles.shadow
    ]}>
      <View style={styles.childone}>
        <View style={styles.icon}>
          <MaterialCommunityIcons style={{ color: '#b56a52' }} name='clipboard-check-outline' size={20} />
        </View>
        <View style={styles.text}>
          <Text style={{ fontWeight: 600, color: '#315c50', fontSize: 16 }}>Everyday quiz</Text>
          <Text style={{ fontWeight: 600, color: '#315c50', fontSize: 12 }}>A quick phrase for today</Text>
        </View>
      </View>
      <Pressable
        style={styles.childtwo}
        onPress={() => router.navigate('/quiz')}
      >
        <Text style={{ color: '#eee', fontSize: 12, fontWeight: '600' }} >Start</Text>
        <MaterialCommunityIcons style={{ color: '#eee' }} name='arrow-right' size={16} />
      </Pressable>
    </View>
  )
}

export default QuizCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f0e4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderColor: '#e8dece',
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 35
  },
  childone: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16
  },
  childtwo: {
    flexDirection: 'row',
    gap: 5,
    backgroundColor: '#315c50',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center'
  },
  icon: {
    backgroundColor: '#f0dfc6',
    padding: 10,
    borderRadius: 10
  },
  text: {
    flexDirection: 'column',
    gap: 5
  }
})